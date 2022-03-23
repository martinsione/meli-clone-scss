import React from "react"
import { CategoryCard } from "../cards/CategoryCard"

export const CategoriesCardGallery = () => {
	return (
		<div className="Categories-Card-Gallery-ctn">
			<p className="gallery-title">Descubre</p>
			<div className="Categories-Card-Gallery">
				<CategoryCard />
				<CategoryCard />
			</div>
		</div>
	)
}
