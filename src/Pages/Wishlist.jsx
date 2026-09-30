import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useShop } from "../context/ShopContext";

function Wishlist() {
  const { wishlist, addToCart } = useShop();

  if (wishlist.length === 0) {
    return (
      <div className="page-wrap empty-state">
        <h2>Your wishlist is empty</h2>
        <p>Tap the heart on any product to save it here.</p>
        <Link to="/shop" className="btn-dark">EXPLORE PRODUCTS</Link>
      </div>
    );
  }

  return (
    <section className="page-wrap">
      <div className="wl-head">
        <div>
          <p className="page-eyebrow">SAVED FOR LATER</p>
          <h1 className="page-title" style={{ margin: 0 }}>My Wishlist ({wishlist.length})</h1>
        </div>
        <button
          type="button"
          className="btn-dark"
          onClick={() => wishlist.forEach((p) => addToCart(p, 1))}
        >
          ADD ALL TO CART
        </button>
      </div>

      <p className="shop-count">Tap the heart again to remove a product.</p>

      <div className="best-grid">
        {wishlist.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}

export default Wishlist;