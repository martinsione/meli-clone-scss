import React from "react"
import { Carousel } from "../components/carousel/Carousel"
import { CategoriesCardGallery } from "../components/common/items-gallery/CategoriesCardGallery"
import { HomeGallery } from "../components/common/items-gallery/HomeGallery"
import { Footer } from "../components/Footer"
import { PaymentMethodsInfo } from "../components/payment-methods-info/PaymentMethodsInfo"
import { Nav } from "../components/sections/nav/Nav"
import bannerImg from "../assets/images/banners/banner1.jpg"
import StoresCardGallery from "../components/common/items-gallery/StoresCardGallery"
export const Home = ({ country }) => {
  const lastSearch = localStorage.getItem("lastSearch")

  return (
    <>
      <Nav country={country} />
      <div className="home__ctn">
        <Carousel />
        <div className="home__content">
          <PaymentMethodsInfo />
          {lastSearch && <HomeGallery title="Basado en tu última busqueda" />}
          <HomeGallery title="Ofertas" />
          <img
            className="home__banner"
            src={bannerImg}
            alt="envios a todo el país"
          />
          <CategoriesCardGallery />
          <StoresCardGallery />
        </div>
      </div>
      <Footer />
    </>
  )
}
