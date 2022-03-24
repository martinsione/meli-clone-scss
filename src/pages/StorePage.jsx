import { Carrousel } from "../components/Carrousel"
import { StoreCategoriesCardGallery } from "../components/cards-galleries/StoreCategoriesCardGallery"

import { useGetStore } from "../hooks/useGetStore"

export const StorePage = () => {
  const { sliderImages, storeCategories, banner, isLoading } = useGetStore()

  return (
    <div className="store-page">
      <Carrousel images={sliderImages} isLoading={isLoading} />
      <div className="store-page__ctn">
        <img className="store-page__banner" src={banner} alt="store banner" />
        {!isLoading && (
          <StoreCategoriesCardGallery categories={storeCategories} />
        )}
        <div className="store-page__video-ctn">
          <iframe
            className="video"
            src="https://www.youtube.com/embed/3pRwSGcDm7A"
            allowFullscreen=""
            frameBorder="0"
            title="3pRwSGcDm7A"
            height="666"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
