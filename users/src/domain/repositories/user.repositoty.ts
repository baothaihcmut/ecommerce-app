import { Customer, PrismaClient, Shipper, ShopOwner } from "@prisma/client";
import { User } from "@app/domain/entities/user.entity";
export default interface IUserRepository {
  createUser(
    user: Omit<User, "id" | "customer" | "shipper" | "shopOwner">,
    prisma?: PrismaClient
  ): Promise<User>;
  deleteUser(id: string, prisma?: PrismaClient): Promise<void>;
  updateUser(
    id: string,
    user: Partial<User>,
    prisma?: PrismaClient
  ): Promise<User>;
  findAllUser(
    offset: number,
    limit: number,
    prisma?: PrismaClient
  ): Promise<User[]>;
  findUserByID(id: string, prisma?: PrismaClient): Promise<User>;
}
