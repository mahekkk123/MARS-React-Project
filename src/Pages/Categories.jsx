import { Link } from "react-router-dom";
import { categories } from "../data/products";

function Categories() {
  return (
    <section className="page-wrap">
      <p className="page-eyebrow">EXPLORE MARS BEAUTY</p>
      <h1 className="page-title">Shop by Category</h1>

      <div className="cat-grid">
        {categories.map((c) => (
          <Link key={c.name} to={`/category/${c.name}`} className="cat-tile">
            <img src={c.image} alt={c.name} />
            <span>{c.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Categories;