import { PRODUCTS } from "../data/mockData";
import { mockDelay } from "./api";

export const productService = {
  async getProducts({ category, brand, query, sizes, sort, minPrice, maxPrice } = {}) {
    let list = [...PRODUCTS];

    if (category && category !== "all") list = list.filter((p) => p.category === category);
    if (brand) list = list.filter((p) => p.brand === brand);
    if (query) list = list.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()));
    if (sizes && sizes.length) list = list.filter((p) => p.sizes.some((s) => sizes.includes(s)));
    if (minPrice != null) list = list.filter((p) => (p.salePrice ?? p.price) >= minPrice);
    if (maxPrice != null) list = list.filter((p) => (p.salePrice ?? p.price) <= maxPrice);

    switch (sort) {
      case "price-asc":
        list.sort((a, b) => (a.salePrice ?? a.price) - (b.salePrice ?? b.price));
        break;
      case "price-desc":
        list.sort((a, b) => (b.salePrice ?? b.price) - (a.salePrice ?? a.price));
        break;
      case "rating":
        list.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        list.sort((a, b) => Number(b.isNew) - Number(a.isNew));
        break;
      default:
        break;
    }

    return mockDelay(list);
  },

  async getProductBySlug(slug) {
    const product = PRODUCTS.find((p) => p.slug === slug);
    if (!product) throw new Error("Product not found.");
    return mockDelay(product);
  },

  async getRelatedProducts(product, limit = 4) {
    const related = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, limit);
    return mockDelay(related);
  },

  async getFlashSaleProducts() {
    return mockDelay(PRODUCTS.filter((p) => p.isFlashSale));
  },

  async getNewArrivals() {
    return mockDelay(PRODUCTS.filter((p) => p.isNew));
  },
};
