import React, { useEffect, useState } from "react";
import { productService } from "../../services/productService";
import ProductCard from "../product/ProductCard";
import Loader from "../common/Loader";

export default function TrendingProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    productService.getProducts({ sort: "rating" }).then((data) => {
      setProducts(data.slice(0, 4));
      setLoading(false);
    });
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 border-t border-line">
      <h2 className="font-display text-2xl md:text-3xl font-semibold mb-8">Trending now</h2>
      {loading ? (
        <Loader label="Loading trending pieces" />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
          {products.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </section>
  );
}
