"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUC = void 0;
class CreateUserUC {
    constructor(transaction, userRepository) {
        this.transaction = transaction;
        this.userRepository = userRepository;
    }
    async createUser(createUserCommand) {
        return await this.transaction.executeTransaction(async (prismaClient) => {
            const res = await this.userRepository.createUser(createUserCommand.toEntity(), prismaClient);
            return res;
        });
    }
}
exports.CreateUserUC = CreateUserUC;
