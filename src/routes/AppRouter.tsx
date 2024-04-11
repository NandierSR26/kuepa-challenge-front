import { Route, Routes } from "react-router-dom"
import { LandingPage, Login } from "../modules"


export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} ></Route>
      <Route path="/login" element={<Login />} ></Route>
    </Routes>
  )
}
