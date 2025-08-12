// components/BlogCard.tsx
"use client";

import Image from "next/image";
import { useMemo } from "react";

type BlogCardProps = {
  name: string;
  role: string;
  content: string;
  rating: number;
};

export default function BlogCard({ name, role, content, rating }: BlogCardProps) {
  // Pick a random avatar only once
  const randomImage = useMemo(() => {
    const gender = Math.random() > 0.5 ? "men" : "women";
    const id = Math.floor(Math.random() * 90); // 0–89
    return `https://randomuser.me/api/portraits/${gender}/${id}.jpg`;
  }, []);

  return (
    <div className="bg-gray-200 md:h-70 rounded-2xl p-6 flex flex-col space-y-6 shadow-md hover:shadow-lg transition-shadow">
      {/* Avatar + Name */}
      <div className="flex items-center space-x-3">
        <Image
        src={randomImage}
        alt={name}
        className="rounded-full object-cover"
        width={48}
        height={48}
        unoptimized
        />

        <div>
          <p className="font-bold">{name}</p>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>

      {/* Content */}
      <p className="text-sm text-gray-800">{content}</p>

      {/* Rating */}
      <div className="flex items-center space-x-1">
        <span className="text-sm font-medium">Rating:</span>
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className="text-yellow-400">★</span>
        ))}
      </div>
    </div>
  );
}
