import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <section className="ab-hero">
        <p className="page-eyebrow">ABOUT MARS</p>
        <h1>Makeup for everyone.</h1>
        <p>
          MARS is built on a simple idea: beauty should be bold, affordable and
          made for every face, every skin tone and every mood.
        </p>
      </section>

      <section className="ab-grid">
        <div className="ab-card">
          <h3>Bold by design</h3>
          <p>From lip colours to eye palettes, every product is made to help you express yourself without limits.</p>
        </div>
        <div className="ab-card">
          <h3>Kind to skin</h3>
          <p>Our formulas are dermatologically tested and cruelty-free, so you can wear them all day with comfort.</p>
        </div>
        <div className="ab-card">
          <h3>Priced for you</h3>
          <p>Premium quality should not cost a fortune. We keep prices honest so everyone can experiment.</p>
        </div>
      </section>

      <section className="ab-stats">
        <div><b>500+</b><span>Products</span></div>
        <div><b>1M+</b><span>Happy customers</span></div>
        <div><b>100%</b><span>Cruelty-free</span></div>
      </section>

      <section className="ab-cta">
        <h2>Ready to find your look?</h2>
        <Link to="/shop" className="btn-dark">SHOP NOW</Link>
      </section>
    </>
  );
}

export default About;