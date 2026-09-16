import './index.css'

const ProductCard = ({product}) => {
  const {thumbnail, title, rating, category, price, stock} = product

  return (
    <div className="product-card">
      <img
        className="product-image"
        src={thumbnail}
        alt={title}
      />

      <div className="product-info">
        <p className="product-title">
          {title} <span className="product-rating">⭐ {rating}</span>
        </p>

        <p className="product-category">{category}</p>
      </div>

      <div className="product-footer">
        <p className="product-price">${price}</p>
        <p className="product-stock">{stock} Items Available</p>
        <button className="add-button" type="button">
          Add
        </button>
      </div>
    </div>
  )
}

export default ProductCard