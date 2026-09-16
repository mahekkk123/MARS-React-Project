import Product from "./Product";
import products from "../data/products";

function ProductSection() {
  return (
    <section
      className="person2-section"
      id="products"
    >

      <div className="person2-heading">

        <p className="section-label">
          MARS BEAUTY FAVOURITES
        </p>

        <h2>
          Our Beauty Picks
        </h2>

        <p>
          Everyday essentials made for your beauty routine.
        </p>

      </div>


      <div className="person2-grid">

        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
}

export default ProductSection;