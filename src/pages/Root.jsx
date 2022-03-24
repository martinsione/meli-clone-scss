import { Link } from "react-router-dom"
import { countries } from "../data"

export const Root = () => {
	return (
		<div className="root">
			<h1 className="root__logo">Mercado Libre</h1>

			<ol className="root__countries-menu">
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
