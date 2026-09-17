import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryCard from "./components/CategoryCard";
import ProductSection from "./components/ProductSection";
import GiftBanner from "./components/GiftBanner";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);

  const handleFavorite = (productName) => {
    setFavorites((currentFavorites) => {
      if (currentFavorites.includes(productName)) {
        return currentFavorites.filter(
          (name) => name !== productName
        );
      }

      return [...currentFavorites, productName];
    });
  };

  const handleAddToCart = () => {
    setCartCount((count) => count + 1);
  };

  const bestSellers = [
    {
      name: "MARS Foundation",
      description: "Natural Finish Foundation",
      price: 499,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=85",
      badge: "BESTSELLER",
    },
    {
      name: "MARS Lipstick",
      description: "Long Lasting Matte Lip Color",
      price: 299,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=700&q=85",
      badge: "TRENDING",
    },
    {
      name: "MARS Mascara",
      description: "Volume & Length Mascara",
      price: 249,
      rating: 4.7,
      image:
        "https://marscosmetics.in/cdn/shop/files/12Colors_771caa9c-d47c-4522-8882-de0feb9b7110.jpg?v=1764572463&width=800",
      badge: "NEW",
    },
    {
      name: "MARS Face Serum",
      description: "Hydrating Glow Serum",
      price: 399,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=700&q=85",
      badge: "POPULAR",
    },
  ];

  const filteredBestSellers = bestSellers.filter((product) =>
    `${product.name} ${product.description}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="mars-app" id="home">

      {/* Navbar */}
      <Navbar
        cartCount={cartCount}
        search={search}
        setSearch={setSearch}
        favorites={favorites}
      />

      {/* Hero */}
      <Hero />

      {/* Categories */}
      <section className="category-section" id="categories">
        <p className="section-label">EXPLORE MARS BEAUTY</p>

        <h2>Shop by Category</h2>

        <div className="category-grid">
          <CategoryCard
            title="Face"
            image="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=85"
          />

          <CategoryCard
            title="Lips"
            image="https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=85"
          />

          <CategoryCard
            title="Eyes"
            image="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=85"
          />

          <CategoryCard
            title="Skincare"
            image="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=85"
          />
        </div>
      </section>

      {/* Best Sellers */}
      <section className="products-section" id="products">
        <p className="section-label">MARS BEAUTY FAVOURITES</p>

        <h2>Best Sellers</h2>

        <div className="products-grid">
          {filteredBestSellers.length > 0 ? (
            filteredBestSellers.map((product) => (
              <div
                className="product-card"
                key={product.name}
              >
                <div className="product-image">

                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  <span className="product-badge">
                    {product.badge}
                  </span>

                  <button
                    className="wishlist"
                    type="button"
                    aria-label="Add to wishlist"
                    onClick={() =>
                      handleFavorite(product.name)
                    }
                  >
                    {favorites.includes(product.name)
                      ? "♥"
                      : "♡"}
                  </button>

                </div>

                <div className="product-info">

                  <h3>{product.name}</h3>

                  <p>{product.description}</p>

                  <div className="product-bottom">
                    <strong>₹{product.price}</strong>

                    <span>
                      ★ {product.rating}
                    </span>
                  </div>

                  <button
                    className="add-bag"
                    type="button"
                    onClick={handleAddToCart}
                  >
                    ADD TO BAG
                  </button>

                </div>
              </div>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </section>

      {/* Our Beauty Picks */}
      <ProductSection
        onAddToCart={handleAddToCart}
        search={search}
        favorites={favorites}
        onFavorite={handleFavorite}
      />

      {/* Gift Banner */}
      <GiftBanner />

      {/* Newsletter / MARS Party */}
      <Newsletter />

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;