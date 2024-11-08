"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PrismaShopOwnerRepository {
    constructor(prismaClient) {
        this.prismaClient = prismaClient;
    }
    async findAllShopOwners(offset, limit) {
        const res = await this.prismaClient.shopOwner.findMany({
            skip: offset,
            take: limit,
        });
        return res;
    }
    async findShopOwnerByUserId(id) {
        const res = await this.prismaClient.shopOwner.findFirst({
            where: {
                userId: id,
            },
        });
        return res;
    }
}
exports.default = PrismaShopOwnerRepository;
