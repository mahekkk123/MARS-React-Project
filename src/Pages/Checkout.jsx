import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useShop, formatPrice, parsePrice } from "../context/ShopContext";

const EMPTY = { name: "", phone: "", email: "", address: "", city: "", state: "", pincode: "" };

function Checkout() {
  const navigate = useNavigate();
  const {
    cart, subtotal, discount, shipping, total, promo,
    placeOrder, addresses, addAddress, user,
  } = useShop();

  const [form, setForm] = useState({
    ...EMPTY,
    name: user.name !== "Guest User" ? user.name : "",
    email: user.email !== "guest@mars.com" ? user.email : "",
    phone: user.phone || "",
  });
  const [pay, setPay] = useState("upi");
  const [upi, setUpi] = useState("");
  const [card, setCard] = useState({ number: "", name: "", expiry: "", cvv: "" });
  const [errors, setErrors] = useState({});
  const [saveAddr, setSaveAddr] = useState(true);
  const [processing, setProcessing] = useState(false);

  if (cart.length === 0 && !processing) {
    return (
      <div className="page-wrap empty-state">
        <h2>Nothing to checkout</h2>
        <p>Your bag is empty.</p>
        <Link to="/shop" className="btn-dark">CONTINUE SHOPPING</Link>
      </div>
    );
  }

  const setField = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const validate = () => {
    const e = {};
    if (form.name.trim().length < 2) e.name = "Enter your full name";
    if (!/^[6-9]\d{9}$/.test(form.phone.trim())) e.phone = "Enter a valid 10-digit mobile number";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = "Enter a valid email";
    if (form.address.trim().length < 6) e.address = "Enter your full address";
    if (form.city.trim().length < 2) e.city = "Enter your city";
    if (form.state.trim().length < 2) e.state = "Enter your state";
    if (!/^\d{6}$/.test(form.pincode.trim())) e.pincode = "Enter a 6-digit pincode";

    if (pay === "upi" && !/^[\w.\-]{2,}@[\w]{2,}$/.test(upi.trim())) e.upi = "Enter a valid UPI ID (name@bank)";
    if (pay === "card") {
      if (card.number.replace(/\s/g, "").length !== 16) e.cardNumber = "Enter a 16-digit card number";
      if (card.name.trim().length < 2) e.cardName = "Enter the name on card";
      if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(card.expiry)) e.expiry = "Use MM/YY";
      if (!/^\d{3}$/.test(card.cvv)) e.cvv = "3 digits";
    }
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    let label = "Cash on Delivery";
    if (pay === "upi") label = `UPI (${upi.trim()})`;
    if (pay === "card") label = `Card ending ${card.number.replace(/\s/g, "").slice(-4)}`;

    setProcessing(true);
    setTimeout(() => {
      const order = placeOrder({ address: form, paymentMethod: label });
      if (saveAddr) addAddress(form);
      navigate(`/order-success/${order.id}`);
    }, 1200);
  };

  const field = (key, label, props = {}) => (
    <div className={`ck-field ${props.full ? "full" : ""} ${errors[key] ? "bad" : ""}`}>
      <label htmlFor={key}>{label}</label>
      <input id={key} value={form[key]} onChange={setField(key)} {...props} full={undefined} />
      {errors[key] && <span className="ck-err">{errors[key]}</span>}
    </div>
  );

  return (
    <section className="page-wrap">
      <p className="page-eyebrow">SECURE CHECKOUT</p>
      <h1 className="page-title">Checkout</h1>

      <form className="ck" onSubmit={handleSubmit} noValidate>
        <div>
          <div className="ck-box">
            <h3>Delivery Address</h3>

            {addresses.length > 0 && (
              <div className="ck-saved">
                {addresses.map((a) => (
                  <button
                    type="button"
                    key={a.id}
                    onClick={() =>
                      setForm({
                        name: a.name, phone: a.phone, email: a.email,
                        address: a.address, city: a.city, state: a.state, pincode: a.pincode,
                      })
                    }
                  >
                    Use: {a.name}, {a.city}
                  </button>
                ))}
              </div>
            )}

            <div className="ck-grid">
              {field("name", "Full name")}
              {field("phone", "Mobile number", { inputMode: "numeric", maxLength: 10 })}
              {field("email", "Email", { type: "email", full: true })}
              {field("address", "Address (house no, street, area)", { full: true })}
              {field("city", "City")}
              {field("state", "State")}
              {field("pincode", "Pincode", { inputMode: "numeric", maxLength: 6 })}
            </div>

            <label className="ck-check">
              <input type="checkbox" checked={saveAddr} onChange={(e) => setSaveAddr(e.target.checked)} />
              Save this address to my profile
            </label>
          </div>

          <div className="ck-box">
            <h3>Payment Method</h3>

            <div className="ck-pay">
              {[
                ["upi", "UPI (GPay, PhonePe, Paytm)"],
                ["card", "Credit / Debit Card"],
                ["cod", "Cash on Delivery"],
              ].map(([val, label]) => (
                <label key={val} className={`opt ${pay === val ? "active" : ""}`}>
                  <input type="radio" name="pay" checked={pay === val} onChange={() => setPay(val)} />
                  {label}
                </label>
              ))}
            </div>

            <div className="ck-paybox">
              {pay === "upi" && (
                <div className={`ck-field ${errors.upi ? "bad" : ""}`}>
                  <label htmlFor="upi">UPI ID</label>
                  <input id="upi" value={upi} onChange={(e) => setUpi(e.target.value)} placeholder="yourname@upi" />
                  {errors.upi && <span className="ck-err">{errors.upi}</span>}
                </div>
              )}

              {pay === "card" && (
                <div className="ck-grid">
                  <div className={`ck-field full ${errors.cardNumber ? "bad" : ""}`}>
                    <label htmlFor="cn">Card number</label>
                    <input
                      id="cn"
                      inputMode="numeric"
                      placeholder="1234 5678 9012 3456"
                      value={card.number}
                      maxLength={19}
                      onChange={(e) => {
                        const d = e.target.value.replace(/\D/g, "").slice(0, 16);
                        setCard((c) => ({ ...c, number: d.replace(/(.{4})/g, "$1 ").trim() }));
                      }}
                    />
                    {errors.cardNumber && <span className="ck-err">{errors.cardNumber}</span>}
                  </div>
                  <div className={`ck-field full ${errors.cardName ? "bad" : ""}`}>
                    <label htmlFor="cname">Name on card</label>
                    <input id="cname" value={card.name} onChange={(e) => setCard((c) => ({ ...c, name: e.target.value }))} />
                    {errors.cardName && <span className="ck-err">{errors.cardName}</span>}
                  </div>
                  <div className={`ck-field ${errors.expiry ? "bad" : ""}`}>
                    <label htmlFor="exp">Expiry (MM/YY)</label>
                    <input
                      id="exp"
                      placeholder="08/29"
                      maxLength={5}
                      value={card.expiry}
                      onChange={(e) => {
                        let v = e.target.value.replace(/[^\d]/g, "").slice(0, 4);
                        if (v.length > 2) v = v.slice(0, 2) + "/" + v.slice(2);
                        setCard((c) => ({ ...c, expiry: v }));
                      }}
                    />
                    {errors.expiry && <span className="ck-err">{errors.expiry}</span>}
                  </div>
                  <div className={`ck-field ${errors.cvv ? "bad" : ""}`}>
                    <label htmlFor="cvv">CVV</label>
                    <input
                      id="cvv"
                      type="password"
                      inputMode="numeric"
                      maxLength={3}
                      value={card.cvv}
                      onChange={(e) => setCard((c) => ({ ...c, cvv: e.target.value.replace(/\D/g, "") }))}
                    />
                    {errors.cvv && <span className="ck-err">{errors.cvv}</span>}
                  </div>
                </div>
              )}

              {pay === "cod" && <p style={{ color: "#666", margin: 0 }}>Pay in cash when your order arrives.</p>}
            </div>

            <p className="ct-note" style={{ textAlign: "left", marginTop: 16 }}>
              Demo checkout: no real payment is processed.
            </p>
          </div>
        </div>

        <aside className="ck-box ck-summary">
          <h3>Order Summary</h3>

          {cart.map((item) => (
            <div className="ck-item" key={item.id}>
              <img src={item.image || item.images?.[0]} alt="" loading="lazy" decoding="async" />
              <div>
                {item.name}
                <small>Qty {item.qty}{item.shade ? ` · ${item.shade}` : ""}</small>
              </div>
              <b>{formatPrice(parsePrice(item.price) * item.qty)}</b>
            </div>
          ))}

          <div className="ct-row" style={{ marginTop: 10 }}><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
          {discount > 0 && <div className="ct-row green"><span>Discount ({promo?.code})</span><span>−{formatPrice(discount)}</span></div>}
          {promo?.type === "gift" && <div className="ct-row green"><span>🎁 {promo.label}</span><span>FREE</span></div>}
          <div className="ct-row"><span>Shipping</span><span>{shipping === 0 ? "FREE" : formatPrice(shipping)}</span></div>
          <div className="ct-row total"><span>Total</span><span>{formatPrice(total)}</span></div>

          <button type="submit" className="btn-dark" disabled={processing}>
            {processing ? "PLACING ORDER..." : `PLACE ORDER · ${formatPrice(total)}`}
          </button>
        </aside>
      </form>
    </section>
  );
}

export default Checkout;