import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";
import { IUserService } from "../interface/user-service.interface";
import { UserService } from "../services/user.service";

export class UserController {
  static async createUser(req: Request, res: Response, next: NextFunction) {
    throw new Error("Method not implemented.");
  }
  static async getPage(req: Request, res: Response, next: NextFunction) {
    throw new Error("Method not implemented.");
  }
  static async getFirstPage(req: Request, res: Response, next: NextFunction) {
    throw new Error("Method not implemented.");
  }

  private static getUserService(): IUserService {
    const userService: IUserService = new UserService();
    return userService;
  }
  private userRepository = getRepository(User);
}
