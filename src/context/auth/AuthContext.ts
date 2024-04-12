import { createContext } from "react";
import { ILoginData, IAuthResponse, IUser, IRegisterData } from "../../interfaces/user";

interface AuthContextProps {
  user: IUser | null;
  logged: "yes" | "no" | "checking";
  jwtToken: string;

  login: (loginData: ILoginData) => Promise<IAuthResponse>;
  register: (registerData: IRegisterData) => Promise<void>;
  logout: () => void;
  verifyAuth: () => Promise<void>
}

export const AuthContext = createContext({} as AuthContextProps)