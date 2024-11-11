import { loadConfig } from "./config/config";
import { Server } from "./server/server";
import { PrismaClient } from "@prisma/client";
import { Server as GRPCServer, ServerCredentials } from "@grpc/grpc-js";

const main = () => {
  const config = loadConfig();
  const grpc = new GRPCServer();
  const prisma = new PrismaClient();
  const server = new Server({
    config,
    grpc,
    prisma,
  });
  server.run();
};

main();
