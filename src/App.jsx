import { Routes, Route, Outlet, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Categories from "./Pages/Categories";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import OrderSuccess from "./Pages/OrderSuccess";
import Wishlist from "./Pages/Wishlist";
import Profile from "./Pages/Profile";
import SearchResults from "./Pages/SearchResults";
import About from "./Pages/About";
import InfoPage from "./Pages/InfoPage";

import "./App.css";

/* Scrolls to top on every page change (or to #hash if there is one) */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname, hash]);

  return null;
}

/* Navbar + page + Footer wrapper shared by every route */
function Layout() {
  return (
    <div className="mars-app" id="home">
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function NotFound() {
  return (
    <section style={{ padding: "120px 24px", textAlign: "center" }}>
      <h2>Page not found</h2>
      <p style={{ margin: "12px 0 24px" }}>
        The page you are looking for does not exist.
      </p>
      <Link to="/" className="add-bag" style={{ display: "inline-block", padding: "14px 28px" }}>
        BACK TO HOME
      </Link>
    </section>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:name" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success/:orderId" element={<OrderSuccess />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/about" element={<About />} />
        <Route path="/info/:slug" element={<InfoPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;