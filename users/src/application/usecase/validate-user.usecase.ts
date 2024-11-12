import { AppError } from "@app/common/exception/app.error";
import { AppErrorCode } from "@app/common/exception/error.enum";
import IUserRepository from "@app/domain/repositories/user.repositoty";
import * as bcrypt from "bcrypt";
import { ValidateUserQuery } from "../query/validate-user.query";
export default class ValidateUserUC {
  constructor(private userRepository: IUserRepository) {}
  async validateUser(validateUserQuery: ValidateUserQuery): Promise<void> {
    const user = await this.userRepository.findOneUserByCondition({
      username: validateUserQuery.username,
    });
    const isValid = bcrypt.compareSync(
      validateUserQuery.password,
      user.password
    );
    if (!isValid) {
      throw new AppError(AppErrorCode.WRONG_USERNAME_PASSWORD);
    }
  }
}
