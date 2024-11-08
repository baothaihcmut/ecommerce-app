"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
class Transaction {
    constructor(prismaClient) {
        this.prismaClient = prismaClient;
    }
    async executeTransaction(transaction) {
        return await this.prismaClient.$transaction(async (prismaTransaction) => {
            return await transaction(prismaTransaction);
        });
    }
}
exports.Transaction = Transaction;
