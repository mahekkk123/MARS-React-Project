function Product({
  product,
  onAddToCart,
  favorites = [],
  onFavorite = () => {},
}) {
  const isFavorite = favorites.includes(product.name);

  return (
    <article className="person2-card">

      <div className="person2-image">

        <img
          src={product.image}
          alt={product.name}
        />

        {/* WISHLIST */}
        <button
          type="button"
          className="wishlist"
          aria-label="Add to wishlist"
          onClick={() => onFavorite(product.name)}
        >
          {isFavorite ? "♥" : "♡"}
        </button>

      </div>

      <div className="person2-info">

        <h3>{product.name}</h3>

        <p className="person2-description">
          {product.description}
        </p>

        <div className="person2-price">
          <strong>₹{product.price}</strong>
          <span>★ {product.rating}</span>
        </div>

        {/* ADD TO BAG */}
        <button
          type="button"
          className="person2-button"
          onClick={() => onAddToCart(product)}
        >
          ADD TO BAG
        </button>

      </div>

    </article>
  );
}

export default Product;