import { Link } from "react-router";
import "./index.css";

const Header = () => {
  return (
    <header className="header">

      <div className="brand">
        <img
          className="brand-icon"
          src="https://img.icons8.com/?size=100&id=CE7rP-35_XQR&format=png&color=000000"
          alt="shopping cart"
        />

        <h1 className="heading">
          FreshCart
        </h1>
      </div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </nav>

      <div className="header-actions">
        <div className="location">
          <img
            className="location-icon"
            src="https://img.icons8.com/?size=100&id=p5n5ZAUprZsA&format=png&color=000000"
            alt="location"
          />

          <p>Hyderabad</p>
        </div>
      </div>

    </header>
  );
};

export default Header;