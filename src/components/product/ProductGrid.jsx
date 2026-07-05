import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Pagination from "../common/Pagination";
import EmptyState from "../common/EmptyState";
import { SearchX } from "lucide-react";

export default function ProductGrid({ products, pageSize = 8 }) {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(products.length / pageSize));
  const visible = products.slice((page - 1) * pageSize, page * pageSize);

  if (products.length === 0) {
    return (
      <EmptyState
        icon={<SearchX size={32} />}
        title="No pieces match yet."
        subtitle="Try a different category, price range, or search term."
      />
    );
  }

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-10">
        {visible.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      <Pagination page={page} totalPages={totalPages} onChange={setPage} />
    </div>
  );
}
