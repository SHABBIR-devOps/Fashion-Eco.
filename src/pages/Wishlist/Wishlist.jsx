import React from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "../../hooks/useWishlist";
import WishlistCard from "../../components/wishlist/WishlistCard";
import EmptyState from "../../components/common/EmptyState";
import Button from "../../components/common/Button";
import { Heart } from "lucide-react";

export default function Wishlist() {
  const { items } = useWishlist();

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-20">
        <EmptyState
          icon={<Heart size={30} />}
          title="Nothing saved yet."
          subtitle="Tap the heart on any piece to keep it here for later."
          action={<Link to="/shop"><Button>Browse pieces</Button></Link>}
        />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-8 py-10">
      <h1 className="font-display text-3xl font-semibold mb-8">Your wishlist</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {items.map((p) => <WishlistCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
