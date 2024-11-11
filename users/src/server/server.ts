import { PrismaClient } from "@prisma/client";
import { Config } from "../config/config";
import { Transaction } from "../infrastructure/db/prisma/transaction.repository";
import PrismaUserRepository from "../infrastructure/db/prisma/user.repositoty";
import PrismaShipperRepository from "../infrastructure/db/prisma/shipper.repository";
import PrismaShopOwnerRepository from "../infrastructure/db/prisma/shop-owner.repository";
import { CreateUserUC } from "../application/usecase/create-user.usecase";
import { Server as GRPCServer, ServerCredentials } from "@grpc/grpc-js";
import { UsersServiceService } from "@app/infrastructure/proto/com/ecommerceapp/v1/users";
import { UserService } from "@app/interface/delivery/grpc/controllers/users.controller";
type initServer = {
  grpc: GRPCServer;
  prisma: PrismaClient;
  config: Config;
};

export class Server {
  private grpc: GRPCServer;
  private prisma: PrismaClient;
  private config: Config;

  constructor(args: initServer) {
    this.grpc = args.grpc;
    this.prisma = args.prisma;
    this.config = args.config;
  }

  initServer() {
    //init repository
    const transactionRepository = new Transaction(this.prisma);
    const userRepository = new PrismaUserRepository(this.prisma);
    const shipperRepository = new PrismaShipperRepository(this.prisma);
    const shopOwnerRepository = new PrismaShopOwnerRepository(this.prisma);
    //init use case
    const createUserUC = new CreateUserUC(
      transactionRepository,
      userRepository
    );
    //init conteoller
    this.grpc.addService(UsersServiceService, UserService(createUserUC));
  }

  run() {
    console.log(this.config.serverConfig.port);
    this.grpc.bindAsync(
      `localhost:${this.config.serverConfig.port}`,
      ServerCredentials.createInsecure(),
      (err, port) => {
        if (err) {
          throw err;
        }
        console.log(
          `Server is running on port ${this.config.serverConfig.port}`
        );
      }
    );
  }
}
