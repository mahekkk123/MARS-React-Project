import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import products, { getProductById } from "../data/products";
import ProductCard from "../components/ProductCard";
import { useShop } from "../context/ShopContext";

const SHADE_NAMES = ["Nude Rose", "Warm Brown", "Deep Berry"];

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const { addToCart, toggleWishlist, isWishlisted } = useShop();

  const [activeImg, setActiveImg] = useState(0);
  const [qty, setQty] = useState(1);
  const [shade, setShade] = useState(0);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setActiveImg(0);
    setQty(1);
    setShade(0);
    setAdded(false);
  }, [id]);

  if (!product) {
    return (
      <div className="page-wrap empty-state">
        <h2>Product not found</h2>
        <p>This product does not exist or was removed.</p>
        <Link to="/shop" className="btn-dark">BACK TO SHOP</Link>
      </div>
    );
  }

  const isTool = product.category === "Tools";
  const liked = isWishlisted(product.id);
  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;
  const filled = Math.round(product.rating);
  const stars = "★".repeat(filled) + "☆".repeat(5 - filled);

  const buildItem = () =>
    isTool ? product : { ...product, shade: SHADE_NAMES[shade] };

  const handleAdd = () => {
    addToCart(buildItem(), qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const handleBuyNow = () => {
    addToCart(buildItem(), qty);
    navigate("/checkout");
  };

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <section className="page-wrap">
      <div className="pd-crumbs">
        <Link to="/">Home</Link> / <Link to="/shop">Shop</Link> /{" "}
        <Link to={`/category/${product.category}`}>{product.category}</Link> /{" "}
        {product.name}
      </div>

      <div className="pd">
        <div className="pd-gallery">
          <div className="pd-thumbs">
            {product.images.map((img, i) => (
              <button
                key={img + i}
                type="button"
                className={i === activeImg ? "active" : ""}
                onClick={() => setActiveImg(i)}
                aria-label={`View image ${i + 1}`}
              >
                <img src={img} alt="" loading="lazy" decoding="async" />
              </button>
            ))}
          </div>

          <div className="pd-main">
            <img src={product.images[activeImg]} alt={product.name} decoding="async" />
            <span className="pd-badge">{product.badge || "BESTSELLER"}</span>
          </div>
        </div>

        <div className="pd-info">
          <h1>{product.name}</h1>
          <p className="pd-desc">{product.description}</p>

          <div className="pd-rating">
            <b>{stars}</b>
            <span>{product.rating} · {product.reviews} reviews</span>
          </div>

          <div className="pd-price">
            ₹{product.price}
            {product.oldPrice && <s>₹{product.oldPrice}</s>}
            {discount > 0 && <em>{discount}% OFF</em>}
          </div>
          <p className="pd-tax">Inclusive of all taxes. Free shipping above ₹499.</p>

          {!isTool && (
            <>
              <p className="pd-label">SHADE: {SHADE_NAMES[shade].toUpperCase()}</p>
              <div className="pd-shades">
                {product.shades.map((c, i) => (
                  <button
                    key={c}
                    type="button"
                    className={`pd-shade ${i === shade ? "active" : ""}`}
                    style={{ background: c }}
                    onClick={() => setShade(i)}
                    aria-label={SHADE_NAMES[i]}
                  />
                ))}
              </div>
            </>
          )}

          <div className="pd-actions">
            <div className="qty">
              <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))}>−</button>
              <span>{qty}</span>
              <button type="button" onClick={() => setQty((q) => q + 1)}>+</button>
            </div>

            <button type="button" className="btn-dark" onClick={handleAdd}>
              {added ? "ADDED ✓" : "ADD TO CART"}
            </button>

            <button
              type="button"
              className={`pd-heart ${liked ? "active" : ""}`}
              onClick={() => toggleWishlist(product)}
              aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.8 8.8c0 5.5-8.8 10.2-8.8 10.2S3.2 14.3 3.2 8.8C3.2 5.8 5.3 4 7.9 4c1.6 0 3.1.8 4.1 2 1-1.2 2.5-2 4.1-2 2.6 0 4.7 1.8 4.7 4.8Z" />
              </svg>
            </button>
          </div>

          <div className="pd-actions">
            <button type="button" className="btn-light" onClick={handleBuyNow}>
              BUY NOW
            </button>
          </div>

          <ul className="pd-points">
            <li>✓ Cruelty-free and dermatologically tested</li>
            <li>✓ Long-lasting, comfortable wear</li>
            <li>✓ Easy 7-day returns</li>
            <li>✓ Cash on Delivery available</li>
          </ul>
        </div>
      </div>

      {related.length > 0 && (
        <>
          <h2 className="section-title">You may also like</h2>
          <div className="best-grid">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export default ProductDetails;