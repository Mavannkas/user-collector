import express = require("express");
import { UserController } from "../controllers/user.controller";

const Router = express.Router();

Router.get("/", UserController.getFirstPage);
Router.get("/", UserController.getPage);
Router.post("/", UserController.createUser);

export const UserRouter = Router;
