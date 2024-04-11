import { Route, Routes } from "react-router-dom"
import { LandingPage, Login } from "../modules"
import { PrivateRoutes } from "./PrivateRoutes"
import { PublicRoutes } from "./PublicRoutes"


export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>

      </Route>

      <Route element={<PublicRoutes />}>
        <Route path="/" element={<LandingPage />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
      </Route>
    </Routes>
  )
}
