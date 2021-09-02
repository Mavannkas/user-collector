import { PageResponse } from "../responses/page-response.interface";
import { IUser } from "./user.interface";

export interface IDatabaseManager {
  getPage(page: number, maxPerPage: number): Promise<PageResponse>;
  createUser(userData: IUser): Promise<IUser>;
  getAll(): Promise<IUser[]>;
}
