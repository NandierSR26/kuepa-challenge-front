import axios from "axios"
import { ILoginData, IAuthResponse, IUser, IRegisterData } from "../../interfaces/user"
import { AuthContext } from "./AuthContext"
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const AuthProvider = ({ children }: any) => {

  const [user, setUser] = useState<IUser | null>(null);
  const [jwtToken, setJwtToken] = useState<string>('');
  const [logged, setLogged] = useState<"yes" | "no" | "checking">("checking");

  const register = useCallback(async (registerData: IRegisterData) => {
    try {

      const { data: { data, success, message } } = await axios.post<IAuthResponse>(`${import.meta.env.VITE_API_URL}/auth/register`, registerData);

      if (!success) {
        setLogged('no');
        setUser(null);

        toast.error(message);
        return;
      }

      setUser(data.user);
      setJwtToken(data.token);
      setLogged('yes');

      localStorage.setItem('token', data.token);
      toast.success(message);

    } catch (error) {
      console.log(error);
      toast.error('Algo salio mal');
    }
  }, [])

  const login = useCallback(async (loginData: ILoginData): Promise<void> => {
    setLogged('checking');
    const { data: { data, success, message } } = await axios.post<IAuthResponse>(`${import.meta.env.VITE_API_URL}/auth/login`, loginData);
    console.log({data, success, message})

    if (!success) {
      setLogged('no');
      setUser(null);
      toast.error(message);
      return
    }

    setUser(data.user);
    setJwtToken(data.token);
    setLogged('yes');

    localStorage.setItem('token', data.token);
    toast.success(message);

  }, [axios, setLogged, setUser, setJwtToken, toast])

  const logout = useCallback(() => {
    setUser(null);
    setLogged('no');
    setJwtToken('');
    toast.success('Closed session');

    localStorage.clear();

  }, [setUser, setLogged, setJwtToken])

  const verifyAuth = useCallback(async () => {
    const token = localStorage.getItem('token')

    try {
      const { data: { data, message, success } } = await axios.get<IAuthResponse>(`${import.meta.env.VITE_API_URL}/auth/validate/${token}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (!success) {
        setLogged('no');
        setUser(null);
        setJwtToken('')
        localStorage.removeItem('token');
        return;
      }

      setLogged('yes');
      setUser(data.user);
      setJwtToken(data.token)
    } catch (error) {
      console.log(error);
      setLogged('no');
    }

  }, [setLogged, setUser, setJwtToken, toast])

  return (
    <AuthContext.Provider value={{
      user,
      logged,
      jwtToken,

      login,
      logout,
      register,
      verifyAuth
    }}>
      {children}
    </AuthContext.Provider>
  )
}
