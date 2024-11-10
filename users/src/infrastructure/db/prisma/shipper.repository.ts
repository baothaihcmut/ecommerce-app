import { UUID } from "crypto";
import { Shipper } from "@app/domain/entities/shipper.entity"; // Adjust path as necessary
import IShipperRepository from "@app/domain/repositories/shipper.repository"; // Adjust path as necessary
import { PrismaClient } from "@prisma/client";

export default class PrismaShipperRepository implements IShipperRepository {
  private prismaClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this.prismaClient = prismaClient;
  }

  async findAllShippers(offset: number, limit: number): Promise<Shipper[]> {
    const res = await this.prismaClient.shipper.findMany({
      skip: offset,
      take: limit,
    });
    return res as Shipper[];
  }

  async findShipperByUserId(id: string): Promise<Shipper> {
    const res = await this.prismaClient.shipper.findFirst({
      where: {
        userId: id,
      },
    });
    return res as Shipper;
  }
}
