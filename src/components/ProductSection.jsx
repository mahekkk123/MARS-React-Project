import Product from "./Product";
import products from "../data/products";

function ProductSection({
  onAddToCart,
  search = "",
  favorites = [],
  onFavorite = () => {},
}) {
  const filteredProducts = products.filter((product) =>
    `${product.name} ${product.description}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <section
      className="person2-section"
      id="products"
    >
      <div className="person2-heading">
        <p className="section-label">
          MARS BEAUTY FAVOURITES
        </p>

        <h2>Our Beauty Picks</h2>

        <p>
          Everyday essentials made for your beauty routine.
        </p>
      </div>

      <div className="person2-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Product
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              favorites={favorites}
              onFavorite={onFavorite}
            />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </section>
  );
}

export default ProductSection;