import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useShop } from "../context/ShopContext";

function Navbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { cartCount, wishlistCount } = useShop();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter" && search.trim()) {
      navigate(`/search?q=${encodeURIComponent(search.trim())}`);
    }
  };

  // Adds the "active" class (the underline) to the current page's link
  const isActive = (path) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  const linkClass = (path) => (isActive(path) ? "active" : "");

  return (
    <header className="navbar">
      {/* LOGO */}
      <button
        className="logo"
        type="button"
        onClick={() => navigate("/")}
        aria-label="MARS Home"
      >
        MARS
      </button>

      {/* MAIN NAVIGATION */}
      <nav className="nav-links">
        <button
          type="button"
          className={linkClass("/")}
          onClick={() => navigate("/")}
        >
          Home
        </button>

        <button
          type="button"
          className={linkClass("/shop")}
          onClick={() => navigate("/shop")}
        >
          Shop
        </button>

        <button
          type="button"
          className={linkClass("/categor")}
          onClick={() => navigate("/categories")}
        >
          Categories
        </button>

        <button
          type="button"
          className={linkClass("/about")}
          onClick={() => navigate("/about")}
        >
          About
        </button>
      </nav>

      {/* RIGHT SIDE */}
      <div className="nav-actions">
        {/* SEARCH */}
        <div className="search-box">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="search-icon">
            <circle cx="11" cy="11" r="6.5" />
            <path d="M16 16l5 5" />
          </svg>

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleSearch}
            aria-label="Search products"
          />
        </div>

        {/* WISHLIST */}
        <button
          type="button"
          className="icon-button wishlist-nav"
          onClick={() => navigate("/wishlist")}
          aria-label="Wishlist"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.8 8.8c0 5.5-8.8 10.2-8.8 10.2S3.2 14.3 3.2 8.8C3.2 5.8 5.3 4 7.9 4c1.6 0 3.1.8 4.1 2 1-1.2 2.5-2 4.1-2 2.6 0 4.7 1.8 4.7 4.8Z" />
          </svg>

          {wishlistCount > 0 && (
            <span className="wishlist-count">{wishlistCount}</span>
          )}
        </button>

        {/* CART */}
        <button
          type="button"
          className="icon-button cart-button"
          onClick={() => navigate("/cart")}
          aria-label="Shopping cart"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 4h2l2.2 11.1a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 1.9-1.4L21 8H6" />
            <circle cx="9" cy="20" r="1.2" />
            <circle cx="18" cy="20" r="1.2" />
          </svg>

          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </button>

        {/* PROFILE */}
        <button
          type="button"
          className="profile-button"
          onClick={() => navigate("/profile")}
          aria-label="Profile"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="8" r="3.5" />
            <path d="M5 20c.8-3.4 3.2-5.2 7-5.2s6.2 1.8 7 5.2" />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Navbar;