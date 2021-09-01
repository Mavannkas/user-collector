import { createConnection, getConnection, getConnectionManager } from "typeorm";
import { User } from "../entity/User";
import { IDatabaseManager } from "../interface/database-manager.interface";
import { IUser } from "../interface/user.interface";
import { PageResponse } from "../responses/page-response.interface";

export class DatabaseManager implements IDatabaseManager {
  async getPage(page: number, maxPerPage: number): Promise<PageResponse> {
    const userRepository = await this.getUserRepository();

    const users = await userRepository.find({
      take: maxPerPage,
      skip: maxPerPage * (page - 1),
    });
    const count = await userRepository.count();

    const lastPage = Math.ceil(count / maxPerPage);

    return {
      users,
      page,
      lastPage,
    };
  }

  async createUser(userData: IUser): Promise<IUser> {
    const user = new User();
    user.address = userData.address ? userData.address : null;
    user.name = userData.name;
    user.surname = userData.surname;

    const userRepository = await this.getUserRepository();

    const res = await userRepository.save(user);
    console.log(res);
    return res;
  }

  private async getUserRepository() {
    const connection = await this.getConnection();
    return connection.getRepository(User);
  }

  private async getConnection() {
    try {
      return getConnectionManager().get("default");
    } catch (err) {
      return await createConnection();
    }
  }
}
