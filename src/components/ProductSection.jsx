import ProductCard from "./ProductCard";

import blush from "../assets/blush.jpg";
import lipstick from "../assets/lipstick.jpg";
import mascara from "../assets/mascara.jpg";
import skincare from "../assets/skincare.jpg";

function ProductSection() {

  const products = [
    {
      name: "MARS Blush",
      description: "Soft natural finish blush",
      price: 399,
      rating: 4.8,
      image: blush,
    },
    {
      name: "MARS Lip Tint",
      description: "Long lasting lip color",
      price: 299,
      rating: 4.7,
      image: lipstick,
    },
    {
      name: "MARS Mascara",
      description: "Volume & length mascara",
      price: 349,
      rating: 4.9,
      image: mascara,
    },
    {
      name: "MARS Face Serum",
      description: "Lightweight hydrating serum",
      price: 499,
      rating: 4.8,
      image: skincare,
    },
  ];

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
          <ProductCard
            key={product.name}
            product={product}
          />
        ))}

      </div>

    </section>
  );
}

export default ProductSection;