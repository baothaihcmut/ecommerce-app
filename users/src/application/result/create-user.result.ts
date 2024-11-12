import { User } from "@app/domain/entities/user.entity";

export default interface CreateUserResult
  extends Omit<User, "password" | "currentRefreshToken"> {}
