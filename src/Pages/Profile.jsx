import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useShop, formatPrice } from "../context/ShopContext";

const TABS = [
  ["overview", "Overview"],
  ["orders", "My Orders"],
  ["wishlist", "Wishlist"],
  ["addresses", "Addresses"],
  ["settings", "Settings"],
];

function OrderCard({ order }) {
  return (
    <div className="ord">
      <div className="ord-head">
        <div>
          <b>{order.id}</b><br />
          {new Date(order.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
        </div>
        <span className="ord-status">{order.status}</span>
      </div>
      <div className="ord-imgs">
        {order.items.map((i) => (
          <img key={i.id} src={i.image || i.images?.[0]} alt={i.name} title={`${i.name} × ${i.qty}`} />
        ))}
      </div>
      <div className="ord-foot">
        <span>{order.items.reduce((s, i) => s + i.qty, 0)} items · {order.paymentMethod}</span>
        <b style={{ color: "#111" }}>{formatPrice(order.total)}</b>
      </div>
    </div>
  );
}

function Profile() {
  const [params, setParams] = useSearchParams();
  const tab = params.get("tab") || "overview";
  const go = (t) => setParams({ tab: t });

  const {
    user, updateUser, orders, wishlist, cartCount,
    addresses, addAddress, removeAddress,
  } = useShop();

  const [settings, setSettings] = useState({ name: user.name, email: user.email, phone: user.phone || "" });
  const [saved, setSaved] = useState(false);
  const [addr, setAddr] = useState({ name: "", phone: "", email: "", address: "", city: "", state: "", pincode: "" });

  const saveSettings = (e) => {
    e.preventDefault();
    updateUser(settings);
    setSaved(true);
    setTimeout(() => setSaved(false), 1800);
  };

  const submitAddress = (e) => {
    e.preventDefault();
    if (!addr.name || !addr.address || !addr.city || !addr.pincode) return;
    addAddress(addr);
    setAddr({ name: "", phone: "", email: "", address: "", city: "", state: "", pincode: "" });
  };

  const resetData = () => {
    if (!window.confirm("This clears your cart, wishlist, orders and addresses. Continue?")) return;
    ["mars_cart", "mars_wishlist", "mars_orders", "mars_addresses", "mars_user", "mars_promo"].forEach((k) =>
      localStorage.removeItem(k)
    );
    window.location.href = "/";
  };

  const addrField = (key, label, full) => (
    <div className={`ck-field ${full ? "full" : ""}`}>
      <label htmlFor={`a-${key}`}>{label}</label>
      <input id={`a-${key}`} value={addr[key]} onChange={(e) => setAddr((a) => ({ ...a, [key]: e.target.value }))} />
    </div>
  );

  return (
    <section className="page-wrap">
      <p className="page-eyebrow">MY ACCOUNT</p>
      <h1 className="page-title">Hello, {user.name.split(" ")[0]}</h1>

      <div className="pf">
        <aside className="pf-side">
          <div className="pf-avatar">{user.name.charAt(0).toUpperCase()}</div>
          <h3>{user.name}</h3>
          <small>{user.email}</small>

          <nav className="pf-nav">
            {TABS.map(([key, label]) => (
              <button key={key} type="button" className={tab === key ? "active" : ""} onClick={() => go(key)}>
                {label}
              </button>
            ))}
          </nav>
        </aside>

        <div>
          {tab === "overview" && (
            <>
              <h2 className="pf-h">Overview</h2>
              <div className="pf-stats">
                <div className="pf-stat"><b>{orders.length}</b>Orders</div>
                <div className="pf-stat"><b>{wishlist.length}</b>Wishlist items</div>
                <div className="pf-stat"><b>{cartCount}</b>In your bag</div>
              </div>

              <h2 className="pf-h">Recent order</h2>
              {orders.length > 0 ? (
                <OrderCard order={orders[0]} />
              ) : (
                <p style={{ color: "#666", marginBottom: 18 }}>You haven't placed any orders yet.</p>
              )}
              <Link to="/shop" className="btn-dark">CONTINUE SHOPPING</Link>
            </>
          )}

          {tab === "orders" && (
            <>
              <h2 className="pf-h">My Orders</h2>
              {orders.length === 0 ? (
                <div className="empty-state" style={{ padding: "40px 0" }}>
                  <p>No orders yet.</p>
                  <Link to="/shop" className="btn-dark">START SHOPPING</Link>
                </div>
              ) : (
                orders.map((o) => <OrderCard key={o.id} order={o} />)
              )}
            </>
          )}

          {tab === "wishlist" && (
            <>
              <h2 className="pf-h">My Wishlist</h2>
              {wishlist.length === 0 ? (
                <p style={{ color: "#666" }}>Nothing saved yet. Tap the heart on any product.</p>
              ) : (
                <div className="best-grid" style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
                  {wishlist.map((p) => <ProductCard key={p.id} product={p} />)}
                </div>
              )}
            </>
          )}

          {tab === "addresses" && (
            <>
              <h2 className="pf-h">Saved Addresses</h2>
              {addresses.map((a) => (
                <div className="addr" key={a.id}>
                  <div>
                    <b>{a.name}</b><br />
                    {a.address}, {a.city}, {a.state} {a.pincode}<br />
                    {a.phone}
                  </div>
                  <button type="button" className="ct-remove" onClick={() => removeAddress(a.id)}>Delete</button>
                </div>
              ))}

              <form onSubmit={submitAddress} className="ck-box" style={{ marginTop: 20 }}>
                <h3>Add new address</h3>
                <div className="ck-grid">
                  {addrField("name", "Full name")}
                  {addrField("phone", "Mobile number")}
                  {addrField("email", "Email", true)}
                  {addrField("address", "Address", true)}
                  {addrField("city", "City")}
                  {addrField("state", "State")}
                  {addrField("pincode", "Pincode")}
                </div>
                <button type="submit" className="btn-dark" style={{ marginTop: 18 }}>SAVE ADDRESS</button>
              </form>
            </>
          )}

          {tab === "settings" && (
            <>
              <h2 className="pf-h">Account Settings</h2>
              <form onSubmit={saveSettings} className="ck-box">
                <div className="ck-grid">
                  <div className="ck-field full">
                    <label htmlFor="s-name">Name</label>
                    <input id="s-name" value={settings.name} onChange={(e) => setSettings((s) => ({ ...s, name: e.target.value }))} />
                  </div>
                  <div className="ck-field">
                    <label htmlFor="s-email">Email</label>
                    <input id="s-email" type="email" value={settings.email} onChange={(e) => setSettings((s) => ({ ...s, email: e.target.value }))} />
                  </div>
                  <div className="ck-field">
                    <label htmlFor="s-phone">Phone</label>
                    <input id="s-phone" value={settings.phone} onChange={(e) => setSettings((s) => ({ ...s, phone: e.target.value }))} />
                  </div>
                </div>
                <button type="submit" className="btn-dark" style={{ marginTop: 18 }}>
                  {saved ? "SAVED ✓" : "SAVE CHANGES"}
                </button>
              </form>

              <button type="button" className="btn-light" onClick={resetData}>RESET ALL DEMO DATA</button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Profile;