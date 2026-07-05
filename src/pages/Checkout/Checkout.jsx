import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckoutStepper from "../../components/checkout/CheckoutStepper";
import ShippingAddress from "../../components/checkout/ShippingAddress";
import PaymentMethod from "../../components/checkout/PaymentMethod";
import OrderSummary from "../../components/checkout/OrderSummary";
import Button from "../../components/common/Button";
import { useCart } from "../../hooks/useCart";
import { useOrderStore } from "../../store/orderStore";
import { paymentService } from "../../services/paymentService";

const STEPS = ["Shipping", "Payment", "Review"];

export default function Checkout() {
  const [step, setStep] = useState(0);
  const [shipping, setShipping] = useState(null);
  const [payment, setPayment] = useState(null);
  const [placing, setPlacing] = useState(false);
  const { items, subtotal, clearCart } = useCart();
  const { placeOrder } = useOrderStore();
  const navigate = useNavigate();

  async function handlePlaceOrder() {
    setPlacing(true);
    await paymentService.confirmPayment({ method: payment.method });
    const order = await placeOrder({ items, shipping, payment, total: subtotal });
    clearCart();
    setPlacing(false);
    navigate(`/tracking/${order.id}`);
  }

  return (
    <div className="max-w-4xl mx-auto px-5 md:px-8 py-10">
      <h1 className="font-display text-3xl font-semibold text-center mb-8">Checkout</h1>
      <CheckoutStepper steps={STEPS} activeStep={step} />

      <div className="grid md:grid-cols-[1.4fr_1fr] gap-12">
        <div>
          {step === 0 && (
            <ShippingAddress
              defaultValues={shipping || {}}
              onSubmit={(data) => {
                setShipping(data);
                setStep(1);
              }}
            />
          )}
          {step === 1 && (
            <PaymentMethod
              onSubmit={(data) => {
                setPayment(data);
                setStep(2);
              }}
            />
          )}
          {step === 2 && (
            <div className="space-y-6">
              <div className="border border-line p-5 font-body text-sm">
                <p className="font-mono text-[11px] tracking-widest text-ink-soft mb-2">SHIP TO</p>
                <p>{shipping?.fullName}</p>
                <p className="text-ink-soft">{shipping?.address}, {shipping?.city} {shipping?.postalCode}</p>
              </div>
              <div className="border border-line p-5 font-body text-sm">
                <p className="font-mono text-[11px] tracking-widest text-ink-soft mb-2">PAYING WITH</p>
                <p className="capitalize">{payment?.method}</p>
              </div>
              <Button className="w-full" size="lg" loading={placing} onClick={handlePlaceOrder}>
                Place order
              </Button>
            </div>
          )}
        </div>
        <OrderSummary items={items} subtotal={subtotal} shipping={subtotal > 150 ? 0 : 12} />
      </div>
    </div>
  );
}
