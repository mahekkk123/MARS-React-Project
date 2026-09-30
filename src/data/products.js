const products = [
  {
    id: 1,
    name: "MARS Foundation",
    category: "Face",
    description: "Natural Finish Foundation",
    price: 499,
    oldPrice: 599,
    rating: 4.8,
    badge: "BESTSELLER",
    images: [
      "/images/products/foundation.jpg",
      "/images/products/foundation-1.jpg",
      "/images/products/foundation-2.jpg",
    ],
  },
  {
    id: 2,
    name: "MARS Lipstick",
    category: "Lips",
    description: "Long Lasting Matte Lipstick",
    price: 299,
    oldPrice: 399,
    rating: 4.7,
    badge: "POPULAR",
    images: [
      "/images/products/lipstick.jpg",
      "/images/products/lipstick-2.jpg",
      "/images/products/lipstick-3.jpg",
    ],
  },
  {
    id: 3,
    name: "MARS Mascara",
    category: "Eyes",
    description: "Volume & Length Mascara",
    price: 249,
    oldPrice: 299,
    rating: 4.6,
    images: ["/images/products/mascara.jpg", "/images/products/mascara-2.jpg"],
  },
  {
    id: 4,
    name: "MARS Eyeshadow",
    category: "Eyes",
    description: "Everyday Eyeshadow Palette",
    price: 449,
    oldPrice: 549,
    rating: 4.8,
    badge: "NEW",
    images: [
      "/images/products/eyeshadow.jpg",
      "/images/products/eyeshadow-2.jpg",
      "/images/products/eyeshadow-3.jpg",
    ],
  },
  {
    id: 5,
    name: "MARS Primer",
    category: "Face",
    description: "Smooth & Hydrating Face Primer",
    price: 349,
    oldPrice: 449,
    rating: 4.5,
    images: ["/images/products/primer.jpg", "/images/products/primer-1.jpg"],
  },
  {
    id: 6,
    name: "MARS Face Essentials",
    category: "Face",
    description: "Complete Everyday Face Essentials",
    price: 599,
    oldPrice: 699,
    rating: 4.7,
    badge: "TRENDING",
    images: [
      "/images/products/allproduct.jpg",
      "/images/products/allproduct-2.jpg",
    ],
  },
  {
    id: 7,
    name: "MARS Glow Foundation",
    category: "Face",
    description: "Lightweight Glowing Foundation",
    price: 549,
    oldPrice: 649,
    rating: 4.6,
    images: [
      "/images/products/foundation-1.jpg",
      "/images/products/foundation-2.jpg",
    ],
  },
  {
    id: 8,
    name: "MARS Classic Lipstick",
    category: "Lips",
    description: "Rich Colour Cream Lipstick",
    price: 279,
    oldPrice: 349,
    rating: 4.5,
    images: [
      "/images/products/lipstick-2.jpg",
      "/images/products/lipstick-3.jpg",
    ],
  },
  {
    id: 9,
    name: "MARS Eye Shadow Collection",
    category: "Eyes",
    description: "Multi Shade Eye Makeup Palette",
    price: 499,
    oldPrice: 599,
    rating: 4.8,
    images: [
      "/images/products/eyeshadow-2.jpg",
      "/images/products/eyeshadow-3.jpg",
      "/images/products/eyeshadow.jpg",
    ],
  },
  {
    id: 10,
    name: "MARS Everyday Mascara",
    category: "Eyes",
    description: "Defined Lashes With Volume",
    price: 229,
    oldPrice: 279,
    rating: 4.4,
    images: ["/images/products/mascara-2.jpg", "/images/products/mascara.jpg"],
  },
  {
    id: 11,
    name: "MARS Perfecting Primer",
    category: "Face",
    description: "Smooth Base Makeup Primer",
    price: 399,
    oldPrice: 499,
    rating: 4.6,
    images: ["/images/products/primer-1.jpg", "/images/products/primer.jpg"],
  },
  {
    id: 12,
    name: "MARS Lip Collection",
    category: "Lips",
    description: "Beautiful Everyday Lip Colours",
    price: 499,
    oldPrice: 599,
    rating: 4.7,
    badge: "BESTSELLER",
    images: [
      "/images/products/lipstick-3.jpg",
      "/images/products/lipstick.jpg",
      "/images/products/lipstick-2.jpg",

        {
    id: 13,
    name: "MARS Lip Liner",
    category: "Lips",
    description: "Smudge-proof Lip Liner Pencil",
    price: 199,
    oldPrice: 249,
    rating: 4.6,
    images: ["/images/products/lipstick-2.jpg", "/images/products/lipstick.jpg"],
  },
  {
    id: 14,
    name: "MARS Makeup Brush Set",
    category: "Tools",
    description: "Soft Bristle 5-Piece Brush Set",
    price: 599,
    oldPrice: 799,
    rating: 4.7,
    images: ["/images/products/allproduct.jpg"],
  },
  {
    id: 15,
    name: "MARS Beauty Sponge",
    category: "Tools",
    description: "Blend-Perfect Makeup Sponge",
    price: 149,
    oldPrice: 199,
    rating: 4.5,
    images: ["/images/products/allproduct-2.jpg"],
  },
  {
    id: 16,
    name: "MARS Blending Brush",
    category: "Tools",
    description: "Dense Foundation Blending Brush",
    price: 249,
    oldPrice: 299,
    rating: 4.6,
    images: ["/images/products/primer.jpg"],
  },
  {
    id: 17,
    name: "MARS Eyelash Curler",
    category: "Tools",
    description: "Lift & Curl Lash Curler",
    price: 179,
    oldPrice: 229,
    rating: 4.4,
    images: ["/images/products/mascara.jpg"],
  },
    ],
  },
];

/* ---------- extra fields the new UI needs ---------- */

const shadePalette = ["#b97a66", "#9a5446", "#7a3f36", "#c48a7a", "#5e2c2c"];

const enriched = products.map((p) => ({
  ...p,
  image: p.images[0],
  reviews: 300 + ((p.id * 137) % 700),
  shades: shadePalette.slice(0, 3),
  moreShades: 5,
  bestseller: true,
}));

export const categories = [
  { name: "Lips", image: "/images/categories/lips.jpg" },
  { name: "Face", image: "/images/categories/face.jpg" },
  { name: "Eyes", image: "/images/categories/eyes.jpg" },
  { name: "Skincare", image: "/images/categories/skincare.jpg" },
];

export const getProductById = (id) =>
  enriched.find((p) => String(p.id) === String(id));

export const getProductsByCategory = (name) =>
  enriched.filter((p) => p.category.toLowerCase() === name.toLowerCase());

export const searchProducts = (query) => {
  const q = query.trim().toLowerCase();
  if (!q) return enriched;
  return enriched.filter((p) =>
    `${p.name} ${p.description} ${p.category}`.toLowerCase().includes(q)
  );
};

export default enriched;