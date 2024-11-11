"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config/config");
const server_1 = require("./server/server");
const client_1 = require("@prisma/client");
const grpc_js_1 = require("@grpc/grpc-js");
const main = () => {
    const config = (0, config_1.loadConfig)();
    const grpc = new grpc_js_1.Server();
    const prisma = new client_1.PrismaClient();
    const server = new server_1.Server({
        config,
        grpc,
        prisma,
    });
    server.run();
};
main();
