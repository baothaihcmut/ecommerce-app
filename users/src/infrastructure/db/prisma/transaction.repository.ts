import { PrismaClient } from "@prisma/client";

export class Transaction {
  private prismaClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this.prismaClient = prismaClient;
  }
  async executeTransaction<T>(
    transaction: (prisma: PrismaClient) => Promise<T>
  ): Promise<T> {
    return await this.prismaClient.$transaction(async (prismaTransaction) => {
      return await transaction(prismaTransaction as PrismaClient);
    });
  }
}
