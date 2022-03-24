import { useState, useEffect } from "react"

export const useGetProducts = () => {
  const [products, setProducts] = useState({ products: null, isLoading: true })

  useEffect(() => {
    const getProducts = async () => {
      const res = await (await fetch("http://localhost:3030/products")).json()
      setProducts({ products: res, isLoading: false })
    }

    getProducts()
  }, [])

  return products
}
