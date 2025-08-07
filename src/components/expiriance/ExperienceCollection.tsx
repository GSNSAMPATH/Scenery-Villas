"use client";

import { lobster } from "@/app/googlefont";
import Image from "next/image";

const experiences = [
  {
    title: "Private Chef Dining",
    description: "Enjoy delicious meals prepared by our in-house chef with authentic local flavors and seasonal ingredients .",
    image: "https://res.cloudinary.com/diatamf9x/image/upload/v1754318415/WhatsApp_Image_2025-08-03_at_10.38.05_4c6eb6b6_alvpoz.jpg",
  },
  {
    title: "Luxury Spa Treatment",
    description: "Relax and rejuvenate with our premium in-villa spa and massage services.",
    image: "https://res.cloudinary.com/diatamf9x/image/upload/v1754320249/WhatsApp_Image_2025-08-03_at_10.38.04_c21be287_pjzltg.jpg",
  },
  {
    title: "Outdoor Swimming Pool",
    description: "Indoor and outdoor swimming pools for your relaxation and leisure.",
    image: "https://res.cloudinary.com/diatamf9x/image/upload/v1754320249/WhatsApp_Image_2025-08-03_at_10.38.04_c21be287_pjzltg.jpg",
  },
  {
    title: "Gym and Yoga Studio",
    description: "Stay fit and healthy with our state-of-the-art gym and yoga studio.",
    image: "https://res.cloudinary.com/diatamf9x/image/upload/v1754318415/WhatsApp_Image_2025-08-03_at_10.38.05_4c6eb6b6_alvpoz.jpg",
  },
  {
    title: "Spa and Massage",
    description: "Relax and rejuvenate with our premium spa and massage services.",
    image: "https://res.cloudinary.com/diatamf9x/image/upload/v1754320249/WhatsApp_Image_2025-08-03_at_10.38.04_c21be287_pjzltg.jpg",
  },
  {
    title: "Outdoor Swimming Pool",
    description: "Indoor and outdoor swimming pools for your relaxation and leisure.",
    image: "https://res.cloudinary.com/diatamf9x/image/upload/v1754320249/WhatsApp_Image_2025-08-03_at_10.38.04_c21be287_pjzltg.jpg",
  }
];


export default function ExperienceCollection() {
  return (
    <div className="bg-[var(--background1)] py-16 px-6 ">
      {/* Heading */}


      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 mx-4 sm:mx-50 mb-10">
        {experiences.map((item, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden shadow-lg group border-1 border-white transform transition-transform duration-500 hover:scale-[1.03] animate-fade-in aspect-[5/6] sm:aspect-[4/3] h-120 w-full"
            style={{ animationDelay: `${index * 150}ms`, animationFillMode: "both" }}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover object-center h-30 w-full"
              sizes="(max-width: 640px) 100vw, 50vw "
              priority={index === 0}
            />
            <div
              className="absolute inset-0 bg-black/40 
                opacity-100 sm:opacity-0 sm:group-hover:opacity-100 
                transition-opacity duration-300 p-5 flex flex-col justify-end"
            >
              <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-white text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
