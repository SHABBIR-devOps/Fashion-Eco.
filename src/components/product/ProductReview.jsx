import React, { useEffect, useState } from "react";
import { reviewService } from "../../services/reviewService";
import ReviewCard from "../review/ReviewCard";
import ReviewForm from "../review/ReviewForm";
import Loader from "../common/Loader";

export default function ProductReview({ productId }) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    reviewService.getReviews(productId).then((data) => {
      setReviews(data);
      setLoading(false);
    });
  }, [productId]);

  function handleAdded(review) {
    setReviews((prev) => [review, ...prev]);
  }

  return (
    <div>
      <h3 className="font-display text-xl font-semibold mb-6">Reviews {reviews.length > 0 && `(${reviews.length})`}</h3>
      {loading ? (
        <Loader label="Loading reviews" />
      ) : (
        <div className="space-y-6 mb-10">
          {reviews.length === 0 && <p className="text-sm text-ink-soft">No reviews yet — be the first to write one.</p>}
          {reviews.map((r) => (
            <ReviewCard key={r.id} review={r} />
          ))}
        </div>
      )}
      <ReviewForm productId={productId} onAdded={handleAdded} />
    </div>
  );
}
