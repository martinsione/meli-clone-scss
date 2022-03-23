export const StoreCard = () => {
	const bannerUrl =
		"https://http2.mlstatic.com/storage/official-stores-images/samsung/background_home201712201004.jpg"
	const logoUrl =
		"https://http2.mlstatic.com/D_Q_NP_883789-MLA29271165898_012019-AE.webp"
	const productImgUrl =
		"https://http2.mlstatic.com/D_Q_NP_644133-MLU46007459893_052021-R.webp"

	return (
		<div className="store-card-ctn hover-shadow-1">
			<img className="store-card-banner" alt="store banner" src={bannerUrl} />
			<div className="store-card-info">
				<img className="store-card-logo" alt="store logo" src={logoUrl} />
				<p className="store-card-name">Samsung</p>
				<div className="store-card-products">
					<img alt="product" src={productImgUrl} />
					<img alt="product" src={productImgUrl} />
					<img alt="product" src={productImgUrl} />
				</div>
				<p className="store-card-link">ver tienda</p>
			</div>
		</div>
	)
}
