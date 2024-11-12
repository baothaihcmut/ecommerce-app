import {
  CreateUserRequest,
  UpdateUserRequest,
  UsersServiceClient,
} from "@app/modules/users/infrastructure/proto/com/ecommerceapp/v1/users";
import UpdateUserDTO from "@app/modules/users/dtos/update-user.dto";
import { getGenderNumber, getRoleNumber } from "@app/common/utils/utils";
import { AppError } from "@app/common/exception/app-error";
import { Status } from "@grpc/grpc-js/build/src/constants";
import CreateUserDTO from "../dtos/create-user.dto";

export default class UserService {
  constructor(private userServiceClient: UsersServiceClient) {}
  async updateUser(userId: string, dto: UpdateUserDTO) {
    const req: UpdateUserRequest = {
      userId: {
        userId: userId,
      },
      updateInfo: {
        ...dto,
        gender: getGenderNumber(dto.gender),
        role: getRoleNumber(dto.role),
      },
    };
    return new Promise((resolve, rejects) => {
      this.userServiceClient.updateUser(req, (err, resp) => {
        if (err) {
          rejects(err);
        } else {
          resolve(resp);
        }
      });
    }).catch((err: AppError) => {
      if (err.code == Status.UNAVAILABLE) {
        throw new AppError(503, "Service unvailable");
      }
      throw new AppError(err.code, err.message);
    });
  }
  async createUser(dto: CreateUserDTO) {
    const req: CreateUserRequest = {
      ...dto,
      gender: getGenderNumber(dto.gender) as number,
      role: getRoleNumber(dto.role) as number,
    };
    return new Promise((resolve, rejects) => {
      this.userServiceClient.createUser(req, (err, resp) => {
        if (err) {
          rejects(err);
        } else {
          resolve(resp);
        }
      });
    }).catch((err: AppError) => {
      if (err.code == Status.UNAVAILABLE) {
        throw new AppError(503, "Service unvailable");
      }
      throw new AppError(err.code, err.message);
    });
  }
}
