import { Customer } from "../../../domain/entities/customer.entity"; // Adjust path as necessary
import ICustomerRepository from "../../../domain/repositories/customer.repository"; // Adjust path as necessary
import { PrismaClient } from "@prisma/client";

export default class PrismaCustomerRepository implements ICustomerRepository {
  private prismaClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this.prismaClient = prismaClient;
  }

  async findAllCustomers(offset: number, limit: number): Promise<Customer[]> {
    const res = await this.prismaClient.customer.findMany({
      skip: offset,
      take: limit,
    });
    return res as Customer[];
  }

  async findCustomerByUserId(id: string): Promise<Customer> {
    const res = await this.prismaClient.customer.findFirst({
      where: {
        userId: id,
      },
    });
    return res as Customer;
  }
}
