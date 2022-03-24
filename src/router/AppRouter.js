import { BrowserRouter, Route, Routes } from "react-router-dom"
import { RootPage } from "../pages/RootPage"
import { DashboardRouter } from "./DashboardRouter"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootPage />} />
        <Route path="/*" element={<DashboardRouter />} />
      </Routes>
    </BrowserRouter>
  )
}
