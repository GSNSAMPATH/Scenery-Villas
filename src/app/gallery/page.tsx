"use client";

import { useState } from "react";
import Image from "next/image";

const villaImages: { [key: string]: string[] } = {
  "Villa Mandalay": [
    "/Vilacollection/0000001848.jpg",
    "/Vilacollection/DSC02837HDR-2.jpg",
    "/Vilacollection/DSC07235-Edit.jpg",
    "/Vilacollection/0000001848.jpg",
    "/Vilacollection/DSC02837HDR-2.jpg",
    "/Vilacollection/DSC07235-Edit.jpg",
  ],
  "Tara Garden": [
    "/Vilacollection/DSC07314.jpg",
    "/Vilacollection/DSC07442.jpg",
    "/Vilacollection/DSC07474.jpg",
    "/Vilacollection/DSC07314.jpg",
    "/Vilacollection/DSC07442.jpg",
    "/Vilacollection/DSC07474.jpg",
  ],
  "Treetop Resort": [
    "/Vilacollection/Untitled design.jpg",
    "/Vilacollection/0000001848.jpg",
    "/Vilacollection/DSC07235-Edit.jpg",
    "/Vilacollection/Untitled design.jpg",
    "/Vilacollection/0000001848.jpg",
    "/Vilacollection/DSC07235-Edit.jpg",
  ],
  "Villa Desire": [
    "/Vilacollection/DSC07314.jpg",
    "/Vilacollection/DSC07442.jpg",
    "/Vilacollection/Untitled design.jpg",
    "/Vilacollection/DSC07314.jpg",
    "/Vilacollection/DSC07442.jpg",
    "/Vilacollection/Untitled design.jpg",
  ],
};

const allImages = Object.values(villaImages).flat();

export default function GalleryPage() {
  const [selectedVilla, setSelectedVilla] = useState("All");

const displayedImages =
  selectedVilla === "All" ? allImages : villaImages[selectedVilla as keyof typeof villaImages];

  return (
    <main className="bg-white py-50 px-6">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-green-900">
          Our Gallery
        </h1>
        <p className="text-lg max-w-xl mx-auto text-gray-600 mt-4">
          Explore breathtaking views of our villas, gardens, and relaxing spaces.
        </p>
      </div>

      {/* Villa Selector */}
      <div className="flex justify-center gap-4 flex-wrap mb-10 md:mb-16">
        {["All", "Villa Mandalay", "Tara Garden", "Treetop Resort", "Villa Desire"].map((villa) => (
          <button
            key={villa}
            onClick={() => setSelectedVilla(villa)}
            className={`px-4 py-2 rounded-lg border transition-all ${
              selectedVilla === villa
                ? "bg-green-900 text-white border-green-900"
                : "bg-white text-green-900 border-green-900 hover:bg-green-100"
            }`}
          >
            {villa === "All" ? "All" : `${villa}`}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 md:px-12">
        {displayedImages.map((src, index) => (
          <div
            key={index}
            className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg group"
          >
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
