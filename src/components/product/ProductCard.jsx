import React from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { formatPrice } from "../../utils/formatPrice";
import { useCart } from "../../hooks/useCart";
import { useWishlist } from "../../hooks/useWishlist";
import ProductRating from "./ProductRating";

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const { toggle, isWishlisted } = useWishlist();
  const onSale = product.salePrice != null;
  const wishlisted = isWishlisted(product.id);

  return (
    <div className="group relative">
      <div className="relative overflow-hidden bg-paper-alt dark:bg-dark-surface">
        <Link to={`/product/${product.slug}`} aria-label={`View ${product.name}`}>
          <img
            src={product.images?.[0]}
            alt={product.name}
            className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </Link>

        {onSale && (
          <span className="absolute top-3 left-3 font-mono text-[10px] tracking-wide px-2 py-1 text-white bg-clay">SALE</span>
        )}
        {product.isNew && !onSale && (
          <span className="absolute top-3 left-3 font-mono text-[10px] tracking-wide px-2 py-1 text-white bg-cobalt">NEW</span>
        )}

        <button
          onClick={() => toggle(product)}
          className="absolute top-3 right-3 rounded-full p-2 bg-white/85 backdrop-blur focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt"
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart size={15} fill={wishlisted ? "#C1502E" : "none"} color={wishlisted ? "#C1502E" : "#17150F"} />
        </button>

        <div className="hidden md:block absolute top-3 right-12 bg-white border border-line px-3 py-2 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
          <p className="font-mono text-[10px] text-ink-soft leading-tight">{product.fabric}</p>
          <p className="font-mono text-[10px] leading-tight mt-0.5">{product.colorway}</p>
        </div>

        <button
          onClick={() => addItem(product, product.sizes[Math.floor(product.sizes.length / 2)])}
          className="absolute inset-x-3 bottom-3 translate-y-14 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-ink text-white text-[12px] font-body tracking-wide py-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt"
        >
          Quick add
        </button>
      </div>

      <div className="pt-3">
        <Link to={`/product/${product.slug}`} className="font-body text-[14px] leading-snug hover:underline">
          {product.name}
        </Link>
        <div className="mt-1">
          <ProductRating rating={product.rating} reviewCount={product.reviewCount} />
        </div>
        <div className="flex items-center gap-2 mt-1">
          {onSale ? (
            <>
              <span className="font-mono text-[13px] text-clay">{formatPrice(product.salePrice)}</span>
              <span className="font-mono text-[12px] text-ink-soft line-through">{formatPrice(product.price)}</span>
            </>
          ) : (
            <span className="font-mono text-[13px]">{formatPrice(product.price)}</span>
          )}
        </div>
      </div>
    </div>
  );
}
