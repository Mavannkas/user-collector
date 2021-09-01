import { User } from "../entity/User";

export interface PageResponse {
  users: User[];
  page: number;
  lastPage: number;
}
