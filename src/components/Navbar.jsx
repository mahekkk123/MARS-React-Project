function Navbar() {
  return (
    <nav className="navbar">

      {/* MARS Logo */}
      <div className="logo">
        MARS
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">Categories</a>
        <a href="#">About</a>
      </div>

      {/* Search + Account + Cart */}
      <div className="nav-actions">

        <div className="search-box">
          <span>🔍</span>
          <input type="text" placeholder="Search" />
        </div>

        <button className="icon-button">👤</button>

        <button className="icon-button">
          🛒
        </button>

      </div>

    </nav>
  );
}

export default Navbar;