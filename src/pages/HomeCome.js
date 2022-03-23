import React from "react"
import { Link } from "react-router-dom"
import { countries } from "../data"

export const HomeCome = () => {
	return (
		<div className="homecome">
			<h1 className="homecome__logo">Mercado Libre</h1>

			<ol className="homecome__countries-menu">
				{countries.map(({ name, acronym }, i) => {
					return (
						<li key={i} id={acronym}>
							<Link to="/home">{name}</Link>
						</li>
					)
				})}
			</ol>
		</div>
	)
}
