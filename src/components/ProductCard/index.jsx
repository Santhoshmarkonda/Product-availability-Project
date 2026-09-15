import './index.css'

const ProductCard = props => {
  const {
    title,
    category,
    image,
    price,
    rating,
  } = props.value

  return (
    <div className="product-card">
      <div className="image-container">
        <img
          className="product-image"
          src={image}
          alt={title}
        />
      </div>

      <div className="product-details">
        <p className="product-category">{category}</p>

        <h2 className="product-title">
          {title}
        </h2>

        <p className="product-price">
          ₹{price}
        </p>

        <div className="rating-container">
          <span className="rating">
            ⭐ {rating.rate}
          </span>

          <span className="review-count">
            ({rating.count} reviews)
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
