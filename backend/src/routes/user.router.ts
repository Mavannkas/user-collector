import { NextFunction, Request, Response } from "express";
import express = require("express");
import { check, validationResult } from "express-validator";
import { UserController } from "../controllers/user.controller";
import { ResponseCodeEnum } from "../enums/response-code.enum";

const Router = express.Router();

Router.get("/", (req: Request, res: Response, next: NextFunction) => {
  const userController = new UserController();
  userController.getFirstPage(req, res, next);
});

Router.get("/all", (req: Request, res: Response, next: NextFunction) => {
  const userController = new UserController();
  userController.getAll(req, res, next);
});

Router.get("/:page", (req: Request, res: Response, next: NextFunction) => {
  const userController = new UserController();
  userController.getPage(req, res, next);
});

Router.post(
  "/",
  [
    check("name").isString().not().isEmpty().isLength({
      min: 3,
      max: 50,
    }),
    check("surname").isString().not().isEmpty().isLength({
      min: 3,
      max: 50,
    }),
    check("address").isString().optional().isLength({
      min: 3,
      max: 50,
    }),
  ],
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(ResponseCodeEnum.UnprocessableEntity).jsonp(errors.mapped());
    } else {
      const userController = new UserController();
      userController.createUser(req, res, next);
    }
  }
);
export const UserRouter = Router;
