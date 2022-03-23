import React from "react"
import { ItemCard } from "../cards/ItemCard"

export const HomeGallery = ({ title, products, isLoading }) => {
  return (
    <div className="gallery-ctn">
      <h2 className="gallery-title">{title}</h2>
      <div className="gallery-items-ctn">
        {!isLoading &&
          products.map((product) => (
            <ItemCard {...product} key={product.title} />
          ))}

        <button className="gallery-item-next">
          <i className="fi fi-angle-right"></i>
        </button>
      </div>
    </div>
  )
}
