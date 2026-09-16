import './index.css'

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
          FreshCart <br />
          Product Availability
        </h1>
      </div>

      <div className="header-actions">
        <div className="location">
          <img
            className="location-icon"
            src="https://img.icons8.com/?size=100&id=p5n5ZAUprZsA&format=png&color=000000"
            alt="location"
          />
          <p>Hyderabad</p>
        </div>

        <div className="cart">
          <img
            className="cart-icon"
            src="https://img.icons8.com/?size=100&id=BBhHIwJINbBl&format=png&color=000000"
            alt="shopping cart"
          />
          <span>0</span>
        </div>
      </div>
    </header>
  )
}

export default Header