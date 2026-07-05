import React from "react";
import ProductFilter from "../product/ProductFilter";

// Desktop-only filter rail used on Shop / Category pages.
export default function Sidebar({ filters, onChange }) {
  return (
    <aside className="hidden lg:block w-64 flex-shrink-0 pr-8 border-r border-line dark:border-dark-line">
      <ProductFilter filters={filters} onChange={onChange} />
    </aside>
  );
}
