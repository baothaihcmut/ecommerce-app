"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kafkajs_1 = require("kafkajs");
const config_1 = require("./config/config");
const server_1 = require("./server/server");
const client_1 = require("@prisma/client");
const app_router_1 = require("./interface/delivery/kafka/router/app.router");
const main = () => {
    const config = (0, config_1.loadConfig)();
    const kafka = new kafkajs_1.Kafka({
        clientId: config.kafkaConfig.clientId,
        brokers: [config.kafkaConfig.broker],
    });
    const prisma = new client_1.PrismaClient();
    const router = new app_router_1.AppRouter();
    const server = new server_1.Server({
        config,
        kafka,
        prisma,
        router,
    });
    server.run();
};
main();
