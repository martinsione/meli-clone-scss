import { StoreCard } from "../cards/StoreCard"

const StoresCardGallery = ({ stores, isLoading }) => {
	return (
		<div className="stores-card-gallery">
			{!isLoading && stores.map((store) => <StoreCard {...store} />)}
		</div>
	)
}

export default StoresCardGallery
