import { ShopOwner } from "../../../domain/entities/shopowner.entity";  // Adjust path as necessary
import IShopOwnerRepository from "../../../domain/repositories/shop-owner.repository";  // Adjust path as necessary
import { PrismaClient } from "@prisma/client";

export default class PrismaShopOwnerRepository implements IShopOwnerRepository {
    private prismaClient: PrismaClient;

    constructor(prismaClient: PrismaClient) {
        this.prismaClient = prismaClient;
    }

    async createShopOwner(shopOwner: Omit<ShopOwner, 'id' | 'user'>): Promise<ShopOwner> {
        const res = await this.prismaClient.shopOwner.create({
            data: shopOwner,
        });
        return res as ShopOwner;
    }

    async deleteShopOwner(id: string): Promise<void> {
        await this.prismaClient.shopOwner.delete({
            where: {
                userId: id,
            },
        });
    }

    async updateShopOwner(id: string, shopOwner: Partial<Omit<ShopOwner, 'id' | 'user'>>): Promise<ShopOwner> {
        const res = await this.prismaClient.shopOwner.update({
            where: {
                userId: id,
            },
            data: shopOwner,
        });
        return res as ShopOwner;
    }

    async findAllShopOwners(offset: number, limit: number): Promise<ShopOwner[]> {
        const res = await this.prismaClient.shopOwner.findMany({
            skip: offset,
            take: limit,
        });
        return res as ShopOwner[];
    }

    async findShopOwnerByUserId(id: string): Promise<ShopOwner> {
        const res = await this.prismaClient.shopOwner.findFirst({
            where: {
                userId: id,
            },
        });
        return res as ShopOwner;
    }
}
