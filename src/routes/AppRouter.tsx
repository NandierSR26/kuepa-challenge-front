import { Route, Routes } from "react-router-dom"
import { LandingPage } from "../app/landing"


export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} ></Route>
    </Routes>
  )
}
