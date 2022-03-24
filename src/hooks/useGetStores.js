import { useState, useEffect } from "react"

export const useGetStores = () => {
  const [stores, setStores] = useState({ stores: null, isLoading: true })

  useEffect(() => {
    ;(async () => {
      const res = await (await fetch("http://localhost:3030/stores")).json()
      setStores({ stores: res, isLoading: false })
    })()
  }, [])

  return stores
}
