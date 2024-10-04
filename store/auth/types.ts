import { Status } from "../type.global";

export enum Role {
  Customer = "customer",
  Seller = "Seller",
}

export interface UserData {
  email: string;
  username: string;
  phoneNumber: string;
  role: Role;
  password: string;
}

export interface InitialState {
  userData: UserData;
  token: string | null;
  status: Status;
}

export interface LoginUserData {
  email: string;
  password: string;
}
