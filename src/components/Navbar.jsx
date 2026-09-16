import { useState } from "react";

function Navbar() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <nav className="navbar">

      <a
        href="#home"
        className="logo"
      >
        MARS
      </a>

      <div className="nav-links">

        <a href="#home">
          Home
        </a>

        <a href="#products">
          Shop
        </a>

        <a href="#categories">
          Categories
        </a>

        <a href="#about">
          About
        </a>

      </div>


      <div className="nav-actions">

        <div className="search-box">

          <span>
            ⌕
          </span>

          <input
            type="text"
            placeholder="Search products..."
            aria-label="Search products"
          />

        </div>


        <button
          className="icon-button"
          type="button"
          aria-label="Wishlist"
        >
          ♡
        </button>


        <button
          className="icon-button cart-button"
          type="button"
          aria-label="Shopping cart"
          onClick={() =>
            setCartCount((count) => count + 1)
          }
        >

          🛒

          <span className="cart-count">
            {cartCount}
          </span>

        </button>

      </div>

    </nav>
  );
}

export default Navbar;