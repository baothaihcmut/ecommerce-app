"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PrismaCustomerRepository {
    constructor(prismaClient) {
        this.prismaClient = prismaClient;
    }
    async findAllCustomers(offset, limit) {
        const res = await this.prismaClient.customer.findMany({
            skip: offset,
            take: limit,
        });
        return res;
    }
    async findCustomerByUserId(id) {
        const res = await this.prismaClient.customer.findFirst({
            where: {
                userId: id,
            },
        });
        return res;
    }
}
exports.default = PrismaCustomerRepository;
