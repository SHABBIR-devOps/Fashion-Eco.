import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useOrderStore } from "../../store/orderStore";
import OrderTracker from "../../components/tracking/OrderTracker";
import { formatPrice } from "../../utils/formatPrice";
import Loader from "../../components/common/Loader";

export default function Tracking() {
  const { orderId } = useParams();
  const { activeOrder, status, fetchOrderById } = useOrderStore();

  useEffect(() => {
    fetchOrderById(orderId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderId]);

  if (status === "loading" || !activeOrder) return <Loader label="Loading order" />;

  return (
    <div className="max-w-3xl mx-auto px-5 md:px-8 py-10">
      <p className="font-mono text-[11px] tracking-widest text-ink-soft mb-2">ORDER {activeOrder.id}</p>
      <h1 className="font-display text-3xl font-semibold mb-8">Track your order</h1>

      <div className="grid md:grid-cols-[1.3fr_1fr] gap-12">
        <OrderTracker steps={activeOrder.tracking} />
        <div className="border border-line p-5 h-fit">
          <p className="font-mono text-[11px] tracking-widest text-ink-soft mb-3">ITEMS</p>
          <ul className="space-y-2 font-body text-sm mb-4">
            {activeOrder.items.map((it) => (
              <li key={it.id} className="flex justify-between">
                <span>{it.name} <span className="text-ink-soft font-mono text-xs">× {it.qty}</span></span>
                <span className="font-mono">{formatPrice(it.price * it.qty)}</span>
              </li>
            ))}
          </ul>
          <div className="pt-3 border-t border-line flex justify-between font-semibold text-sm">
            <span>Total</span>
            <span className="font-mono">{formatPrice(activeOrder.total)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
