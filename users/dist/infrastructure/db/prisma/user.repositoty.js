"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const role_enum_1 = require("../../../domain/entities/role.enum");
class PrismaUserRepository {
    constructor(prismaClient) {
        this.prismaClient = prismaClient;
    }
    async createUser(user, prisma) {
        const db = prisma || this.prismaClient;
        const res = (await db.user.create({
            data: user,
        }));
        if (user.role === role_enum_1.Role.ROLE_CUSTOMER) {
            if (!user.customer) {
                throw new Error("Lack of customer detail");
            }
            const customer = (await db.customer.create({
                data: user.customer,
            }));
            res.customer = customer;
        }
        else if (user.role === role_enum_1.Role.ROLE_SHIPPER) {
            if (!user.shipper) {
                throw new Error("Lack of customer detail");
            }
            const shipper = (await db.shipper.create({
                data: user.shipper,
            }));
            res.shipper = shipper;
        }
        else if (user.role === role_enum_1.Role.ROLE_SHOPOWNER) {
            if (!user.shipper) {
                throw new Error("Lack of customer detail");
            }
            const shipper = (await db.shopOwner.create({
                data: user.shopOwner,
            }));
            res.shopOwner = shipper;
        }
        return res;
    }
    async deleteUser(id, prisma) {
        const db = prisma || this.prismaClient;
        await db.user.delete({
            where: {
                id: id,
            },
        });
    }
    async updateUser(id, user, prisma) {
        const db = prisma || this.prismaClient;
        const res = (await db.user.update({
            where: {
                id: id,
            },
            data: user,
        }));
        if (res.role == role_enum_1.Role.ROLE_CUSTOMER && user.customer) {
            const customerDetail = (await db.customer.update({
                where: {
                    userId: id,
                },
                data: user.customer,
            }));
            res.customer = customerDetail;
            return res;
        }
        if (res.role == role_enum_1.Role.ROLE_SHIPPER && user.shipper) {
            const shipperDetail = (await db.shipper.update({
                where: {
                    userId: id,
                },
                data: user.shipper,
            }));
            res.shipper = shipperDetail;
            return res;
        }
        if (res.role == role_enum_1.Role.ROLE_SHOPOWNER && user.shopOwner) {
            const shopOwnerDetail = (await db.shopOwner.update({
                where: {
                    userId: id,
                },
                data: user.shopOwner,
            }));
            res.shopOwner = shopOwnerDetail;
            return res;
        }
        return res;
    }
    async findAllUser(offset, limit, prisma) {
        const db = prisma || this.prismaClient;
        const res = (await db.user.findMany({
            skip: offset,
            take: limit,
        }));
        return res;
    }
    async findUserByID(id, prisma) {
        const db = prisma || this.prismaClient;
        const res = await db.user.findFirst({
            where: {
                id: id,
            },
        });
        return res;
    }
}
exports.default = PrismaUserRepository;
