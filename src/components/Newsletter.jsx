import { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

    if (!valid) {
      setIsError(true);
      setMessage("Please enter a valid email address.");
      return;
    }

    setIsError(false);
    setMessage("You're in! Welcome to the MARS Party 🎉");
    setEmail("");
  };

  return (
    <section className="mars-newsletter">
      <div className="mars-newsletter-inner">
        <div className="mars-newsletter-image">
          <img
            src="/newsletter.jpg"
            alt="Join the MARS Party"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="mars-newsletter-content">
          <p className="mars-newsletter-eyebrow">STAY IN THE LOOP</p>

          <h2>Join the MARS Party!</h2>

          <p className="mars-newsletter-text">
            Get the latest launches, exclusive offers, beauty tips and all
            things MARS straight to your inbox.
          </p>

          <form className="mars-newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email address"
              aria-label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">JOIN NOW</button>
          </form>

          {message && (
            <p className={`mars-newsletter-msg ${isError ? "error" : ""}`}>
              {message}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Newsletter;