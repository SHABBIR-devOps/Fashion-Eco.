import React, { useState } from "react";
import { Star } from "lucide-react";
import { reviewService } from "../../services/reviewService";
import Button from "../common/Button";

export default function ReviewForm({ productId, onAdded }) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [author, setAuthor] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!comment.trim()) return;
    setSubmitting(true);
    const review = await reviewService.addReview(productId, { author: author || "Anonymous", rating, comment });
    onAdded(review);
    setComment("");
    setRating(5);
    setSubmitting(false);
  }

  return (
    <form onSubmit={handleSubmit} className="border border-line p-6">
      <p className="font-mono text-[11px] tracking-widest text-ink-soft mb-4">WRITE A REVIEW</p>
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <button key={i} type="button" onClick={() => setRating(i + 1)} aria-label={`Rate ${i + 1} stars`}>
            <Star size={20} fill={i < rating ? "#17150F" : "none"} color="#17150F" />
          </button>
        ))}
      </div>
      <input
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Your name (optional)"
        className="w-full bg-transparent border-b border-line text-sm font-body py-2 mb-4 outline-none placeholder:text-ink-soft"
      />
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="What did you think of the fit and fabric?"
        rows={3}
        required
        className="w-full bg-transparent border-b border-line text-sm font-body py-2 mb-4 outline-none placeholder:text-ink-soft resize-none"
      />
      <Button type="submit" loading={submitting}>Submit review</Button>
    </form>
  );
}
