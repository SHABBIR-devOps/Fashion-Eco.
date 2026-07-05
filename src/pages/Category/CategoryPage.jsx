import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/layout/Sidebar";
import ProductGrid from "../../components/product/ProductGrid";
import Loader from "../../components/common/Loader";
import { useProducts } from "../../hooks/useProducts";
import { CATEGORIES } from "../../data/mockData";
import { useProductStore } from "../../store/productStore";

export default function CategoryPage() {
  const { categoryId } = useParams();
  const category = CATEGORIES.find((c) => c.id === categoryId);
  const { products, status } = useProducts({ category: categoryId });
  const { setFilters, filters } = useProductStore();

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-8 py-10">
      <h1 className="font-display text-3xl font-semibold mb-1">{category?.name || "Category"}</h1>
      <p className="font-mono text-xs text-ink-soft mb-8">{products.length} pieces</p>
      <div className="flex gap-10">
        <Sidebar filters={{ ...filters, category: categoryId }} onChange={(patch) => setFilters(patch)} />
        <div className="flex-1">
          {status === "loading" ? <Loader label="Loading products" /> : <ProductGrid products={products} />}
        </div>
      </div>
    </div>
  );
}
