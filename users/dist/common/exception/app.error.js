"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
const error_enum_1 = require("./error.enum");
class AppError extends Error {
    // Constructor with default parameters
    constructor(err) {
        super(error_enum_1.AppErrorMessages[err].message); // Call the parent constructor (Error) to set the message
        this.code = error_enum_1.AppErrorMessages[err].code; // Set the custom error code
        this.message = error_enum_1.AppErrorMessages[err].message; // Set the custom error message
        // Ensure the instance of the error is correctly identified
        this.name = this.constructor.name;
        // Capturing the stack trace for debugging
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
exports.AppError = AppError;
