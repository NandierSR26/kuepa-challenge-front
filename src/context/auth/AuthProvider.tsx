import axios from "axios"
import { ILoginData, ILoginResponse, IUser } from "../../interfaces/user"
import { AuthContext } from "./AuthContext"
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const AuthProvider = ({ children }: any) => {

  const [user, setUser] = useState<IUser | null>(null);
  const [logged, setLogged] = useState<"yes" | "no" | "checking">("checking")

  const login = async (loginData: ILoginData): Promise<ILoginResponse> => {
    // console.log(import.meta.env.VITE_API_URL)
    // return
    try {
      setLogged('checking');
      const { data: { data, success, message } } = await axios.post<ILoginResponse>(`${import.meta.env.VITE_API_URL}/auth/login`, loginData);

      if (!success) {
        setLogged('no');
        toast.error(message);
        setUser(null);
        return { data, success, message }
      }

      setUser(data.user);
      localStorage.setItem('token', data.token);
      toast.success(message);
      setLogged('yes');
      return { data, success, message };

    } catch (error) {
      console.log(error);
      toast.error('Algo salio mal');
      return {} as ILoginResponse
    }
  }

  const verifyAuth = async () => {
    const token = localStorage.getItem('token')

    try {
      const { data: { data, message, success } } = await axios.get<ILoginResponse>(`${import.meta.env.VITE_API_URL}/auth/validate/${token}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      if (!success) {
        setLogged('no');
        setUser(null);
        localStorage.removeItem('token');
        return;
      }
  
      setLogged('yes');
      setUser(data.user);
    } catch (error) {
      console.log(error);
      setLogged('no');
      toast.error('Sesion cerrada');
    }

  }


  // useEffect(() => {
  //   verifyAuth()
  //     .then(() => {
  //       setLogged('yes');
  //     })
  //     .catch(() => {
  //       setLogged('no');
  //       setUser(null);
  //       localStorage.removeItem('token');
  //     })
  // }, [])

  return (
    <AuthContext.Provider value={{
      user,
      logged,

      login,
      verifyAuth
    }}>
      {children}
    </AuthContext.Provider>
  )
}
