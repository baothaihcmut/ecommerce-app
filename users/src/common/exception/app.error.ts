import { AppErrorCode, AppErrorMessages } from "./error.enum";

export class AppError extends Error {
  public code: number;
  public message: string;

  // Constructor with default parameters
  constructor(err: AppErrorCode) {
    super(AppErrorMessages[err].message); // Call the parent constructor (Error) to set the message
    this.code = AppErrorMessages[err].code; // Set the custom error code
    this.message = AppErrorMessages[err].message; // Set the custom error message

    // Ensure the instance of the error is correctly identified
    this.name = this.constructor.name;

    // Capturing the stack trace for debugging
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
