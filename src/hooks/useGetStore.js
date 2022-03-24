import { useState, useEffect } from "react"

export const useGetStore = () => {
  const [store, setStores] = useState({
    sliderImages: "",
    storeCategories: "",
    banner: "",
    isLoading: true,
  })

  useEffect(() => {
    ;(async () => {
      const res = await (await fetch("http://localhost:3030/store-page")).json()
      setStores({ ...res, isLoading: false })
    })()
  }, [])
  return store
}
