import { Link } from "react-router-dom";

// Put your own combo images in public/images/combos/ and change these paths
const combos = [
  { title: "Campus Chic Essentials", image: "/images/products/allproduct.jpg", to: "/shop" },
  { title: "No Makeup-Makeup kit", image: "/images/products/eyeshadow-2.jpg", to: "/category/Face" },
  { title: "Lined, Matted & Lashed", image: "/images/products/lipstick-3.jpg", to: "/category/Lips" },
];

function GiftsCombos() {
  return (
    <section className="gc">
      <h2>Explore Gifts &amp; Combos</h2>

      <div className="gc-grid">
        {combos.map((c) => (
          <Link key={c.title} to={c.to} className="gc-card">
            <img src={c.image} alt={c.title} loading="lazy" decoding="async" />
            <span>{c.title}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default GiftsCombos;