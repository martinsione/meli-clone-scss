import { Link } from "react-router-dom"
import { HeartIcon } from "../../../assets/icons"

export const ItemCard = ({
  title,
  imageUrl,
  price,
  onSale,
  currency,
  maxInstallments,
  freeShipping,
}) => {
  const finalPrice = Math.floor((price - (price * onSale) / 100) * 100) / 100

  const installmentsPrice = Math.round(finalPrice / maxInstallments)
  return (
    <Link to="product/id" className="item-card hover-shadow-1">
      <div className="item-card-img">
        <img src={imageUrl} alt="item" />
        <button className="item-heart-icon">
          <HeartIcon />
        </button>
      </div>
      <div className="item-card-description">
        {onSale && (
          <p className="item-price-without-discount">
            {currency + " " + price}
          </p>
        )}
        <div className="item-price">
          <p>{currency + " " + finalPrice}</p>
          {onSale && <p className="item-discount">{onSale}% OFF</p>}
        </div>
        {maxInstallments && (
          <p className="item-installments">
            {maxInstallments}x $ {installmentsPrice} sin interés
          </p>
        )}
        {freeShipping && <p className="item-free-shipping">Envio Gratis</p>}
        <p className="item-title">{title}</p>
      </div>
    </Link>
  )
}
