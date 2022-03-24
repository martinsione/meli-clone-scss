import React from "react"
import { useNavigate } from "react-router-dom"
import image from "../assets/svgs/pagenotfound.svg"

export const PageNotFound = () => {
  const navigate = useNavigate()

  const handleNavigateBack = () => {
    navigate(-1)
  }
  return (
    <div className="page-not-found">
      <img src={image} alt="" />
      <h2>Parece que esta página no existe</h2>
      <p onClick={handleNavigateBack}>Volver atras</p>
    </div>
  )
}
