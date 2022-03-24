import { Route, Routes } from "react-router-dom"
import { Footer } from "../components/Footer"
import { Nav } from "../components/nav/Nav"
import { HomePage } from "../pages/HomePage"
import { PageNotFound } from "../pages/PageNotFound"
import { StorePage } from "../pages/StorePage"

export const DashboardRouter = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="store/*" element={<StorePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  )
}
