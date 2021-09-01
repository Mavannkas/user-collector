import "reflect-metadata";
import express = require("express");

import { Request, Response } from "express";
import { ResponseCodeEnum } from "./enums/response-code.enum";
import { ErrorResponse } from "./responses/error-response.interface";

const app = express();
app.use(express.json());

app.use("/", UserRouter);

app.all("*", (req: Request, res: Response) => {
  res.status(ResponseCodeEnum.NotFound).json({
    error: "Not Found",
    code: ResponseCodeEnum.NotFound,
  } as ErrorResponse);
});

app.listen(process.env.PORT || 3000, () =>
  console.log(`App started on ${process.env.PORT || 3000}`)
);
