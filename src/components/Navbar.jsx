function Navbar() {
  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        MARS
      </div>

      {/* Navigation */}
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">Categories</a>
        <a href="#">About</a>
      </div>

      {/* Right Side */}
      <div className="nav-actions">

        {/* Search */}
        <div className="search-box">
          <span>⌕</span>
          <input
            type="text"
            placeholder="Search products..."
          />
        </div>

        {/* Account */}
        <button className="icon-button" aria-label="Account">
          ♡
        </button>

        {/* Cart */}
        <button className="icon-button cart-button" aria-label="Shopping cart">
          🛒
          <span className="cart-count">0</span>
        </button>

      </div>

    </nav>
  );
}

export default Navbar;