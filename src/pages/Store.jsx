import { useState, useEffect } from "react"
import { Carrousel } from "../components/Carrousel"
import { Footer } from "../components/Footer"
import { Nav } from "../components/nav/Nav"

const Store = () => {
	const [carrouselImages, setCarrouselImages] = useState({
		images: [],
		isLoading: true,
	})

	const [storeInfo, setStoreInfo] = useState({
		banner: "",
		title: "",
		productsCategories: "",
		isLoading: true,
	})
	const { title, productsCategories, banner } = storeInfo

	useEffect(async () => {
		const res = await (await fetch("http://localhost:3030/store-page")).json()
		setCarrouselImages({ images: res.sliderImages, isLoading: false })
		setStoreInfo({ ...res })
	}, [])

	return (
		<div className="store-page">
			<Nav />
			<div className="store-page__ctn">
				<Carrousel {...carrouselImages} />
				<img className="store-page__banner" src={banner} alt />
				<div className="store-page__video-ctn">
					<iframe
						class="video"
						src="https://www.youtube.com/embed/3pRwSGcDm7A"
						allowfullscreen=""
						frameborder="0"
						title="3pRwSGcDm7A"
						height="666"
					></iframe>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Store
