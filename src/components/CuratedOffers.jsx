import { useNavigate } from "react-router-dom";
import { useShop } from "../context/ShopContext";

// Put your own offer images in public/images/offers/ and change these paths
const offers = [
  { code: "WELCOME2MARS", title: "Flat 10% OFF on Your First Order", image: "/images/products/foundation.jpg", to: "/shop" },
  { code: "LIPCRAYON", title: "Free WSWB Lip Crayon worth ₹249", image: "/images/products/lipstick-2.jpg", to: "/category/Lips" },
  { code: "BLUSH", title: "Free Face Blusher worth ₹249", image: "/images/products/eyeshadow-3.jpg", to: "/category/Face" },
  { code: "SETTINGPOWDER", title: "Free Born to Bake Setting Powder", image: "/images/products/primer-1.jpg", to: "/category/Face" },
];

function CuratedOffers() {
  const navigate = useNavigate();
  const { applyPromo } = useShop();

  const handleExplore = (offer) => {
    applyPromo(offer.code);
    navigate(offer.to);
  };

  return (
    <section className="co">
      <h2>Curated Offers For You</h2>

      <div className="co-grid">
        {offers.map((o) => (
          <article key={o.code} className="co-card">
            <img src={o.image} alt={o.title} loading="lazy" decoding="async" />
            <div className="co-body">
              <p className="co-code">Use Code "{o.code}"</p>
              <h3 className="co-title">{o.title}</h3>
              <button type="button" className="co-btn" onClick={() => handleExplore(o)}>
                Explore
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CuratedOffers;