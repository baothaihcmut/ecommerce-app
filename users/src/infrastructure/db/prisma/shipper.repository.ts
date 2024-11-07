import { UUID } from "crypto";
import { Shipper } from "../../../domain/entities/shipper.entity";  // Adjust path as necessary
import IShipperRepository from "../../../domain/repositories/shipper.repository";  // Adjust path as necessary
import { PrismaClient } from "@prisma/client";

export default class PrismaShipperRepository implements IShipperRepository {
    private prismaClient: PrismaClient;

    constructor(prismaClient: PrismaClient) {
        this.prismaClient = prismaClient;
    }

    async createShipper(shipper: Omit<Shipper, 'id' | 'user'>): Promise<Shipper> {
        const res = await this.prismaClient.shipper.create({
            data: shipper,
        });
        return res as Shipper;
    }

    async deleteShipper(id: string): Promise<void> {
        await this.prismaClient.shipper.delete({
            where: {
                userId: id,
            },
        });
    }

    async updateShipper(id: string, shipper: Partial<Omit<Shipper, 'id' | 'user'>>): Promise<Shipper> {
        const res = await this.prismaClient.shipper.update({
            where: {
                userId: id,
            },
            data: shipper,
        });
        return res as Shipper;
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
