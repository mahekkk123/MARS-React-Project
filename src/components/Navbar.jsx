function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">MARS</div>

      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">Categories</a>
        <a href="#">About</a>
      </div>

      <div className="nav-icons">
        <span>🔍</span>
        <span>👤</span>
        <span>🛒</span>
      </div>
    </nav>
  );
}

export default Navbar;