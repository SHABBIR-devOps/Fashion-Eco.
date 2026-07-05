import React, { useState } from "react";
import { formatPrice } from "../../utils/formatPrice";
import Button from "../common/Button";
import CouponBox from "./CouponBox";
import { useNavigate } from "react-router-dom";

export default function CartSummary({ subtotal, showCoupon = true, ctaLabel = "Checkout", onCta }) {
  const [discount, setDiscount] = useState(0);
  const navigate = useNavigate();
  const shipping = subtotal > 150 || subtotal === 0 ? 0 : 12;
  const discounted = subtotal * (1 - discount);
  const total = discounted + shipping;

  return (
    <div className="border border-line p-6">
      <h3 className="font-display text-lg font-semibold mb-4">Order summary</h3>
      <div className="space-y-2 font-body text-sm">
        <div className="flex justify-between">
          <span className="text-ink-soft">Subtotal</span>
          <span className="font-mono">{formatPrice(subtotal)}</span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between text-cobalt">
            <span>Discount</span>
            <span className="font-mono">-{formatPrice(subtotal * discount)}</span>
          </div>
        )}
        <div className="flex justify-between">
          <span className="text-ink-soft">Shipping</span>
          <span className="font-mono">{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
        </div>
        <div className="flex justify-between pt-2 border-t border-line font-semibold">
          <span>Total</span>
          <span className="font-mono">{formatPrice(total)}</span>
        </div>
      </div>
      {showCoupon && <CouponBox onApply={setDiscount} />}
      <Button className="w-full mt-6" variant="primary" size="lg" onClick={onCta || (() => navigate("/checkout"))}>
        {ctaLabel}
      </Button>
      <p className="font-mono text-[10px] text-ink-soft mt-3">Free shipping over $150 · Free returns within 30 days</p>
    </div>
  );
}
