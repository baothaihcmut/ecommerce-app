import UserService from "../service/user.service";
import { Express, NextFunction, Request, Response, Router } from "express";
export class UserHandler {
  constructor(private userService: UserService) {}
  initHandler(e: Express) {
    const router = Router();
  }
  createUser(req: Request, res: Response, next: NextFunction) {}
}
