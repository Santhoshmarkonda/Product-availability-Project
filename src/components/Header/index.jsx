import "./index.css";

const Header = () => {
  return (
    <header className="container">
      <div className="header">
        <div className="con">
          <img
            className="cart-image"
            src="https://img.icons8.com/?size=100&id=85383&format=png&color=000000"
            alt="shopping cart"
          />
          <h1 className="heading">Product Availability</h1>
        </div>

        <div className="search-container">
          <img
            className="search-icon"
            src="https://img.icons8.com/?size=100&id=HNqs6ySvgu0d&format=png&color=000000"
            alt="search"
          />

          <input
            type="text"
            className="search-input"
            placeholder="Search Products"
          />

          <button type="button" className="btn">
            Add New Product
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header