import { NextFunction, Request, Response } from "express";
import express = require("express");
import { UserController } from "../controllers/user.controller";

const Router = express.Router();

Router.get("/", (req: Request, res: Response, next: NextFunction) => {
  const userController = new UserController();
  userController.getFirstPage(req, res, next);
});

Router.get("/:page", (req: Request, res: Response, next: NextFunction) => {
  const userController = new UserController();
  userController.getPage(req, res, next);
});

Router.post("/", (req: Request, res: Response, next: NextFunction) => {
  const userController = new UserController();
  userController.createUser(req, res, next);
});

export const UserRouter = Router;
