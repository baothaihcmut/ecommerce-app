export enum AppErrorCode {
  USER_EXIST = "USER_EXIST",
  USER_NOT_EXIST = "USER_NOT_EXIST",
  INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR",
  USER_NOT_FOUND = "USER_NOT_FOUND",
  WRONG_USERNAME_PASSWORD = "WRONG_USERNAME_PASSWORD",
}

export const AppErrorMessages = {
  [AppErrorCode.USER_EXIST]: {
    code: 409, // HTTP Status Code for Conflict
    message: "User already exists.",
  },
  [AppErrorCode.USER_NOT_EXIST]: {
    code: 404, // HTTP Status Code for Not Found
    message: "User does not exist.",
  },
  [AppErrorCode.INTERNAL_SERVER_ERROR]: {
    code: 500, // HTTP Status Code for Internal Server Error
    message: "Internal server error occurred.",
  },
  [AppErrorCode.USER_NOT_FOUND]: {
    code: 404,
    message: "User not found.",
  },
  [AppErrorCode.WRONG_USERNAME_PASSWORD]: {
    code: 403,
    message: "Wrong username or password.",
  },
};
