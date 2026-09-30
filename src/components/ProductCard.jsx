import { useState } from "react";
import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";

function ProductCard({ product }) {
  const { toggleWishlist, isWishlisted, addToCart } = useShop();
  const [added, setAdded] = useState(false);

  const image = product.image || product.images?.[0];
  const liked = isWishlisted(product.id);
  const isTool = product.category === "Tools";
  const shades = isTool ? [] : product.shades || [];
  const link = `/product/${product.id}`;

  const filled = Math.round(product.rating || 5);
  const stars = "★".repeat(filled) + "☆".repeat(5 - filled);

  const handleAdd = () => {
    addToCart(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <article className="mc-card">
      <div className="mc-image">
        <Link to={link}>
          <img
            src={image}
            alt={product.name}
            loading="lazy"
            decoding="async"
          />
        </Link>

        <span className="mc-badge">{product.badge || "BESTSELLER"}</span>

        <button
          type="button"
          className={`mc-heart ${liked ? "active" : ""}`}
          onClick={() => toggleWishlist(product)}
          aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.8 8.8c0 5.5-8.8 10.2-8.8 10.2S3.2 14.3 3.2 8.8C3.2 5.8 5.3 4 7.9 4c1.6 0 3.1.8 4.1 2 1-1.2 2.5-2 4.1-2 2.6 0 4.7 1.8 4.7 4.8Z" />
          </svg>
        </button>
      </div>

      <Link to={link} className="mc-title" title={product.name}>
        {product.name}
      </Link>

      <div className="mc-rating">
        <span className="mc-stars">{stars}</span>
        <span>{product.reviews} reviews</span>
      </div>

      <div className="mc-price">
        ₹{product.price}
        {product.oldPrice && (
          <span className="mc-old-price">₹{product.oldPrice}</span>
        )}
      </div>

      <div className="mc-shades">
        {shades.map((c) => (
          <span key={c} style={{ background: c }} />
        ))}
        {shades.length > 0 && product.moreShades > 0 && (
          <small>+{product.moreShades}</small>
        )}
      </div>

      {isTool ? (
        <button type="button" className="mc-btn" onClick={handleAdd}>
          {added ? "Added ✓" : "Add to Cart"}
        </button>
      ) : (
        <Link to={link} className="mc-btn">
          Select Shades
        </Link>
      )}
    </article>
  );
}

export default ProductCard;