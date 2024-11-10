import { UUID } from "crypto";
import { Shipper } from "@app/domain/entities/shipper.entity";
import { PrismaClient } from "@prisma/client";

export default interface IShipperRepository {
  findAllShippers(
    offset: number,
    limit: number,
    prisma?: PrismaClient
  ): Promise<Shipper[]>; // Find multiple shippers with pagination
  findShipperByUserId(
    userId: string,
    prisma?: PrismaClient
  ): Promise<Shipper | null>; // Find a shipper by their user ID
}
