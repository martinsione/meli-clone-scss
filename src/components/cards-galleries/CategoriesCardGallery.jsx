import React from "react"
import { CategoryCard } from "../cards/CategoryCard"

export const CategoriesCardGallery = ({ categories, isLoading }) => {
	return (
		<div className="Categories-Card-Gallery-ctn">
			<p className="gallery-title">Descubre</p>
			<div className="Categories-Card-Gallery">
				{!isLoading &&
					categories.map((category) => <CategoryCard {...category} />)}
			</div>
		</div>
	)
}
