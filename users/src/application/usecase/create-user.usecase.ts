import { Transaction } from "@app/infrastructure/db/prisma/transaction.repository";
import IUserRepository from "@app/domain/repositories/user.repositoty";
import CreateUserCommand from "@app/application/command/create-user.command";
import { User } from "@app/domain/entities/user.entity";

export class CreateUserUC {
  private transaction: Transaction;
  private userRepository: IUserRepository;

  constructor(transaction: Transaction, userRepository: IUserRepository) {
    this.transaction = transaction;
    this.userRepository = userRepository;
  }
  async createUser(createUserCommand: CreateUserCommand): Promise<User> {
    return await this.transaction.executeTransaction<User>(
      async (prismaClient): Promise<User> => {
        const res = await this.userRepository.createUser(
          createUserCommand as User,
          prismaClient
        );
        return res;
      }
    );
  }
}
