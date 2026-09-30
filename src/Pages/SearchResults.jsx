import { Link, useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { searchProducts } from "../data/products";

function SearchResults() {
  const [params] = useSearchParams();
  const q = params.get("q") || "";
  const results = searchProducts(q);

  return (
    <section className="page-wrap">
      <p className="page-eyebrow">SEARCH RESULTS</p>
      <h1 className="page-title">{q ? `Results for "${q}"` : "All products"}</h1>
      <p className="shop-count">{results.length} products found</p>

      {results.length > 0 ? (
        <div className="best-grid">
          {results.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      ) : (
        <div className="empty-state">
          <h2>No matches found</h2>
          <p>Try a different word, like "lipstick" or "mascara".</p>
          <Link to="/shop" className="btn-dark">BROWSE ALL PRODUCTS</Link>
        </div>
      )}
    </section>
  );
}

export default SearchResults;