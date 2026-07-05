import React, { useEffect, useState } from "react";
import { productService } from "../../services/productService";
import ProductCard from "./ProductCard";

export default function RelatedProducts({ product }) {
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (!product) return;
    productService.getRelatedProducts(product).then(setRelated);
  }, [product]);

  if (related.length === 0) return null;

  return (
    <section className="mt-20">
      <h3 className="font-display text-2xl font-semibold mb-6">You might also like</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
        {related.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
