"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const transaction_repository_1 = require("../infrastructure/db/prisma/transaction.repository");
const user_repositoty_1 = __importDefault(require("../infrastructure/db/prisma/user.repositoty"));
const shipper_repository_1 = __importDefault(require("../infrastructure/db/prisma/shipper.repository"));
const shop_owner_repository_1 = __importDefault(require("../infrastructure/db/prisma/shop-owner.repository"));
const create_user_usecase_1 = require("../application/usecase/create-user.usecase");
const user_handler_1 = require("../interface/delivery/kafka/handler/user.handler");
class Server {
    constructor(args) {
        this.kafka = args.kafka;
        this.prisma = args.prisma;
        this.config = args.config;
        this.router = args.router;
    }
    initServer() {
        //init repository
        const transactionRepository = new transaction_repository_1.Transaction(this.prisma);
        const userRepository = new user_repositoty_1.default(this.prisma);
        const shipperRepository = new shipper_repository_1.default(this.prisma);
        const shopOwnerRepository = new shop_owner_repository_1.default(this.prisma);
        //init use case
        const createUserUC = new create_user_usecase_1.CreateUserUC(transactionRepository, userRepository);
        //init handler
        const userHandler = new user_handler_1.UserHandler(createUserUC);
        userHandler.initHandler(this.router);
    }
    run() {
        const consumer = this.kafka.consumer({ groupId: this.config.kafkaConfig.groupId });
        const runConsumer = async () => {
            await consumer.connect();
            const topics = Object.keys(this.router.mapHandler);
            await Promise.all(topics.map(topic => consumer.subscribe({ topic, fromBeginning: true })));
            await consumer.run({
                eachMessage: async ({ topic, partition, message }) => {
                    const data = message.value ? JSON.parse(message.value.toString()) : undefined;
                    this.router.mapHandler[topic](data);
                }
            });
        };
        console.log("Service running");
        runConsumer().catch(console.error);
    }
}
exports.Server = Server;
