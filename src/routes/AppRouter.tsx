import { Route, Routes } from "react-router-dom"
import { Classroom, LandingPage, Login, Register } from "../modules"
import { PrivateRoutes } from "./PrivateRoutes"
import { PublicRoutes } from "./PublicRoutes"
import { AuthContext } from '../context/auth/AuthContext';
import { useContext, useEffect } from "react";


export const AppRouter = () => {  

  const { logged, verifyAuth } = useContext(AuthContext);

  useEffect(() => {
    verifyAuth();
  }, [])

  if( logged === 'checking' ) return <h1>Cargando ...</h1>

  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/classroom" element={ <Classroom /> } />
        <Route path="/chat/:id" element={ <Classroom /> } />
      </Route>

      <Route element={<PublicRoutes />}>
        <Route path="/" element={<LandingPage />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/register" element={<Register />} ></Route>
      </Route>
    </Routes>
  )
}
