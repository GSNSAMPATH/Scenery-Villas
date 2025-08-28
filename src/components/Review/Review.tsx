"use client";

import { Star } from "lucide-react";

const reviews = [
  {
    name: "Metlinda Parker",
    text: "Sed facilisi tortor mauris in vestibulum turpis ac. Senectus dui ultrices sed nunc odio mattis tempus. Egestas sed id euismod sit.",
    rating: 5,
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Matthew Bennett",
    text: "Mattis turpis sed nisi ullamcorper pretium. Varius elementum adipiscing suscipit est porttitor placerat lorem adipiscing urna.",
    rating: 4.5,
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sophia Rodriguez",
    text: "Nisl purus diam morbi rhoncus pellentesque condimentum in non. Velit at nibh eget tempor felis dignissim sit.",
    rating: 4.5,
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Ava Mitchell",
    text: "Convallis viverra viverra quisque ornare egestas sit nec. Etiam volutpat convallis a volutpat facilisis venenatis ornare aliquam.",
    rating: 3,
    img: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Christopher Mitchell",
    text: "Maecenas mauris eget venenatis consectetur posuere auctor nulla ullamcorper feugiat.",
    rating: 4,
    img: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    name: "Daniel Harrison",
    text: "Vestibulum commodo velit justo consequat nec. Rhoncus id amet hendrerit vulputate vestibulum id.",
    rating: 5,
    img: "https://randomuser.me/api/portraits/men/64.jpg",
  },
];

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={18}
          className={`${
            i <= Math.floor(rating)
              ? "text-yellow-400 fill-yellow-400"
              : i - rating < 1 && i > rating
              ? "text-yellow-400 fill-yellow-200"
              : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="py-40 px-6 md:px-16 bg-gray-100">
      {/* Summary Section */}
      <div className="grid md:grid-cols-3 gap-8 text-center mb-12 max-w-7xl mx-auto md:mt-12">
        <div>
          <h2 className="text-2xl font-bold">4.0</h2>
          <RatingStars rating={4} />
          <p className="text-gray-500 mt-1">46 Ratings</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">4.8</h2>
          <RatingStars rating={4.8} />
          <p className="text-gray-500 mt-1">Last Month</p>
        </div>
        <div className="flex flex-col justify-center">
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((star, i) => (
              <div key={i} className="flex items-center space-x-2">
                <span className="w-6 text-sm">{star}★</span>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div
                    className="bg-yellow-400 h-2 rounded-full"
                    style={{ width: `${star * 20 - 10}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {reviews.map((review, i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <div className="flex items-center gap-4 mb-3">
              <img
                src={review.img}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold">{review.name}</h3>
                <RatingStars rating={review.rating} />
              </div>
            </div>
            <p className="text-gray-600 text-sm">{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
