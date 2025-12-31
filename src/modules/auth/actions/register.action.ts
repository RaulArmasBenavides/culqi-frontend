import { tesloApi } from "@/api/tesloApi";
import type {
  AuthResponse,
  RegisterError,
  RegisterSuccess,
  User,
} from "../interfaces";

export const registerAction = async (
  fullName: string,
  email: string,
  password: string
): Promise<RegisterError | RegisterSuccess> => {
  try {
    const { data } = await tesloApi.post<AuthResponse>("/auth/register", {
      fullName,
      email,
      password,
    });

    return {
      ok: true,
      user: data.user,
      token: data.token,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "No se pudo crear el usuario",
    };
  }
};
