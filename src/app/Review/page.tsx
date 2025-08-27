"use client";

import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sophie L.",
    date: "March 2025",
    rating: 5,
    comment:
      "Villa Mandalay was the most peaceful getaway! The infinity pool and tropical gardens were breathtaking.",
  },
  {
    name: "Arjun P.",
    date: "February 2025",
    rating: 4,
    comment:
      "Beautiful villa with spacious rooms. Service was great, only wish the Wi-Fi was a bit faster.",
  },
  {
    name: "Emma W.",
    date: "January 2025",
    rating: 5,
    comment:
      "Absolutely perfect stay with family. The villa feels like a hidden paradise. Highly recommended!",
  },
];

export default function ReviewsPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-40 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Guest Reviews – Villa Mandalay
        </h1>
        <p className="text-lg text-gray-600">
          Hear what our guests have to say about their stay at Villa Mandalay.
        </p>
      </div>

      {/* Reviews List */}
      <div className="max-w-3xl mx-auto space-y-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 text-left hover:shadow-lg transition"
          >
            {/* Reviewer Info */}
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-900">
                {review.name}
              </h3>
              <span className="text-sm text-gray-500">{review.date}</span>
            </div>

            {/* Rating */}
            <div className="flex items-center mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < review.rating
                      ? "text-yellow-500 fill-yellow-500"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* Comment */}
            <p className="text-gray-700 leading-relaxed">{review.comment}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
