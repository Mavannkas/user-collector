import { ResponseCodeEnum } from "../enums/response-code.enum";

export interface ErrorResponse {
  code: ResponseCodeEnum;
  error: string;
}
