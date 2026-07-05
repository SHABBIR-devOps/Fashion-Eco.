import React from "react";
import { Link } from "react-router-dom";
import { X, ShoppingBag } from "lucide-react";
import { formatPrice } from "../../utils/formatPrice";
import { useWishlist } from "../../hooks/useWishlist";
import { useCart } from "../../hooks/useCart";

export default function WishlistCard({ product }) {
  const { remove } = useWishlist();
  const { addItem } = useCart();
  const onSale = product.salePrice != null;

  return (
    <div className="group relative border border-line p-4 flex flex-col">
      <button
        onClick={() => remove(product.id)}
        className="absolute top-3 right-3 p-1.5 bg-white rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt"
        aria-label={`Remove ${product.name} from wishlist`}
      >
        <X size={14} />
      </button>
      <Link to={`/product/${product.slug}`}>
        <img src={product.images?.[0]} alt={product.name} className="w-full aspect-[3/4] object-cover mb-4" />
      </Link>
      <p className="font-body text-sm mb-1">{product.name}</p>
      <div className="flex items-center gap-2 mb-4">
        {onSale ? (
          <>
            <span className="font-mono text-[13px] text-clay">{formatPrice(product.salePrice)}</span>
            <span className="font-mono text-[12px] text-ink-soft line-through">{formatPrice(product.price)}</span>
          </>
        ) : (
          <span className="font-mono text-[13px]">{formatPrice(product.price)}</span>
        )}
      </div>
      <button
        onClick={() => addItem(product, product.sizes[0])}
        className="mt-auto flex items-center justify-center gap-2 bg-ink text-white text-xs font-body tracking-wide py-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt"
      >
        <ShoppingBag size={13} /> Move to bag
      </button>
    </div>
  );
}
