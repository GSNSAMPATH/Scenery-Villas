"use client";

import Image from "next/image";

const villas = [
  {
    name: "Villa Breeze",
    description: "Ocean-view luxury villa with open living space.",
    img: "https://res.cloudinary.com/diatamf9x/image/upload/v1754320249/WhatsApp_Image_2025-08-03_at_10.38.04_c21be287_pjzltg.jpg", // Make sure this exists
  },
  {
    name: "Palm Retreat",
    description: "Perfect for families, quiet and cozy.",
    img: "https://res.cloudinary.com/diatamf9x/image/upload/v1754320248/WhatsApp_Image_2025-08-03_at_10.37.27_a809a769_kkjmid.jpg", // Make sure this exists
  },
  {
    name: "Sunset Point",
    description: "Relax with a view of the sunset and garden.",
    img: "https://res.cloudinary.com/diatamf9x/image/upload/v1754320248/WhatsApp_Image_2025-08-03_at_10.36.55_d819d788_zefhf6.jpg", // Make sure this exists
  },
];

export default function LiveVilla() {
  return (
    <div className="bg-white py-16 px-6">
      {/* Heading */}
      <div className="text-center mb-12 mt-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Living in Scenery Villas
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-600">
          Living in Scenery Villas combines comfort and tranquility. With spacious living areas and family-friendly amenities, it’s the perfect home away from home for unforgettable vacations.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12 max-w-8xl mx-auto ml-14 mr-14">
        {villas.map((villa, index) => (
          <div
            key={index}
            className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg group border-4 border-white transform transition-transform duration-500 hover:scale-[1.03] animate-fade-in"
            style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'both' }}
          >
            <Image
              src={villa.img}
              alt={villa.name}

              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/40 
              opacity-100 sm:opacity-0 sm:group-hover:opacity-100 
              transition-opacity duration-300 p-5 flex flex-col justify-end">
              <h3 className="text-white text-xl font-bold mb-2">{villa.name}</h3>
              <p className="text-white text-sm">{villa.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
