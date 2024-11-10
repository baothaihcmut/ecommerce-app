import { ShopOwner } from "@app/domain/entities/shopowner.entity"; // Adjust path as necessary
import IShopOwnerRepository from "@app/domain/repositories/shop-owner.repository"; // Adjust path as necessary
import { PrismaClient } from "@prisma/client";

export default class PrismaShopOwnerRepository implements IShopOwnerRepository {
  private prismaClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this.prismaClient = prismaClient;
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
