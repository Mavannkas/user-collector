import { IUser } from "../interface/user.interface";

export interface PageResponse {
  users: IUser[];
  page: number;
  lastPage: number;
}
