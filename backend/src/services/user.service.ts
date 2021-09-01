import { IUserService } from "../interface/user-service.interface";
import { IUser } from "../interface/user.interface";
import { PageResponse } from "../responses/page-response.interface";

export class UserService implements IUserService {
  getPage(page: number): Promise<PageResponse> {
    throw new Error("Method not implemented.");
  }
  createUser(userData: IUser): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
