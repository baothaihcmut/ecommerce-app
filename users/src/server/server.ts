import { PrismaClient } from "@prisma/client";
import { Kafka } from "kafkajs";
import { Config } from "../config/config";
import { Transaction } from "../infrastructure/db/prisma/transaction.repository";
import PrismaUserRepository from "../infrastructure/db/prisma/user.repositoty";
import PrismaShipperRepository from "../infrastructure/db/prisma/shipper.repository";
import PrismaShopOwnerRepository from "../infrastructure/db/prisma/shop-owner.repository";
import { CreateUserUC } from "../application/usecase/create-user.usecase";
import { AppRouter } from "../interface/delivery/kafka/router/app.router";
import { UserHandler } from "../interface/delivery/kafka/handler/user.handler";
import { KafkaMessage } from "../interface/delivery/kafka/interface/message.interface";

type initServer={
    kafka: Kafka;
    prisma: PrismaClient;
    config:Config;
    router: AppRouter;
}

export class Server{
    private kafka: Kafka;
    private prisma: PrismaClient;
    private config: Config;
    private router: AppRouter;

    constructor(args: initServer){
        this.kafka = args.kafka;
        this.prisma = args.prisma;
        this.config = args.config;
        this.router = args.router;
    }

    initServer(){
        //init repository
        const transactionRepository = new Transaction(this.prisma);
        const userRepository = new PrismaUserRepository(this.prisma);
        const shipperRepository = new PrismaShipperRepository(this.prisma);
        const shopOwnerRepository = new PrismaShopOwnerRepository(this.prisma);
        //init use case
        const createUserUC = new CreateUserUC(transactionRepository,userRepository);
        //init handler
        const userHandler = new UserHandler(createUserUC);
        userHandler.initHandler(this.router);
    }

    run(){
        const consumer =  this.kafka.consumer({groupId: this.config.kafkaConfig.groupId});
        const runConsumer = async ()=>{
            await consumer.connect();
            const topics = Object.keys(this.router.mapHandler);
            await Promise.all(
                topics.map(topic => consumer.subscribe({ topic, fromBeginning: true }))
            );
            await consumer.run({
                eachMessage: async ({topic, partition, message})=>{
                    const data: KafkaMessage<any> = message.value? JSON.parse(message.value.toString()) : undefined; 
                    this.router.mapHandler[topic](data);
                }
            })
        }
        console.log("Service running")
        runConsumer().catch(console.error)
    }

}