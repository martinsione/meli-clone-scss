export const CategoryCard = ({ title, firstLine, secondLine, imageUrl }) => {
	return (
		<div className="category-card">
			<div>
				<p className="category-card-title">{title}</p>
				<p className="category-card-text-line">{firstLine}</p>
				<p className="category-card-text-line">{secondLine}</p>
				<button className="category-card-btn">VER MÁS</button>
			</div>
			<img src={imageUrl} alt="category" />
		</div>
	)
}
