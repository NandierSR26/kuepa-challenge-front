import { createContext } from "react";
import { ILoginData, ILoginResponse, IUser } from "../../interfaces/user";

interface AuthContextProps {
  user: IUser | null;
  logged: "yes" | "no" | "checking";

  login: (loginData: ILoginData) => Promise<ILoginResponse>;
  verifyAuth: () => Promise<void>
}

export const AuthContext = createContext({} as AuthContextProps)