import { Carrousel } from "../components/Carrousel"
import { CategoriesCardGallery } from "../components/cards-galleries/CategoriesCardGallery"
import { HomeGallery } from "../components/cards-galleries/HomeGallery"
import { PaymentMethodsInfo } from "../components/PaymentMethodsInfo"
import StoresCardGallery from "../components/cards-galleries/StoresCardGallery"
import { ShoppingInfo } from "../components/ShoppingInfo"
import { useGetHomeInfo } from "../hooks/useGetHomeInfo"

import bannerImg from "../assets/images/banners/banner1.jpg"

export const HomePage = () => {
  const { stores, sliderImages, products, homeCategories } = useGetHomeInfo()

  return (
    <>
      <div className="home__ctn">
        <Carrousel {...sliderImages} />
        <div className="home__content">
          <PaymentMethodsInfo />
          <HomeGallery title="Basado en tu última busqueda" {...products} />
          <HomeGallery title="Ofertas" {...products} />
          <img
            className="home__banner"
            src={bannerImg}
            alt="envios a todo el país"
          />
          <CategoriesCardGallery {...homeCategories} />
          <StoresCardGallery {...stores} />
        </div>
      </div>
      <ShoppingInfo />
    </>
  )
}
