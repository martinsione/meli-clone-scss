import categoryImg from "../../../assets/images/category-phone.webp"

export const CategoryCard = () => {
	return (
		<div className="category-card hover-shadow-1">
			<div>
				<p className="category-card-title">CELULARES</p>
				<p className="category-card-text-line">OFERTAS</p>
				<p className="category-card-text-line">IMPERDIBLES</p>
				<button className="category-card-btn">VER MÁS</button>
			</div>
			<img src={categoryImg} alt="category" />
		</div>
	)
}
