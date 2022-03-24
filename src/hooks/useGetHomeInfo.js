import { useState, useEffect } from "react"
import { useGetProducts } from "./useGetProducts"
import { useGetStores } from "./useGetStores"

export const useGetHomeInfo = () => {
  const [homeInfo, setHomeInfo] = useState({
    stores: { stores: null, isLoading: true },
    products: { products: null, isLoading: true },
    sliderImages: { images: null, isLoading: true },
    homeCategories: { homeCategories: null, isLoading: true },
  })

  const [sliderImages, setSliderImages] = useState({
    images: null,
    isLoading: true,
  })
  const [homeCategories, setHomeCategories] = useState({
    categories: null,
    isLoading: true,
  })

  const products = useGetProducts()
  const stores = useGetStores()

  useEffect(() => {
    ;(async () => {
      const images = await (
        await fetch("http://localhost:3030/homesliderimages")
      ).json()

      setSliderImages({ images, isLoading: false })
    })()
    ;(async () => {
      const categories = await (
        await fetch("http://localhost:3030/homecategories")
      ).json()
      setHomeCategories({ categories, isLoading: false })
    })()
  }, [])

  useEffect(() => {
    setHomeInfo({
      stores,
      products,
      homeCategories,
      sliderImages,
    })
  }, [stores, products, homeCategories, sliderImages])
  return homeInfo
}
