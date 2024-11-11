export enum AppErrorCode {
  USER_EXIST = "USER_EXIST",
  USER_NOT_EXIST = "USER_NOT_EXIST",
  INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR",
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
};
