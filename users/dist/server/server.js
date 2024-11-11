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
const grpc_js_1 = require("@grpc/grpc-js");
const users_1 = require("../infrastructure/proto/com/ecommerceapp/v1/users");
const users_controller_1 = require("../interface/delivery/grpc/controllers/users.controller");
class Server {
    constructor(args) {
        this.grpc = args.grpc;
        this.prisma = args.prisma;
        this.config = args.config;
    }
    initServer() {
        //init repository
        const transactionRepository = new transaction_repository_1.Transaction(this.prisma);
        const userRepository = new user_repositoty_1.default(this.prisma);
        const shipperRepository = new shipper_repository_1.default(this.prisma);
        const shopOwnerRepository = new shop_owner_repository_1.default(this.prisma);
        //init use case
        const createUserUC = new create_user_usecase_1.CreateUserUC(transactionRepository, userRepository);
        //init conteoller
        this.grpc.addService(users_1.UsersServiceService, (0, users_controller_1.UserService)(createUserUC));
    }
    run() {
        console.log(this.config.serverConfig.port);
        this.grpc.bindAsync(`localhost:${this.config.serverConfig.port}`, grpc_js_1.ServerCredentials.createInsecure(), (err, port) => {
            if (err) {
                throw err;
            }
            console.log(`Server is running on port ${this.config.serverConfig.port}`);
        });
    }
}
exports.Server = Server;
