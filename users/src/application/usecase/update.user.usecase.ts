import IUserRepository from "@app/domain/repositories/user.repositoty";
import { Transaction } from "@app/infrastructure/db/prisma/transaction.repository";
import UpdateUserCommand from "../command/update-user.command";
import { User } from "../../domain/entities/user.entity";
import UpdateUserResult from "../result/update-user.result";
import { AppError } from "@app/common/exception/app.error";
import { AppErrorCode } from "@app/common/exception/error.enum";
import * as bcrypt from "bcrypt";
import { ChangePasswordCommand } from "../command/change-password.command";
import ChangeRefreshTokenCommand from "../command/change-refresh-token.command";

export class UpdateUserUC {
  constructor(
    private transaction: Transaction,
    private userRepository: IUserRepository
  ) {}
  async updateUser(
    updateCommand: UpdateUserCommand
  ): Promise<UpdateUserResult> {
    return await this.transaction.executeTransaction(async (prismaClient) => {
      const res = await this.userRepository.updateUser(
        updateCommand.userId,
        updateCommand.updateInfo as Partial<User>
      );
      return res;
    });
  }

  async updateRefreshToken(
    changeRefreshTokenCommand: ChangeRefreshTokenCommand
  ) {
    return await this.transaction.executeTransaction(async (prismaClient) => {
      const res = await this.userRepository.updateUser(
        changeRefreshTokenCommand.userId,
        {
          currentRefreshToken: changeRefreshTokenCommand.refreshToken,
        }
      );
      if (!res) {
        throw new AppError(AppErrorCode.USER_NOT_FOUND);
      }
    });
  }
  async changePassword(
    changPasswordCommand: ChangePasswordCommand
  ): Promise<void> {
    return await this.transaction.executeTransaction(async (prismaClient) => {
      const user = await this.userRepository.findUserByID(
        changPasswordCommand.userId,
        prismaClient
      );
      if (!user) {
        throw new AppError(AppErrorCode.USER_NOT_FOUND);
      }
      const isValid = bcrypt.compareSync(
        changPasswordCommand.oldPassword,
        user.password
      );
      if (!isValid) {
        throw new AppError(AppErrorCode.WRONG_USERNAME_PASSWORD);
      }
      const hashPassword = bcrypt.hashSync(
        changPasswordCommand.newPassword,
        10
      );
      const res = await this.userRepository.updateUser(
        changPasswordCommand.userId,
        {
          password: hashPassword,
        }
      );
      if (!res) {
        throw new AppError(AppErrorCode.USER_NOT_FOUND);
      }
    });
  }
}
