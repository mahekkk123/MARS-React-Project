function Navbar({
  cartCount = 0,
  search = "",
  setSearch = () => {},
  favorites = [],
}) {
  return (
    <nav className="navbar">

      {/* MARS LOGO */}
      <a href="#home" className="logo">
        MARS
      </a>

      {/* NAVIGATION LINKS */}
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#products">Shop</a>
        <a href="#categories">Categories</a>
        <a href="#about">About</a>
      </div>

      {/* NAVIGATION ACTIONS */}
      <div className="nav-actions">

        {/* SEARCH */}
        <div className="search-box">
          <span>⌕</span>

          <input
            type="text"
            placeholder="Search products..."
            aria-label="Search products"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* WISHLIST */}
        <button
          className="icon-button wishlist-nav"
          type="button"
          aria-label="Wishlist"
        >
          ♡
          <span className="wishlist-count">
            {favorites.length}
          </span>
        </button>

        {/* CART */}
        <button
          className="icon-button cart-button"
          type="button"
          aria-label="Shopping cart"
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