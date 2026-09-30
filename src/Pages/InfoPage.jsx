import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const PAGES = {
  "privacy-policy": {
    title: "Privacy Policy",
    body: [
      ["What we collect", "We collect the details you give us at checkout, such as your name, address, email and phone number, so we can deliver your order."],
      ["How we use it", "Your information is used to process orders, send updates and improve our store. We never sell your personal data."],
      ["Your choices", "You can update or delete your saved details any time from your profile."],
    ],
  },
  terms: {
    title: "Terms & Conditions",
    body: [
      ["Using our store", "By shopping with MARS you agree to provide accurate information and to use the site lawfully."],
      ["Pricing", "All prices are in Indian Rupees and include applicable taxes. We may change prices or offers at any time."],
      ["Promo codes", "Each promo code has its own conditions and cannot be combined unless stated."],
    ],
  },
  shipping: {
    title: "Shipping Policy",
    body: [
      ["Delivery time", "Orders are delivered within 3 to 7 working days across India."],
      ["Shipping charges", "Shipping is free on orders above ₹499. Below that, a flat ₹49 is charged."],
      ["Tracking", "You will receive tracking details by email once your order ships."],
    ],
  },
  refund: {
    title: "Refund Policy",
    body: [
      ["Returns", "Unused and unopened products can be returned within 7 days of delivery."],
      ["Refunds", "Refunds are issued to your original payment method within 5 to 7 working days after we receive the product."],
      ["Damaged items", "If something arrives damaged, contact support with a photo and we will replace it."],
    ],
  },
  support: {
    title: "Support",
    form: true,
    body: [["We're here to help", "Send us your question about orders, products or returns and our team will reply within one working day."]],
  },
  contact: {
    title: "Contact Us",
    form: true,
    body: [["Get in touch", "Email care@marsbeauty.example or use the form below."]],
  },
  "store-locator": {
    title: "Store Locator",
    body: [
      ["Mumbai", "MARS Store, Linking Road, Bandra West"],
      ["Delhi", "MARS Store, Connaught Place"],
      ["Bengaluru", "MARS Store, Indiranagar 100 Feet Road"],
      ["Pune", "MARS Store, FC Road"],
    ],
  },
  blog: {
    title: "The MARS Blog",
    body: [
      ["5 steps to a flawless base", "Prep, prime, apply, set and blend. Here's how to make your foundation last all day."],
      ["Find your perfect lipstick shade", "Undertones matter. Learn how to pick a lip colour that suits your skin."],
      ["Eyeshadow for beginners", "Start with three shades and a fluffy brush. That is all you need."],
    ],
  },
};

function InfoPage() {
  const { slug } = useParams();
  const page = PAGES[slug];
  const [sent, setSent] = useState(false);

  if (!page) {
    return (
      <div className="page-wrap empty-state">
        <h2>Page not found</h2>
        <Link to="/" className="btn-dark">BACK TO HOME</Link>
      </div>
    );
  }

  return (
    <section className="ip">
      <p className="page-eyebrow">MARS</p>
      <h1>{page.title}</h1>

      {page.body.map(([h, t]) => (
        <div key={h}>
          <h3>{h}</h3>
          <p>{t}</p>
        </div>
      ))}

      {page.form && (
        sent ? (
          <p style={{ color: "#2e7d32", fontWeight: 600 }}>Thanks! We'll get back to you soon.</p>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <input required placeholder="Your name" />
            <input required type="email" placeholder="Your email" />
            <textarea required rows={5} placeholder="How can we help?" />
            <button type="submit" className="btn-dark">SEND MESSAGE</button>
          </form>
        )
      )}
    </section>
  );
}

export default InfoPage;