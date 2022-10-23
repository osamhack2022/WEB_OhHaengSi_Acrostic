import { post } from "./common";

export interface IUser {
  username: string;
  name: string;
  rank: string;
  access_token: string;
}

export async function login(data: { username: string; password: string }) {
  return post<IUser>("auth/login", data);
}
