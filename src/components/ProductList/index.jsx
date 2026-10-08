import "./index.css";
import ProductCard from "../ProductCard";

const ProductList = ({ list, setCart }) => {
  return (
    <div className="products-container">
      {list.map((item) => (
        <ProductCard key={item.id} product={item} setCart={setCart} />
      ))}
    </div>
  );
};

export default ProductList;
