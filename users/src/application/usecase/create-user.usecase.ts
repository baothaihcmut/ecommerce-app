import { Transaction } from "@app/infrastructure/db/prisma/transaction.repository";
import IUserRepository from "@app/domain/repositories/user.repositoty";
import CreateUserCommand from "@app/application/command/create-user.command";
import { User } from "@app/domain/entities/user.entity";
import CreateUserResult from "../result/create-user.result";
import * as bcrypt from "bcrypt";

export class CreateUserUC {
  constructor(
    private transaction: Transaction,
    private userRepository: IUserRepository
  ) {}
  async createUser(
    createUserCommand: CreateUserCommand
  ): Promise<CreateUserResult> {
    return await this.transaction.executeTransaction<User>(
      async (prismaClient): Promise<User> => {
        createUserCommand.password = bcrypt.hashSync(
          createUserCommand.password,
          10
        );
        const res = await this.userRepository.createUser(
          createUserCommand as User,
          prismaClient
        );
        return res;
      }
    );
  }
}
