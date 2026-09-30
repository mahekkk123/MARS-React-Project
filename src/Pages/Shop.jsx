import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

const CHIPS = ["All", "Lips", "Face", "Eyes", "Tools"];

function Shop() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [sort, setSort] = useState("featured");

  const active = name
    ? CHIPS.find((c) => c.toLowerCase() === name.toLowerCase()) || name
    : "All";

  let list = products.filter((p) => active === "All" || p.category === active);

  if (sort === "low") list = [...list].sort((a, b) => a.price - b.price);
  if (sort === "high") list = [...list].sort((a, b) => b.price - a.price);
  if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);

  return (
    <section className="page-wrap">
      <p className="page-eyebrow">MARS BEAUTY</p>
      <h1 className="page-title">{active === "All" ? "Shop All" : active}</h1>

      <div className="shop-toolbar">
        <div className="shop-chips">
          {CHIPS.map((c) => (
            <button
              key={c}
              type="button"
              className={active === c ? "active" : ""}
              onClick={() => navigate(c === "All" ? "/shop" : `/category/${c}`)}
            >
              {c}
            </button>
          ))}
        </div>

        <select className="shop-sort" value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="featured">Featured</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>

      <p className="shop-count">{list.length} products</p>

      <div className="best-grid">
        {list.length > 0 ? (
          list.map((p) => <ProductCard key={p.id} product={p} />)
        ) : (
          <p className="best-empty">New {active} products are coming soon.</p>
        )}
      </div>
    </section>
  );
}

export default Shop;