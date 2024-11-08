import { Transaction } from "../../infrastructure/db/prisma/transaction.repository";
import IUserRepository from "../../domain/repositories/user.repositoty";
import CreateUserCommand from "../command/create-user.command";
import { User } from "../../domain/entities/user.entity";

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
          createUserCommand.toEntity(),
          prismaClient
        );
        return res;
      }
    );
  }
}
