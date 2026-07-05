export const APP_NAME = import.meta.env.VITE_APP_NAME || "FORME";
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

export const SIZES_APPAREL = ["XS", "S", "M", "L", "XL", "XXL"];
export const SIZES_PANTS = ["28", "30", "32", "34", "36", "38"];

export const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
  { value: "newest", label: "Newest" },
];

export const ORDER_STATUSES = ["Processing", "Shipped", "Out for delivery", "Delivered", "Cancelled"];

export const PAYMENT_METHODS = [
  { id: "card", label: "Credit / Debit Card" },
  { id: "mobile", label: "Mobile Banking (bKash/Nagad)" },
  { id: "cod", label: "Cash on Delivery" },
];
