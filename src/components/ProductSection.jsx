import { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import products from "../data/products";

const TABS = ["Lips", "Face", "Eyes", "Tools"];

function ProductSection() {
  const [activeTab, setActiveTab] = useState("Lips");

  const visible = products
    .filter((p) => p.category === activeTab)
    .slice(0, 4);

  return (
    <section className="best-sellers">
      <h2>Best Sellers</h2>

      <div className="best-tabs">
        {TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="best-grid">
        {visible.length > 0 ? (
          visible.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="best-empty">New {activeTab} products are coming soon.</p>
        )}
      </div>

      <Link to={`/category/${activeTab}`} className="best-viewall">
        VIEW ALL {activeTab.toUpperCase()}
      </Link>
    </section>
  );
}

export default ProductSection;