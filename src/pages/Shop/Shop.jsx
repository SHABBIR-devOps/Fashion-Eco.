import React, { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Sidebar from "../../components/layout/Sidebar";
import ProductGrid from "../../components/product/ProductGrid";
import Select from "../../components/common/Select";
import Loader from "../../components/common/Loader";
import { useProducts } from "../../hooks/useProducts";
import { SORT_OPTIONS } from "../../utils/constants";

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filters = useMemo(
    () => ({
      category: searchParams.get("category") || "all",
      brand: searchParams.get("brand") || undefined,
      query: searchParams.get("q") || "",
      sort: searchParams.get("sort") || "featured",
    }),
    [searchParams]
  );

  const { products, status } = useProducts(filters);

  function updateFilters(patch) {
    const next = { ...filters, ...patch };
    const params = {};
    if (next.category && next.category !== "all") params.category = next.category;
    if (next.brand) params.brand = next.brand;
    if (next.query) params.q = next.query;
    if (next.sort && next.sort !== "featured") params.sort = next.sort;
    setSearchParams(params);
  }

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-8 py-10">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h1 className="font-display text-3xl font-semibold">Shop all</h1>
          {filters.query && <p className="font-mono text-xs text-ink-soft mt-1">Results for &ldquo;{filters.query}&rdquo;</p>}
        </div>
        <div className="w-48">
          <Select
            options={SORT_OPTIONS}
            value={filters.sort}
            onChange={(e) => updateFilters({ sort: e.target.value })}
          />
        </div>
      </div>
      <div className="flex gap-10">
        <Sidebar filters={filters} onChange={updateFilters} />
        <div className="flex-1">
          {status === "loading" ? <Loader label="Loading products" /> : <ProductGrid products={products} />}
        </div>
      </div>
    </div>
  );
}
