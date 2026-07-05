import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Heart, ShoppingBag } from "lucide-react";
import { productService } from "../../services/productService";
import { formatPrice } from "../../utils/formatPrice";
import { useCart } from "../../hooks/useCart";
import { useWishlist } from "../../hooks/useWishlist";
import ProductGallery from "../../components/product/ProductGallery";
import ProductVariants from "../../components/product/ProductVariants";
import ProductRating from "../../components/product/ProductRating";
import SizeGuide from "../../components/product/SizeGuide";
import ProductReview from "../../components/product/ProductReview";
import RelatedProducts from "../../components/product/RelatedProducts";
import Loader from "../../components/common/Loader";
import Button from "../../components/common/Button";

export default function ProductDetails() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [size, setSize] = useState(null);
  const [color, setColor] = useState(null);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const { addItem } = useCart();
  const { toggle, isWishlisted } = useWishlist();

  useEffect(() => {
    setProduct(null);
    productService.getProductBySlug(slug).then((p) => {
      setProduct(p);
      setSize(p.sizes[0]);
      setColor(p.colors?.[0]);
    });
  }, [slug]);

  if (!product) return <Loader label="Loading product" />;

  const onSale = product.salePrice != null;
  const wishlisted = isWishlisted(product.id);

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-8 py-10">
      <div className="grid md:grid-cols-2 gap-12">
        <ProductGallery images={product.images} alt={product.name} />

        <div>
          <p className="font-mono text-[11px] tracking-widest text-ink-soft">{product.category.toUpperCase()}</p>
          <h1 className="font-display text-3xl font-semibold mt-2">{product.name}</h1>
          <div className="mt-3">
            <ProductRating rating={product.rating} reviewCount={product.reviewCount} />
          </div>
          <div className="flex items-center gap-2 mt-3">
            {onSale ? (
              <>
                <span className="font-mono text-lg text-clay">{formatPrice(product.salePrice)}</span>
                <span className="font-mono text-sm text-ink-soft line-through">{formatPrice(product.price)}</span>
              </>
            ) : (
              <span className="font-mono text-lg">{formatPrice(product.price)}</span>
            )}
          </div>
          <p className="font-body text-sm text-ink-soft mt-4 leading-relaxed">{product.description}</p>
          <p className="font-mono text-[11px] text-ink-soft mt-2">{product.fabric} · {product.colorway}</p>

          <div className="mt-8">
            <ProductVariants
              sizes={product.sizes}
              colors={product.colors}
              selectedSize={size}
              selectedColor={color}
              onSizeChange={setSize}
              onColorChange={setColor}
              onOpenSizeGuide={() => setSizeGuideOpen(true)}
            />
          </div>

          <div className="flex gap-3 mt-8">
            <Button className="flex-1" size="lg" onClick={() => addItem(product, size)}>
              <ShoppingBag size={16} /> Add to bag — {onSale ? formatPrice(product.salePrice) : formatPrice(product.price)}
            </Button>
            <button
              onClick={() => toggle(product)}
              className="w-12 h-12 flex items-center justify-center border border-line focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt"
              aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
            >
              <Heart size={17} fill={wishlisted ? "#C1502E" : "none"} color={wishlisted ? "#C1502E" : "#17150F"} />
            </button>
          </div>
          <p className="font-mono text-[10px] text-ink-soft mt-3">Free shipping over $150 · Free returns within 30 days</p>
        </div>
      </div>

      <div className="mt-16 max-w-2xl">
        <ProductReview productId={product.id} />
      </div>

      <RelatedProducts product={product} />

      <SizeGuide open={sizeGuideOpen} onClose={() => setSizeGuideOpen(false)} />
    </div>
  );
}
