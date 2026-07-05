import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useOrderStore } from "../../store/orderStore";
import { formatPrice } from "../../utils/formatPrice";
import { formatDate } from "../../utils/formatDate";
import Loader from "../../components/common/Loader";
import EmptyState from "../../components/common/EmptyState";
import { Package } from "lucide-react";

export default function Orders() {
  const { orders, status, fetchOrders } = useOrderStore();

  useEffect(() => {
    fetchOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (status === "loading") return <Loader label="Loading orders" />;

  if (orders.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-5 md:px-8 py-20">
        <EmptyState icon={<Package size={30} />} title="No orders yet." subtitle="Once you place an order, it will show up here." />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-5 md:px-8 py-10">
      <h1 className="font-display text-3xl font-semibold mb-8">Your orders</h1>
      <div className="space-y-4">
        {orders.map((order) => (
          <Link key={order.id} to={`/tracking/${order.id}`} className="flex items-center justify-between border border-line p-5 hover:border-ink transition-colors">
            <div>
              <p className="font-body text-sm font-semibold">{order.id}</p>
              <p className="font-mono text-[11px] text-ink-soft mt-1">{formatDate(order.date)} · {order.items.length} item(s)</p>
            </div>
            <div className="text-right">
              <p className="font-mono text-sm">{formatPrice(order.total)}</p>
              <p className="font-mono text-[11px] text-cobalt mt-1">{order.status}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
