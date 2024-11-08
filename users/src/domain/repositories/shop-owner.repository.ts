import { PrismaClient } from "@prisma/client";
import { ShopOwner } from "./../entities/shopowner.entity";

export default interface IShopOwnerRepository {
  findAllShopOwners(
    offset: number,
    limit: number,
    prisma?: PrismaClient
  ): Promise<ShopOwner[]>; // Find multiple shop owners with pagination
  findShopOwnerByUserId(
    userId: string,
    prisma?: PrismaClient
  ): Promise<ShopOwner | null>; // Find a shop owner by their user ID
}
