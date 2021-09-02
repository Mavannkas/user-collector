import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";
import { IUserService } from "../interface/user-service.interface";
import { UserService } from "../services/user.service";
import { IUser } from "../interface/user.interface";
import { ResponseCodeEnum } from "../enums/response-code.enum";
import { IsSuccessResponse } from "../responses/is-success-response.interface";
import { ErrorResponse } from "../responses/error-response.interface";
import { PageResponse } from "../responses/page-response.interface";

export class UserController {
  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      console.log(req.body);
      const user: IUser = req.body;
      const isSuccess = await this.getUserService().createUser(user);
      console.log(1, isSuccess);
      res
        .status(ResponseCodeEnum.Created)
        .json({ ok: isSuccess } as IsSuccessResponse);
    } catch (err) {
      console.log(2, err);

      this.errorCatcher(err, res);
    }
  }

  async getFirstPage(req: Request, res: Response, next: NextFunction) {
    try {
      const page = await this.getUserService().getPage(1);
      this.sendPageResponse(page, res);
    } catch (err) {
      this.errorCatcher(err, res);
    }
  }

  async getPage(req: Request, res: Response, next: NextFunction) {
    try {
      const page = await this.getUserService().getPage(+req.params.page);
      this.sendPageResponse(page, res);
    } catch (err) {
      this.errorCatcher(err, res);
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await this.getUserService().getAll();
      res.status(ResponseCodeEnum.OK).json(data);
    } catch (err) {
      this.errorCatcher(err, res);
    }
  }

  private getUserService(): IUserService {
    const userService: IUserService = new UserService();
    return userService;
  }

  private errorCatcher(error: Error, res: Response) {
    res.status(ResponseCodeEnum.BadRequest).json({
      error: error.message,
      code: ResponseCodeEnum.BadRequest,
    } as ErrorResponse);
  }

  private sendPageResponse(page: PageResponse, res) {
    res.status(ResponseCodeEnum.OK).json(page);
  }
}
