import { PageResponse } from "../responses/page-response.interface";
import { IDatabaseManager } from "./database-manager.interface";
import { IUser } from "./user.interface";

export interface IUserService {
  getPage(page: number): Promise<PageResponse>;
  createUser(userData: IUser): Promise<boolean>;
  getDatabaseManager(): IDatabaseManager;
}
