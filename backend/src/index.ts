import "reflect-metadata";
import express = require("express");
import cors = require("cors");
import { Request, Response } from "express";
import { ResponseCodeEnum } from "./enums/response-code.enum";
import { ErrorResponse } from "./responses/error-response.interface";
import { UserRouter } from "./routes/user.router";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use("/", UserRouter);

app.all("*", (req: Request, res: Response) => {
  res.status(ResponseCodeEnum.NotFound).json({
    error: "Not Found",
    code: ResponseCodeEnum.NotFound,
  } as ErrorResponse);
});

app.listen(process.env.PORT || 3001, () =>
  console.log(`App started on ${process.env.PORT || 3001}`)
);
