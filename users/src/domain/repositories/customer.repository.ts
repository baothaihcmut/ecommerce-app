import { UUID } from "crypto";
import { Customer } from "@app/domain/entities/customer.entity";
import { Prisma, PrismaClient, User } from "@prisma/client";

export default interface ICustomerRepository {
  findAllCustomers(
    offset: number,
    limit: number,
    prisma?: PrismaClient
  ): Promise<Customer[]>; // Find multiple customers with pagination
  findCustomerByUserId(
    userId: string,
    prisma?: PrismaClient
  ): Promise<Customer | null>; // Find a customer by user ID (relation to User)
}
