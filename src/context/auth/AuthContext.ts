import { createContext } from "react";
import { ILoginData, ILoginResponse, IUser } from "../../interfaces/user";

interface AuthContextProps {
  user: IUser | null;
  login: (loginData: ILoginData) => Promise<ILoginResponse>;
  logged: "yes" | "no" | "checking";
}

export const AuthContext = createContext({} as AuthContextProps)