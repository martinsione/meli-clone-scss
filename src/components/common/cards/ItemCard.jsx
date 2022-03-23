import { HeartIcon } from "../../../assets/icons"

export const ItemCard = () => {
	return (
		<div className="item-card hover-shadow-1">
			<div className="item-card-img">
				<img src="https://http2.mlstatic.com/D_Q_NP_786472-MLU46077199983_052021-AB.webp" />
				<button className="item-heart-icon">
					<HeartIcon />
				</button>
			</div>
			<div className="item-card-description">
				<p className="item-price-without-discount">$ 4.400</p>
				<div className="item-price">
					<p>$ 4.000 </p>
					<p className="item-discount">10% OFF</p>
				</div>
				<p className="item-installments">10x $ 400 sin interés</p>
				<p className="item-free-shipping">Envio Gratis</p>
				<p className="item-title">Una cuadernola toda wapa</p>
			</div>
		</div>
	)
}
