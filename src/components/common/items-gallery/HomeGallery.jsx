import React from "react"
import { ItemCard } from "../cards/ItemCard"

export const HomeGallery = ({ title }) => {
	return (
		<div className="gallery-ctn">
			<h2 className="gallery-title">{title}</h2>
			<div className="gallery-items-ctn">
				<ItemCard />
				<ItemCard />
				<ItemCard />
				<ItemCard />
				<button className="gallery-item-next">
					<i className="fi fi-angle-right"></i>
				</button>
			</div>
		</div>
	)
}
