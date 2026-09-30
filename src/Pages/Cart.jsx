import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useShop, formatPrice, parsePrice } from "../context/ShopContext";

function Cart() {
  const navigate = useNavigate();
  const {
    cart, subtotal, discount, shipping, total, promo,
    updateQty, removeFromCart, applyPromo, removePromo,
  } = useShop();

  const [code, setCode] = useState("");
  const [msg, setMsg] = useState(null);

  const handleApply = () => {
    if (!code.trim()) return;
    const r = applyPromo(code);
    setMsg({ ok: r.ok, text: r.message });
    if (r.ok) setCode("");
  };

  if (cart.length === 0) {
    return (
      <div className="page-wrap empty-state">
        <h2>Your bag is empty</h2>
        <p>Looks like you haven't added anything yet.</p>
        <Link to="/shop" className="btn-dark">START SHOPPING</Link>
      </div>
    );
  }

  return (
    <section className="page-wrap">
      <p className="page-eyebrow">YOUR BAG</p>
      <h1 className="page-title">Shopping Cart ({cart.length})</h1>

      <div className="ct">
        <div>
          {cart.map((item) => {
            const img = item.image || item.images?.[0];
            return (
              <div className="ct-item" key={item.id}>
                <Link to={`/product/${item.id}`}>
                  <img src={img} alt={item.name} loading="lazy" decoding="async" />
                </Link>

                <div>
                  <h3><Link to={`/product/${item.id}`}>{item.name}</Link></h3>
                  <p>
                    {item.description}
                    {item.shade ? ` · Shade: ${item.shade}` : ""}
                  </p>

                  <div className="qty">
                    <button type="button" onClick={() => updateQty(item.id, item.qty - 1)}>−</button>
                    <span>{item.qty}</span>
                    <button type="button" onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                  </div>

                  <button type="button" className="ct-remove" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>

                <div className="ct-line">{formatPrice(parsePrice(item.price) * item.qty)}</div>
              </div>
            );
          })}
        </div>

        <aside className="ct-summary">
          <h3>Order Summary</h3>

          <div className="ct-row"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
          {discount > 0 && (
            <div className="ct-row green"><span>Discount ({promo?.code})</span><span>−{formatPrice(discount)}</span></div>
          )}
          <div className="ct-row">
            <span>Shipping</span>
            <span>{shipping === 0 ? "FREE" : formatPrice(shipping)}</span>
          </div>

          <div className="ct-promo">
            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Promo code"
              aria-label="Promo code"
            />
            <button type="button" onClick={handleApply}>APPLY</button>
          </div>

          {msg && <p className={`ct-msg ${msg.ok ? "ok" : "err"}`}>{msg.text}</p>}

          {promo && (
            <p className="ct-msg ok">
              ✓ {promo.code}: {promo.label}{" "}
              <button type="button" className="ct-remove" style={{ display: "inline" }} onClick={removePromo}>
                remove
              </button>
            </p>
          )}

          <div className="ct-row total"><span>Total</span><span>{formatPrice(total)}</span></div>

          <button type="button" className="btn-dark" onClick={() => navigate("/checkout")}>
            PROCEED TO CHECKOUT
          </button>

          <p className="ct-note">
            {shipping === 0 ? "You get free shipping!" : `Add ${formatPrice(499 - (subtotal - discount))} more for free shipping`}
          </p>
        </aside>
      </div>
    </section>
  );
}

export default Cart;