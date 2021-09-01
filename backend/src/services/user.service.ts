import { userInfo } from "os";
import { DatabaseManager } from "../databaseManager/databaseManager";
import { IDatabaseManager } from "../interface/database-manager.interface";
import { IUserService } from "../interface/user-service.interface";
import { IUser } from "../interface/user.interface";
import { PageResponse } from "../responses/page-response.interface";

export class UserService implements IUserService {
  async getPage(page: number): Promise<PageResponse> {
    return await this.getDatabaseManager().getPage(page, 5);
  }

  async createUser(userData: IUser): Promise<boolean> {
    const result = await this.getDatabaseManager().createUser(userData);

    if (result) {
      return true;
    }

    return false;
  }

  getDatabaseManager(): IDatabaseManager {
    const databaseManager: IDatabaseManager = new DatabaseManager();
    return databaseManager;
  }
}
