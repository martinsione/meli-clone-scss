import { Link } from "react-router-dom"

export const StoreCard = ({ logoUrl, name, bannerUrl, productsUrls }) => {
	return (
		<Link to="/store/samsung" className="store-card-ctn hover-shadow-1">
			<img className="store-card-banner" alt="store banner" src={bannerUrl} />
			<div className="store-card-info">
				<img className="store-card-logo" alt="store logo" src={logoUrl} />
				<p className="store-card-name">{name}</p>
				<div className="store-card-products">
					{productsUrls.map((productImageUrl, index) => (
						<img alt="" key={index} src={productImageUrl} />
					))}
				</div>
				<p className="store-card-link">ver tienda</p>
			</div>
		</Link>
	)
}
