import { UUID } from "crypto";
import { User } from "../../../domain/entities/user.entity";
import IUserRepository from "../../../domain/repositories/user.repositoty";
import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4, validate } from 'uuid';



export default class PrismaUserRepository implements IUserRepository {
    private prismaClient: PrismaClient;

    constructor(prismaClient:PrismaClient) {
        this.prismaClient= prismaClient;
    }


    async createUser(user: Omit<User,'id'|'customer'|'shipper'|'shopOwner'>): Promise<User> {
        const res= await this.prismaClient.user.create({
            data:user,
        });
        return res as User;
    }
    async deleteUser(id: string): Promise<void> {
        await this.prismaClient.user.delete({
            where:{
                id: id
            }
        })
    }
    async updateUser(id: string, user: Partial< Omit<User,'id'|'customer'|'shipper'|'shopOwner'>>): Promise<User> {
        const res = await this.prismaClient.user.update({
            where:{
                id :id
            },
            data:user,
        })
        return res as User;
    }
    async findAllUser(offset: number, limit: number): Promise<User[]> {
        const res = await this.prismaClient.user.findMany({
            skip: offset,
            take : limit
        })
        return res as User[];
    }
    async findUserByID(id: string): Promise<User> {
        const res = await this.prismaClient.user.findFirst({
            where:{
                id: id
            }
        })
        return res as User;
    }
}