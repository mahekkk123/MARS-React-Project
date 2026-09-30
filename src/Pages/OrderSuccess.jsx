import { Link, useParams } from "react-router-dom";
import { useShop, formatPrice, parsePrice } from "../context/ShopContext";

function OrderSuccess() {
  const { orderId } = useParams();
  const { orders } = useShop();
  const order = orders.find((o) => o.id === orderId);

  if (!order) {
    return (
      <div className="page-wrap empty-state">
        <h2>Order not found</h2>
        <Link to="/shop" className="btn-dark">CONTINUE SHOPPING</Link>
      </div>
    );
  }

  return (
    <section className="page-wrap">
      <div className="os">
        <div className="os-tick">✓</div>
        <h1>Thank you for your order!</h1>
        <p>Order <b>{order.id}</b> is confirmed. A confirmation has been sent to {order.address.email}.</p>

        <div className="os-card">
          {order.items.map((i) => (
            <div className="ck-item" key={i.id}>
              <img src={i.image || i.images?.[0]} alt="" />
              <div>{i.name}<small>Qty {i.qty}</small></div>
              <b>{formatPrice(parsePrice(i.price) * i.qty)}</b>
            </div>
          ))}
          <div className="ct-row total"><span>Total paid</span><span>{formatPrice(order.total)}</span></div>
          <p style={{ color: "#666", margin: "14px 0 0", fontSize: 15, lineHeight: 1.6 }}>
            <b>Payment:</b> {order.paymentMethod}<br />
            <b>Delivering to:</b> {order.address.name}, {order.address.address}, {order.address.city}, {order.address.state} {order.address.pincode}
          </p>
        </div>

        <div className="os-actions">
          <Link to="/profile?tab=orders" className="btn-light">VIEW MY ORDERS</Link>
          <Link to="/shop" className="btn-dark">CONTINUE SHOPPING</Link>
        </div>
      </div>
    </section>
  );
}

export default OrderSuccess;