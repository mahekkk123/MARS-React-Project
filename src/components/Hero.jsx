import { useEffect, useState } from "react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1800&q=90",
    smallText: "MAKEUP • BEAUTY • CONFIDENCE",
    title: "BEAUTY THAT",
    highlight: "FEELS LIKE YOU.",
    description:
      "Discover makeup and skincare essentials designed for your everyday glow.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1800&q=90",
    smallText: "NEW BEAUTY EDIT",
    title: "OWN YOUR",
    highlight: "EVERYDAY GLOW.",
    description:
      "Build your beauty routine with products made to complement your style.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1800&q=90",
    smallText: "MARS BEAUTY",
    title: "YOUR BEAUTY.",
    highlight: "YOUR RULES.",
    description:
      "From bold looks to everyday essentials, find beauty made for you.",
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((current) =>
        current === slides.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((current) =>
      current === slides.length - 1 ? 0 : current + 1
    );
  };

  const previousSlide = () => {
    setCurrentSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  };

  const slide = slides[currentSlide];

  return (
    <section className="hero">

      {/* Background Image */}
      <div
        className="hero-background"
        style={{
          backgroundImage: `url(${slide.image})`,
        }}
      />

      {/* Burgundy overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">

        <p className="hero-subtitle">
          {slide.smallText}
        </p>

        <h1>
          {slide.title}
          <br />
          <span>{slide.highlight}</span>
        </h1>

        <p className="hero-description">
          {slide.description}
        </p>

        <a
          href="#products"
          className="hero-button"
        >
          SHOP NOW →
        </a>

      </div>

      {/* Previous */}
      <button
        className="hero-arrow hero-arrow-left"
        onClick={previousSlide}
        aria-label="Previous slide"
      >
        ‹
      </button>

      {/* Next */}
      <button
        className="hero-arrow hero-arrow-right"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        ›
      </button>

      {/* Slide indicators */}
      <div className="hero-dots">

        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-dot ${
              currentSlide === index ? "active" : ""
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}

      </div>

    </section>
  );
}

export default Hero;