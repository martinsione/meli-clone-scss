import { useEffect, useState } from "react"

import { Carrousel } from "../components/Carrousel"
import { CategoriesCardGallery } from "../components/common/items-gallery/CategoriesCardGallery"
import { HomeGallery } from "../components/common/items-gallery/HomeGallery"
import { Footer } from "../components/Footer"
import { PaymentMethodsInfo } from "../components/PaymentMethodsInfo"
import { Nav } from "../components/nav/Nav"
import StoresCardGallery from "../components/common/items-gallery/StoresCardGallery"

import bannerImg from "../assets/images/banners/banner1.jpg"

export const Home = ({ country }) => {
	const lastSearch = localStorage.getItem("lastSearch")

	const [carrouselImages, setCarrouselImages] = useState({
		images: [],
		isLoading: true,
	})
	const [stores, setStores] = useState({
		stores: [],
		isLoading: true,
	})
	const [categories, setCategories] = useState({
		categories: [],
		isLoading: true,
	})

	useEffect(async () => {
		const res = await (
			await fetch("http://localhost:3030/homesliderimages")
		).json()
		setCarrouselImages({ images: res, isLoading: false })
	}, [])

	useEffect(async () => {
		const res = await (await fetch("http://localhost:3030/stores")).json()
		setStores({ stores: res, isLoading: false })
	}, [])

	useEffect(async () => {
		const res = await (
			await fetch("http://localhost:3030/homecategories")
		).json()
		setCategories({ categories: res, isLoading: false })
	}, [])

	return (
		<>
			<Nav country={country} />
			<div className="home__ctn">
				<Carrousel {...carrouselImages} />
				<div className="home__content">
					<PaymentMethodsInfo />
					{lastSearch && <HomeGallery title="Basado en tu última busqueda" />}
					<HomeGallery title="Ofertas" />
					<img
						className="home__banner"
						src={bannerImg}
						alt="envios a todo el país"
					/>
					<CategoriesCardGallery {...categories} />
					<StoresCardGallery {...stores} />
				</div>
			</div>
			<Footer />
		</>
	)
}
