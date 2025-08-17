"use client";

import { dmSans } from "@/app/googlefont";
import Image from "next/image";
import { FC } from "react";

interface VillaDescriptionProps {
  name: string;
  description: string;
  image: string;
  primaryColor?: string;
  secondaryColor?: string;
  fontClass?: string;
  titleColor?: string; // New prop for h1 color
  textColor?: string;  // New prop for paragraph color
}

const VillaDescription: FC<VillaDescriptionProps> = ({
  name,
  description,
  image,
  primaryColor = "bg-blue-600",
  secondaryColor = "bg-gray-100",
  fontClass = "font-Lato",
  titleColor = "#3f2413", // default title color
  textColor = "#1f2937",  // default paragraph color
}) => {
  return (
    <section className={`${secondaryColor} sm:py-60 md:py-20 py-20 text-left`}>
      <div className="max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h1
          className={`${fontClass} text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-1`}
          style={{ color: titleColor }}
        >
          {name}
        </h1>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 items-center gap-4 md:mt-10">
          {/* Villa Image */}
          <div className="relative flex justify-center items-center w-full h-[350px] md:h-[420px] rounded-lg overflow-hidden shadow-lg duration-500 hover:shadow-2xl hover:scale-105">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover object-center animate-fade-in h-full w-full rounded-lg"
              priority
            />
          </div>

          {/* Villa Description */}
          <div className="text-lg md:text-xl md:pl-14 md:mb-10 md:mt-10">
            <p
              className={`${dmSans.className} mb-4 md:mb-8 leading-relaxed`}
              style={{ color: textColor }}
            >
              {description}
            </p>
            <button
              className={`${primaryColor} text-white px-6 py-2 rounded-lg hover:opacity-90 transition`}
              onClick={() => window.location.href = "/bookpage"}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VillaDescription;
