"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppErrorMessages = exports.AppErrorCode = void 0;
var AppErrorCode;
(function (AppErrorCode) {
    AppErrorCode["USER_EXIST"] = "USER_EXIST";
    AppErrorCode["USER_NOT_EXIST"] = "USER_NOT_EXIST";
    AppErrorCode["INTERNAL_SERVER_ERROR"] = "INTERNAL_SERVER_ERROR";
})(AppErrorCode || (exports.AppErrorCode = AppErrorCode = {}));
exports.AppErrorMessages = {
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
