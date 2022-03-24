import React from "react"

export const SearchInput = () => {
	return (
		<div className="search-input">
			<input type="text" placeholder="Buscar productos, marcas y más..." />
			<button>
				<i className="fi fi-search"></i>
			</button>
		</div>
	)
}
