function GiftBanner() {
  return (
    <section className="gift-section">

      <div className="gift-content">

        <p className="gift-label">
          MARS SPECIAL
        </p>

        <h2>
          Who doesn't love
          <br />
          a free gift?
        </h2>

        <p className="gift-description">
          Get a free Hue Gel Eyeliner with your order
          and add a little extra magic to your makeup look.
        </p>

        <p className="gift-code">
          Use Code <strong>"HUEGEL"</strong>
        </p>

        <button
          type="button"
          className="gift-button"
        >
          GET YOUR GIFT
        </button>

      </div>


      <div className="gift-image">

        <img
          src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1000&q=85"
          alt="Gift boxes and flowers"
        />

      </div>

    </section>
  );
}

export default GiftBanner;