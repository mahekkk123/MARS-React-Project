import { Link } from "react-router-dom";

const categoryLinks = [
  { label: "Best Sellers", to: "/shop" },
  { label: "New Arrivals", to: "/shop" },
  { label: "Lips", to: "/category/Lips" },
  { label: "Eyes", to: "/category/Eyes" },
  { label: "Face", to: "/category/Face" },
  { label: "Tools", to: "/category/Tools" },
];

const policyLinks = [
  { label: "Privacy Policy", to: "/info/privacy-policy" },
  { label: "Terms & Conditions", to: "/info/terms" },
  { label: "Shipping Policy", to: "/info/shipping" },
  { label: "Refund Policy", to: "/info/refund" },
  { label: "About Us", to: "/about" },
];

const connectLinks = [
  { label: "Support", to: "/info/support" },
  { label: "Store Locator", to: "/info/store-locator" },
  { label: "Blog", to: "/info/blog" },
  { label: "Contact Us", to: "/info/contact" },
];

function Footer() {
  return (
    <footer className="mars-footer">
      <div className="mars-footer-top">
        <div className="mars-footer-brand">
          <Link to="/" className="mars-footer-logo">
            <span>◉</span> MARS
          </Link>

          <h3>Makeup for everyone.</h3>
          <p>
            We believe makeup is for everyone. Express yourself, experiment and
            create your own look with MARS.
          </p>

          <div className="mars-footer-social">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm5.2-3.2a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" /></svg>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24"><path d="M13.5 22v-8.2h2.8l.5-3.3h-3.3V8.4c0-.9.4-1.7 1.8-1.7h1.6V3.8c-.3 0-1.3-.2-2.5-.2-2.6 0-4.3 1.6-4.3 4.4v2.5H7.2v3.3H10V22h3.5Z" /></svg>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
              <svg viewBox="0 0 24 24"><path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8ZM10 15V9l5.2 3L10 15Z" /></svg>
            </a>
          </div>
        </div>

        <div className="mars-footer-col">
          <h4>Categories</h4>
          {categoryLinks.map((l) => (
            <Link key={l.label} to={l.to}>{l.label}</Link>
          ))}
        </div>

        <div className="mars-footer-col">
          <h4>Policies &amp; More</h4>
          {policyLinks.map((l) => (
            <Link key={l.label} to={l.to}>{l.label}</Link>
          ))}
        </div>

        <div className="mars-footer-col">
          <h4>Connect</h4>
          {connectLinks.map((l) => (
            <Link key={l.label} to={l.to}>{l.label}</Link>
          ))}
        </div>
      </div>

      <div className="mars-footer-bottom">
        © 2026 MARS Cosmetics. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;