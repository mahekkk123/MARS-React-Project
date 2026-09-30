import { useNavigate } from "react-router-dom";
import { useShop } from "../context/ShopContext";

function GiftBanner() {
  const navigate = useNavigate();
  const { applyPromo } = useShop();

  const handleGift = () => {
    applyPromo("HUEGEL");
    navigate("/shop");
  };

  return (
    <section className="gift-banner">
      <div className="gift-banner-inner">
        <div className="gift-banner-content">
          <p className="gift-eyebrow">MARS SPECIAL</p>

          <h2>
            Who doesn't love
            <br />a free gift?
          </h2>

          <p>
            Get a free Hue Gel Eyeliner with your order and add a little extra
            magic to your makeup look.
          </p>

          <p className="gift-code">
            Use Code <strong>"HUEGEL"</strong>
          </p>

          <button type="button" className="gift-btn btn-dark" onClick={handleGift}>
            GET YOUR GIFT
          </button>
        </div>

        <div className="gift-banner-image">
          <img src="/gift.jpg" alt="MARS free gift" loading="lazy" decoding="async" />
        </div>
      </div>
    </section>
  );
}

export default GiftBanner;