import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ShopContext = createContext(null);

/* ---------- helpers ---------- */

// Works whether price is 499, "499" or "₹499"
export const parsePrice = (price) => {
  if (typeof price === "number") return price;
  const n = parseFloat(String(price ?? "0").replace(/[^0-9.]/g, ""));
  return Number.isNaN(n) ? 0 : n;
};

export const formatPrice = (n) => `₹${Math.round(n).toLocaleString("en-IN")}`;

const load = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

const save = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage full or blocked, ignore */
  }
};

// Promo codes from your design
const PROMOS = {
  WELCOME2MARS: { type: "percent", value: 10, label: "10% off your first order" },
  LIPCRAYON: { type: "gift", label: "Free WSWB Lip Crayon added" },
  BLUSH: { type: "gift", label: "Free Face Blusher added" },
  SETTINGPOWDER: { type: "gift", label: "Free Setting Powder added" },
  HUEGEL: { type: "gift", label: "Free Hue Gel Eyeliner added" },
};

const DEFAULT_USER = {
  name: "Guest User",
  email: "guest@mars.com",
  phone: "",
};

/* ---------- provider ---------- */

export function ShopProvider({ children }) {
  const [cart, setCart] = useState(() => load("mars_cart", []));
  const [wishlist, setWishlist] = useState(() => load("mars_wishlist", []));
  const [orders, setOrders] = useState(() => load("mars_orders", []));
  const [addresses, setAddresses] = useState(() => load("mars_addresses", []));
  const [user, setUser] = useState(() => load("mars_user", DEFAULT_USER));
  const [promo, setPromo] = useState(() => load("mars_promo", null));

  useEffect(() => save("mars_cart", cart), [cart]);
  useEffect(() => save("mars_wishlist", wishlist), [wishlist]);
  useEffect(() => save("mars_orders", orders), [orders]);
  useEffect(() => save("mars_addresses", addresses), [addresses]);
  useEffect(() => save("mars_user", user), [user]);
  useEffect(() => save("mars_promo", promo), [promo]);

  /* ----- cart ----- */
  const addToCart = (product, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + qty } : i
        );
      }
      return [...prev, { ...product, qty }];
    });
  };

  const removeFromCart = (id) =>
    setCart((prev) => prev.filter((i) => i.id !== id));

  const updateQty = (id, qty) => {
    if (qty < 1) return removeFromCart(id);
    setCart((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)));
  };

  const clearCart = () => {
    setCart([]);
    setPromo(null);
  };

  const isInCart = (id) => cart.some((i) => i.id === id);

  /* ----- wishlist ----- */
  const toggleWishlist = (product) => {
    setWishlist((prev) =>
      prev.some((p) => p.id === product.id)
        ? prev.filter((p) => p.id !== product.id)
        : [...prev, product]
    );
  };

  const isWishlisted = (id) => wishlist.some((p) => p.id === id);

  /* ----- promo ----- */
  const applyPromo = (code) => {
    const key = code.trim().toUpperCase();
    const found = PROMOS[key];
    if (!found) return { ok: false, message: "Invalid promo code" };
    setPromo({ code: key, ...found });
    return { ok: true, message: found.label };
  };

  const removePromo = () => setPromo(null);

  /* ----- totals ----- */
  const cartCount = useMemo(
    () => cart.reduce((sum, i) => sum + i.qty, 0),
    [cart]
  );

  const subtotal = useMemo(
    () => cart.reduce((sum, i) => sum + parsePrice(i.price) * i.qty, 0),
    [cart]
  );

  const discount = useMemo(() => {
    if (promo?.type === "percent") return (subtotal * promo.value) / 100;
    return 0;
  }, [promo, subtotal]);

  const shipping = subtotal === 0 || subtotal - discount >= 499 ? 0 : 49;
  const total = Math.max(subtotal - discount + shipping, 0);

  /* ----- orders ----- */
  const placeOrder = ({ address, paymentMethod }) => {
    const order = {
      id: "MARS" + Date.now().toString().slice(-8),
      date: new Date().toISOString(),
      items: cart,
      subtotal,
      discount,
      shipping,
      total,
      promo: promo?.code || null,
      address,
      paymentMethod,
      status: "Confirmed",
    };
    setOrders((prev) => [order, ...prev]);
    setCart([]);
    setPromo(null);
    return order;
  };

  /* ----- addresses ----- */
  const addAddress = (address) =>
    setAddresses((prev) => [...prev, { id: Date.now(), ...address }]);

  const removeAddress = (id) =>
    setAddresses((prev) => prev.filter((a) => a.id !== id));

  const updateUser = (data) => setUser((prev) => ({ ...prev, ...data }));

  const value = {
    cart,
    cartCount,
    subtotal,
    discount,
    shipping,
    total,
    addToCart,
    removeFromCart,
    updateQty,
    clearCart,
    isInCart,
    wishlist,
    wishlistCount: wishlist.length,
    toggleWishlist,
    isWishlisted,
    promo,
    applyPromo,
    removePromo,
    orders,
    placeOrder,
    addresses,
    addAddress,
    removeAddress,
    user,
    updateUser,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error("useShop must be used inside <ShopProvider>");
  return ctx;
}