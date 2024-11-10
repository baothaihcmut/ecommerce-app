import { Kafka } from 'kafkajs';
import { loadConfig } from './config/config';
import { Server } from './server/server';
import { PrismaClient } from '@prisma/client';
import { AppRouter } from './interface/delivery/kafka/router/app.router';


const main = ()=>{
    const config = loadConfig();
    const kafka = new Kafka({
        clientId: config.kafkaConfig.clientId,
        brokers: [config.kafkaConfig.broker],
    });
    const prisma = new PrismaClient();
    const router = new AppRouter();
    const server = new Server({
        config,
        kafka,
        prisma,
        router,
    })
    server.run();
}

main()