function ProductCard({ product }) {
  return (
    <article className="person2-card">

      <div className="person2-image">
        <img
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="person2-info">

        <h3>
          {product.name}
        </h3>

        <p className="person2-description">
          {product.description}
        </p>

        <div className="person2-price">

          <strong>
            ₹{product.price}
          </strong>

          <span>
            ★ {product.rating}
          </span>

        </div>

        <button
          className="person2-button"
          type="button"
        >
          ADD TO BAG
        </button>

      </div>

    </article>
  );
}

export default ProductCard;