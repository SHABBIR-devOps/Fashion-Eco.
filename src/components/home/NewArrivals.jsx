import React, { useEffect, useState } from "react";
import { productService } from "../../services/productService";
import ProductCard from "../product/ProductCard";
import Loader from "../common/Loader";
import { Link } from "react-router-dom";

export default function NewArrivals() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    productService.getNewArrivals().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 border-t border-line">
      <div className="flex items-end justify-between mb-8">
        <h2 className="font-display text-2xl md:text-3xl font-semibold">New arrivals</h2>
        <Link to="/shop" className="font-mono text-[11px] tracking-widest underline text-ink-soft hover:text-ink">VIEW ALL</Link>
      </div>
      {loading ? (
        <Loader label="Loading new arrivals" />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
          {products.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </section>
  );
}
