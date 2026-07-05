import React from "react";
import ProductRating from "../product/ProductRating";
import { formatDate } from "../../utils/formatDate";

export default function ReviewCard({ review }) {
  return (
    <div className="border-b border-line pb-5">
      <div className="flex items-center justify-between mb-1">
        <p className="font-body text-sm font-semibold">{review.author}</p>
        <span className="font-mono text-[11px] text-ink-soft">{formatDate(review.date)}</span>
      </div>
      <ProductRating rating={review.rating} />
      <p className="font-body text-sm text-ink-soft mt-2 leading-relaxed">{review.comment}</p>
    </div>
  );
}
