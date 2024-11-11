import CreateUserCommand from "@app/application/command/create-user.command";
import { CreateUserUC } from "@app/application/usecase/create-user.usecase";
import { AppError } from "@app/common/exception/app.error";
import {
  getGender,
  getGenderNumber,
  getRole,
  getRoleNumber,
} from "@app/common/utils/utils";
import {
  CreateUserRequest,
  CreateUserResponse,
  UsersServiceServer,
} from "@app/infrastructure/proto/com/ecommerceapp/v1/users";
import { sendUnaryData, ServerUnaryCall } from "@grpc/grpc-js";
import { Status } from "@grpc/grpc-js/build/src/constants";

export function UserService(createUserUC: CreateUserUC): UsersServiceServer {
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
  return {
    createUser,
  };
}
