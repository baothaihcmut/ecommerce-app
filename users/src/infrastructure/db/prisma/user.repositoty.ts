import { UUID } from "crypto";
import { User } from "../../../domain/entities/user.entity";
import IUserRepository from "../../../domain/repositories/user.repositoty";
import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4, validate } from "uuid";
import { Role } from "../../../domain/entities/role.enum";
import { Customer } from "../../../domain/entities/customer.entity";
import { Shipper } from "../../../domain/entities/shipper.entity";
import { ShopOwner } from "../../../domain/entities/shopowner.entity";

export default class PrismaUserRepository implements IUserRepository {
  private prismaClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this.prismaClient = prismaClient;
  }

  async createUser(user: User, prisma?: PrismaClient): Promise<User> {
    const db = prisma || this.prismaClient;
    const res: User = (await db.user.create({
      data: user as Omit<User, "customer" | "shipper" | "shopOwner">,
    })) as User;
    if (user.role === Role.Customer) {
      if (!user.customer) {
        throw new Error("Lack of customer detail");
      }
      const customer = (await db.customer.create({
        data: user.customer as Omit<Customer, "user">,
      })) as Customer;
      res.customer = customer;
    } else if (user.role === Role.Shipper) {
      if (!user.shipper) {
        throw new Error("Lack of customer detail");
      }
      const shipper = (await db.shipper.create({
        data: user.shipper as Omit<Shipper, "user">,
      })) as Shipper;
      res.shipper = shipper;
    } else if (user.role === Role.ShopOwner) {
      if (!user.shipper) {
        throw new Error("Lack of customer detail");
      }
      const shipper = (await db.shopOwner.create({
        data: user.shopOwner as Omit<ShopOwner, "user">,
      })) as ShopOwner;
      res.shopOwner = shipper;
    }
    return res;
  }
  async deleteUser(id: string, prisma?: PrismaClient): Promise<void> {
    const db = prisma || this.prismaClient;
    await db.user.delete({
      where: {
        id: id,
      },
    });
  }
  async updateUser(
    id: string,
    user: Partial<User>,
    prisma?: PrismaClient
  ): Promise<User> {
    const db = prisma || this.prismaClient;
    const res = (await db.user.update({
      where: {
        id: id,
      },
      data: user as Omit<User, "customer" | "shipper" | "shopOwner">,
    })) as User;
    if (res.role == Role.Customer && user.customer) {
      const customerDetail = (await db.customer.update({
        where: {
          userId: id,
        },
        data: user.customer as Partial<Omit<Customer, "user">>,
      })) as Customer;
      res.customer = customerDetail;
      return res;
    }
    if (res.role == Role.Shipper && user.shipper) {
      const shipperDetail = (await db.shipper.update({
        where: {
          userId: id,
        },
        data: user.shipper as Partial<Omit<Shipper, "user">>,
      })) as Shipper;
      res.shipper = shipperDetail;
      return res;
    }
    if (res.role == Role.ShopOwner && user.shopOwner) {
      const shopOwnerDetail = (await db.shopOwner.update({
        where: {
          userId: id,
        },
        data: user.shopOwner as Partial<Omit<ShopOwner, "user">>,
      })) as ShopOwner;
      res.shopOwner = shopOwnerDetail;
      return res;
    }
    return res;
  }
  async findAllUser(
    offset: number,
    limit: number,
    prisma?: PrismaClient
  ): Promise<User[]> {
    const db = prisma || this.prismaClient;
    const res = (await db.user.findMany({
      skip: offset,
      take: limit,
    })) as User[];
    return res as User[];
  }
  async findUserByID(id: string, prisma?: PrismaClient): Promise<User> {
    const db = prisma || this.prismaClient;
    const res = await db.user.findFirst({
      where: {
        id: id,
      },
    });
    return res as User;
  }
}
