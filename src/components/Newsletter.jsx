function Newsletter() {
  return (
    <section className="newsletter">
      <div className="newsletter-image">
        <img
          src="/newsletter.jpg"
          alt="MARS Beauty"
        />
      </div>

      <div className="newsletter-content">
        <p className="newsletter-label">
          STAY IN THE LOOP
        </p>

        <h2>
          Join the MARS
          <br />
          Party!
        </h2>

        <p className="newsletter-description">
          Get the latest launches, exclusive offers,
          beauty tips and all things MARS straight
          to your inbox.
        </p>

        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email address"
          />

          <button type="submit">
            JOIN NOW
          </button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;