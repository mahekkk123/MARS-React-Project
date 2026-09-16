import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryCard from "./components/CategoryCard";
import ProductSection from "./components/ProductSection";
import "./App.css";

function App() {
  return (
    <div className="mars-app">

      {/* =========================
          NAVBAR
      ========================= */}
      <Navbar />


      {/* =========================
          HERO
      ========================= */}
      <Hero />


      {/* =========================
          BEAUTY CATEGORIES
      ========================= */}
      <section className="category-section">

        <p className="section-label">
          EXPLORE MARS BEAUTY
        </p>

        <h2>
          Shop by Category
        </h2>

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


      {/* =========================
          BEST SELLERS
      ========================= */}
      <section className="products-section">

        <p className="section-label">
          MARS BEAUTY FAVOURITES
        </p>

        <h2>
          Best Sellers
        </h2>

        <div className="products-grid">

          {/* FOUNDATION */}
          <div className="product-card">

            <div className="product-image">
              <img
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=85"
                alt="MARS Foundation"
              />

              <span className="product-badge">
                BESTSELLER
              </span>

              <button
                className="wishlist"
                aria-label="Add to wishlist"
              >
                ♡
              </button>
            </div>

            <div className="product-info">

              <h3>MARS Foundation</h3>

              <p>
                Natural Finish Foundation
              </p>

              <div className="product-bottom">
                <strong>₹499</strong>
                <span>★ 4.8</span>
              </div>

              <button className="add-bag">
                ADD TO BAG
              </button>

            </div>
          </div>


          {/* LIPSTICK */}
          <div className="product-card">

            <div className="product-image">

              <img
                src="https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=700&q=85"
                alt="MARS Lipstick"
              />

              <span className="product-badge">
                TRENDING
              </span>

              <button
                className="wishlist"
                aria-label="Add to wishlist"
              >
                ♡
              </button>

            </div>

            <div className="product-info">

              <h3>MARS Lipstick</h3>

              <p>
                Long Lasting Matte Lip Color
              </p>

              <div className="product-bottom">
                <strong>₹299</strong>
                <span>★ 4.9</span>
              </div>

              <button className="add-bag">
                ADD TO BAG
              </button>

            </div>
          </div>


          {/* MASCARA */}
          <div className="product-card">

            <div className="product-image mascara-image">

              <img
                src="https://images.unsplash.com/photo-1631214524020-7e18db9e98c3?auto=format&fit=crop&w=700&q=85"
                alt="MARS Mascara"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=700&q=85";
                }}
              />

              <span className="product-badge">
                NEW
              </span>

              <button
                className="wishlist"
                aria-label="Add to wishlist"
              >
                ♡
              </button>

            </div>

            <div className="product-info">

              <h3>MARS Mascara</h3>

              <p>
                Volume & Length Mascara
              </p>

              <div className="product-bottom">
                <strong>₹249</strong>
                <span>★ 4.7</span>
              </div>

              <button className="add-bag">
                ADD TO BAG
              </button>

            </div>
          </div>


          {/* SERUM */}
          <div className="product-card">

            <div className="product-image">

              <img
                src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=700&q=85"
                alt="MARS Face Serum"
              />

              <span className="product-badge">
                POPULAR
              </span>

              <button
                className="wishlist"
                aria-label="Add to wishlist"
              >
                ♡
              </button>

            </div>

            <div className="product-info">

              <h3>MARS Face Serum</h3>

              <p>
                Hydrating Glow Serum
              </p>

              <div className="product-bottom">
                <strong>₹399</strong>
                <span>★ 4.8</span>
              </div>

              <button className="add-bag">
                ADD TO BAG
              </button>

            </div>
          </div>

        </div>

      </section>


      {/* =========================
          PERSON 2 PRODUCT SECTION
      ========================= */}
      <ProductSection />


      {/* ==================================================
          PARTY / NEWSLETTER
          THIS COMES FIRST
      ================================================== */}

      <section className="feature-wrapper">

        <div className="party-card">

          <div className="party-image">

            <img
              src="/newsletter.jpg"
              alt="MARS Beauty Community"
            />

          </div>

          <div className="party-content">

            <p className="feature-label">
              STAY IN THE LOOP
            </p>

            <h2>
              Join the MARS
              <br />
              Party!
            </h2>

            <p className="feature-description">
              Get the latest launches, exclusive offers,
              beauty tips and all things MARS straight
              to your inbox.
            </p>

            <div className="newsletter-form">

              <input
                type="email"
                placeholder="Enter your email address"
              />

              <button>
                JOIN NOW
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          GIFT / FINAL CTA
          THIS MUST BE LAST
      ================================================== */}

      <section className="feature-wrapper final-cta-wrapper">

        <div className="gift-card">

          <div className="gift-content">

            <p className="feature-label">
              MARS SPECIAL
            </p>

            <h2>
              Who doesn't love
              <br />
              a free gift?
            </h2>

            <p className="feature-description">
              Get a free Hue Gel Eyeliner with your order
              and add a little extra magic to your makeup look.
            </p>

            <p className="gift-code">
              Use Code <strong>"HUEGEL"</strong>
            </p>

            <button className="final-shop-button">
              GET YOUR GIFT →
            </button>

          </div>

          <div className="gift-image">

            <img
              src="/gift.jpg"
              alt="MARS Special Gift"
            />

          </div>

        </div>

      </section>

    </div>
  );
}

export default App;