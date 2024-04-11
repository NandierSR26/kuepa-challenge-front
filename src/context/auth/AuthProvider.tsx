import axios from "axios"
import { ILoginData, ILoginResponse, IUser } from "../../interfaces/user"
import { AuthContext } from "./AuthContext"
import { useState } from "react";
import toast from "react-hot-toast";

export const AuthProvider = ({ children }: any) => {

  const [user, setUser] = useState<IUser | null>(null);
  const [logged, setLogged] = useState<"yes" | "no" | "checking">("checking")

  const login = async(loginData: ILoginData) => {
    // console.log(import.meta.env.VITE_API_URL)
    // return
    try {
      setLogged('checking');
      const { data: { data, message, success } } = await axios.post<ILoginResponse>(`${import.meta.env.VITE_API_URL}/auth/login`, loginData);

      if(!success) {
        toast.error(message, { duration:4000 });
        setLogged("no")
        return
      }

      setUser(data.user);
      localStorage.setItem('token', data.token);
      toast.success(message);
      setLogged("yes")
      
    } catch (error) {
      console.log(error);
      toast.error('Algo salio mal');
    }
  }

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logged
    }}>
      { children }
    </AuthContext.Provider>
  )
}
