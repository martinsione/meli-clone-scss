import React from "react"
import { useEffect } from "react/cjs/react.production.min"
import { Carousel } from "../components/carousel/Carousel"
import { StoreCard } from "../components/common/cards/StoreCard"
import { CategoriesCardGallery } from "../components/common/items-gallery/CategoriesCardGallery"
import { HomeGallery } from "../components/common/items-gallery/HomeGallery"
import { Footer } from "../components/Footer"
import { PaymentMethodsInfo } from "../components/payment-methods-info/PaymentMethodsInfo"
import { Nav } from "../components/sections/nav/Nav"

export const Home = ({ country }) => {
	const lastSearch = localStorage.getItem("lastSearch")

	return (
		<>
			<Nav country={country} />
			<Carousel />
			<PaymentMethodsInfo />
			{lastSearch && <HomeGallery title="Basado en tu última busqueda" />}
			<HomeGallery title="Ofertas" />
			<CategoriesCardGallery />
			<StoreCard />
			<Footer />
		</>
	)
}
