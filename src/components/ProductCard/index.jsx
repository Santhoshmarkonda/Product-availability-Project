import "./index.css";

const ProductCard = ({ product, setCart }) => {
  const { thumbnail, title, rating, category, price, stock } = product;

  let stockAvailability = "";
  let stockAvailabilityClass = "";

  if (stock === 0) {
    stockAvailability = "Out of Stock";
    stockAvailabilityClass = "out";
  } else if (stock <= 5) {
    stockAvailability = "Low Stock";
    stockAvailabilityClass = "low";
  } else {
    stockAvailability = "In Stock";
    stockAvailabilityClass = "available";
  }

  const addProductToCart = () => {
    setCart((previousCart) => {
      return [...previousCart, product];
    });
  };

  return (
    <div className="product-card">
      <img className="product-image" src={thumbnail} alt={title} />

      <div className="product-info">
        <p className="product-title">
          {title} <span className="product-rating">⭐ {rating}</span>
        </p>

        <p className="product-category">{category}</p>
      </div>

      <div className="product-footer">
        <p className="product-price">${price}</p>
        <p className="product-stock">{stock} Items Available</p>
        <p className={`product-stock-status ${stockAvailabilityClass}`}>
          {stockAvailability}
        </p>
        {stock !== 0 && (
          <button
            className="add-button"
            type="button"
            onClick={addProductToCart}
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
