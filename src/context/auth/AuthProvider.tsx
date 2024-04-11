import axios from "axios"
import { ILoginData, ILoginResponse, IUser } from "../../interfaces/user"
import { AuthContext } from "./AuthContext"
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const AuthProvider = ({ children }: any) => {

  const [user, setUser] = useState<IUser | null>(null);
  const [logged, setLogged] = useState<"yes" | "no" | "checking">("checking")

  const login = async(loginData: ILoginData): Promise<ILoginResponse> => {
    // console.log(import.meta.env.VITE_API_URL)
    // return
    try {
      setLogged('checking');
      const { data } = await axios.post<ILoginResponse>(`${import.meta.env.VITE_API_URL}/auth/login`, loginData);

      if(!data.success) setLogged('no');

      setUser( data.data.user );
      setLogged('yes');
      return data;
      
    } catch (error) {
      console.log(error);
      toast.error('Algo salio mal');
      return {} as ILoginResponse
    }
  }

  const verifyAuth = async() => {
    const token = localStorage.getItem('token')
    const { data } = await axios.get<IUser>(`${import.meta.env.VITE_API_URL}/auth/validate`, {
      headers: {
        Authorization: `Bearer ${ token }`
      }
    });
  }


  useEffect(() => {
    verifyAuth().then(() => setLogged('yes')).catch(() => setLogged('no'))
  }, [])

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
