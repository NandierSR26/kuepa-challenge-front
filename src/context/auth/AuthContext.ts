import { createContext } from "react";
import { ILoginData, IUser } from "../../interfaces/user";

interface AuthContextProps {
  user: IUser | null;
  login: (loginData: ILoginData) => Promise<void>;
  logged: "yes" | "no" | "checking";
}

export const AuthContext = createContext({} as AuthContextProps)