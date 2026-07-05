import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import CartItem from "../../components/cart/CartItem";
import CartSummary from "../../components/cart/CartSummary";
import EmptyState from "../../components/common/EmptyState";
import Button from "../../components/common/Button";
import { ShoppingBag } from "lucide-react";

export default function Cart() {
  const { items, subtotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-20">
        <EmptyState
          icon={<ShoppingBag size={30} />}
          title="Your bag is empty."
          subtitle="Pieces you add will collect here, ready to check out whenever you are."
          action={
            <Link to="/shop">
              <Button>Continue shopping</Button>
            </Link>
          }
        />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-8 py-10">
      <h1 className="font-display text-3xl font-semibold mb-8">Your bag</h1>
      <div className="grid md:grid-cols-[1.6fr_1fr] gap-12">
        <ul className="divide-y divide-line">
          {items.map((it) => (
            <CartItem key={`${it.id}-${it.size}`} item={it} />
          ))}
        </ul>
        <div>
          <CartSummary subtotal={subtotal} />
        </div>
      </div>
    </div>
  );
}
