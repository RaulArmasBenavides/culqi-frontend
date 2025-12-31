import { User } from "./user-interface";

export interface RegisterSuccess {
  ok: true;
  user: User;
  token: string;
}


export interface RegisterError {
  ok: false;
  message: string;
}
