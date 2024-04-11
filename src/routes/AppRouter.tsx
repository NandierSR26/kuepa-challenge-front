import { Route, Routes } from "react-router-dom"
import { Classroom, LandingPage, Login } from "../modules"
import { PrivateRoutes } from "./PrivateRoutes"
import { PublicRoutes } from "./PublicRoutes"


export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/classroom" element={ <Classroom /> } />
      </Route>

      <Route element={<PublicRoutes />}>
        <Route path="/" element={<LandingPage />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
      </Route>
    </Routes>
  )
}
