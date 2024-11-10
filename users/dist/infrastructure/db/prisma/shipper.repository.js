"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PrismaShipperRepository {
    constructor(prismaClient) {
        this.prismaClient = prismaClient;
    }
    async findAllShippers(offset, limit) {
        const res = await this.prismaClient.shipper.findMany({
            skip: offset,
            take: limit,
        });
        return res;
    }
    async findShipperByUserId(id) {
        const res = await this.prismaClient.shipper.findFirst({
            where: {
                userId: id,
            },
        });
        return res;
    }
}
exports.default = PrismaShipperRepository;
