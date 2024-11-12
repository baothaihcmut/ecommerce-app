import CreateUserCommand from "@app/application/command/create-user.command";
import UpdateUserCommand, {
  UpdateUserInfo,
} from "@app/application/command/update-user.command";
import { CreateUserUC } from "@app/application/usecase/create-user.usecase";
import { UpdateUserUC } from "@app/application/usecase/update.user.usecase";
import ValidateUserUC from "@app/application/usecase/validate-user.usecase";
import { AppError } from "@app/common/exception/app.error";
import {
  getGender,
  getGenderNumber,
  getRole,
  getRoleNumber,
} from "@app/common/utils/utils";
import {
  ChangePasswordRequest,
  CreateUserRequest,
  CreateUserResponse,
  Empty,
  UpdateRefreshTokenRequest,
  UpdateUserRequest,
  UpdateUserResponse,
  UsersServiceServer,
  ValidateUserRequest,
} from "@app/infrastructure/proto/com/ecommerceapp/v1/users";
import { sendUnaryData, ServerUnaryCall } from "@grpc/grpc-js";
import { Status } from "@grpc/grpc-js/build/src/constants";

export function UserService(
  createUserUC: CreateUserUC,
  updateUserUC: UpdateUserUC,
  validateUserUC: ValidateUserUC
): UsersServiceServer {
  async function createUser(
    call: ServerUnaryCall<CreateUserRequest, CreateUserResponse>,
    callback: sendUnaryData<CreateUserResponse>
  ) {
    const dto = call.request;
    try {
      const res = await createUserUC.createUser({
        ...dto,
        gender: getGender(dto.gender),
        role: getRole(dto.role),
      });
      callback(null, {
        ...res,
        role: getRoleNumber(res.role),
        gender: getGenderNumber(res.gender),
      });
    } catch (e) {
      if (e instanceof AppError) {
        callback(
          {
            code: e.code,
            message: e.message,
          },
          undefined
        );
      } else {
        callback({
          code: Status.INTERNAL,
          message: `Internal Error`,
        });
      }
    }
  }
  async function updateUser(
    call: ServerUnaryCall<UpdateUserRequest, UpdateUserResponse>,
    callback: sendUnaryData<UpdateUserResponse>
  ) {
    const dto = call.request;
    const userId = dto.userId?.userId;
    const userInfo = dto.updateInfo;
    if (!userId || !userInfo) {
      callback({
        code: Status.INVALID_ARGUMENT,
        message: "user id and user info required",
      });
    }
    try {
      const res = await updateUserUC.updateUser({
        userId: userId as string,
        updateInfo: dto.updateInfo as UpdateUserInfo,
      });
      callback(null, {
        ...res,
        role: getRoleNumber(res.role),
        gender: getGenderNumber(res.gender),
      });
    } catch (e) {
      if (e instanceof AppError) {
        callback({
          code: e.code,
          message: e.message,
        });
      } else {
        callback({
          code: Status.INTERNAL,
          message: "Internal Error",
        });
      }
    }
  }
  async function changePassword(
    call: ServerUnaryCall<ChangePasswordRequest, Empty>,
    callback: sendUnaryData<Empty>
  ) {
    const dto = call.request;
    try {
      await updateUserUC.changePassword(dto);
      callback(null, {});
    } catch (e) {
      if (e instanceof AppError) {
        callback({
          code: e.code,
          message: e.message,
        });
      } else {
        callback({
          code: Status.INTERNAL,
          message: "Internal Error",
        });
      }
    }
  }
  async function updateRefreshToken(
    call: ServerUnaryCall<UpdateRefreshTokenRequest, Empty>,
    callback: sendUnaryData<Empty>
  ) {
    const dto = call.request;
    try {
      await updateUserUC.updateRefreshToken(dto);
      callback(null, {});
    } catch (e) {
      if (e instanceof AppError) {
        callback({
          code: e.code,
          message: e.message,
        });
      } else {
        callback({
          code: Status.INTERNAL,
          message: "Internal Error",
        });
      }
    }
  }
  async function validateUser(
    call: ServerUnaryCall<ValidateUserRequest, Empty>,
    callback: sendUnaryData<Empty>
  ) {
    const dto = call.request;
    try {
      await validateUserUC.validateUser(dto);
      callback(null, {});
    } catch (e) {
      if (e instanceof AppError) {
        callback({
          code: e.code,
          message: e.message,
        });
      } else {
        callback({
          code: Status.INTERNAL,
          message: "Internal Error",
        });
      }
    }
  }
  return {
    createUser,
    updateUser,
    changePassword,
    updateRefreshToken,
    validateUser,
  };
}
