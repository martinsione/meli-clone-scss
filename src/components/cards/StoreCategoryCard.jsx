import { Link } from "react-router-dom"

export const StoreCategoryCard = ({ title, imageUrl }) => {
  return (
    <Link to="/store/samsung" className="store-category-card">
      <img alt="" src={imageUrl} />
      <h2>{title}</h2>
    </Link>
  )
}
