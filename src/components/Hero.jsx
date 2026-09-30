import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero.png";
import blushImg from "../assets/blush.jpg";

// Change the image of any slide here
const slides = [
  {
    eyebrow: "MARS BEAUTY",
    lines: ["YOUR", "BEAUTY.", "YOUR RULES."],
    text: "From bold looks to everyday essentials, find beauty made for you.",
    image: heroImg,
  },
  {
    eyebrow: "MAKEUP • BEAUTY • CONFIDENCE",
    lines: ["BEAUTY THAT", "FEELS LIKE", "YOU."],
    text: "Discover makeup and skincare essentials designed for your everyday glow.",
    image: "/images/categories/face.jpg",
  },
  {
    eyebrow: "NEW BEAUTY EDIT",
    lines: ["OWN YOUR", "EVERYDAY", "GLOW."],
    text: "Build your beauty routine with products made to complement your style.",
    image: blushImg,
  },
];

function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, [i]);

  const prev = () => setI((n) => (n - 1 + slides.length) % slides.length);
  const next = () => setI((n) => (n + 1) % slides.length);
  const s = slides[i];

  return (
    <section className="mh">
      {slides.map((sl, idx) => (
        <div
          key={idx}
          className={`mh-slide ${idx === i ? "on" : ""}`}
          style={{ backgroundImage: `url(${sl.image})` }}
        />
      ))}

      <button type="button" className="mh-arrow prev" onClick={prev} aria-label="Previous slide">←</button>
      <button type="button" className="mh-arrow next" onClick={next} aria-label="Next slide">→</button>

      <div className="mh-content" key={i}>
        <p className="mh-eyebrow">{s.eyebrow}</p>
        <h1 className="mh-title">
          <span>{s.lines[0]}</span>
          <span>{s.lines[1]}</span>
          <span className="pink">{s.lines[2]}</span>
        </h1>
        <p className="mh-text">{s.text}</p>
        <Link to="/shop" className="mh-btn">SHOP NOW →</Link>
      </div>

      <div className="mh-dots">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={idx === i ? "on" : ""}
            onClick={() => setI(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;