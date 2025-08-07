// app/gallery/page.tsx

"use client";

import Image from "next/image";

const images = [
  "/Vilacollection/0000001848.jpg",
  "/Vilacollection/DSC02837HDR-2.jpg",
  "/Vilacollection/DSC07235-Edit.jpg",
  "/Vilacollection/DSC07314.jpg",
  "/Vilacollection/DSC07442.jpg",
  "/Vilacollection/DSC07442.jpg",
  "/Vilacollection/DSC07474.jpg",
  "/Vilacollection/Untitled design.jpg",
    "/Vilacollection/0000001848.jpg",
  "/Vilacollection/DSC02837HDR-2.jpg",
  "/Vilacollection/DSC07235-Edit.jpg",
  "/Vilacollection/DSC07314.jpg",
  "/Vilacollection/DSC07442.jpg",
  "/Vilacollection/DSC07442.jpg",
  "/Vilacollection/DSC07474.jpg",
  "/Vilacollection/Untitled design.jpg",
    "/Vilacollection/0000001848.jpg",
  "/Vilacollection/DSC02837HDR-2.jpg",
  "/Vilacollection/DSC07235-Edit.jpg",
  "/Vilacollection/DSC07314.jpg",
  "/Vilacollection/DSC07442.jpg",
  "/Vilacollection/DSC07442.jpg",
  "/Vilacollection/DSC07474.jpg",
  "/Vilacollection/Untitled design.jpg",
    "/Vilacollection/0000001848.jpg",
  "/Vilacollection/DSC02837HDR-2.jpg",
  "/Vilacollection/DSC07235-Edit.jpg",
  "/Vilacollection/DSC07314.jpg",
  "/Vilacollection/DSC07442.jpg",
  "/Vilacollection/DSC07442.jpg",
  "/Vilacollection/DSC07474.jpg",
  "/Vilacollection/Untitled design.jpg",
    "/Vilacollection/0000001848.jpg",
  "/Vilacollection/DSC02837HDR-2.jpg",
  "/Vilacollection/DSC07235-Edit.jpg",
  "/Vilacollection/DSC07314.jpg",
  "/Vilacollection/DSC07442.jpg",
  "/Vilacollection/DSC07442.jpg",
  "/Vilacollection/DSC07474.jpg",
  "/Vilacollection/Untitled design.jpg",
    "/Vilacollection/0000001848.jpg",
  "/Vilacollection/DSC02837HDR-2.jpg",
  "/Vilacollection/DSC07235-Edit.jpg",
  "/Vilacollection/DSC07314.jpg",
  "/Vilacollection/DSC07442.jpg",
  "/Vilacollection/DSC07442.jpg",
  "/Vilacollection/DSC07474.jpg",
  "/Vilacollection/Untitled design.jpg",
    "/Vilacollection/0000001848.jpg",
  "/Vilacollection/DSC02837HDR-2.jpg",
  "/Vilacollection/DSC07235-Edit.jpg",
  "/Vilacollection/DSC07314.jpg",
  "/Vilacollection/DSC07442.jpg",
  "/Vilacollection/DSC07442.jpg",
  "/Vilacollection/DSC07474.jpg",
  "/Vilacollection/Untitled design.jpg",
    "/Vilacollection/0000001848.jpg",
  "/Vilacollection/DSC02837HDR-2.jpg",
  "/Vilacollection/DSC07235-Edit.jpg",
  "/Vilacollection/DSC07314.jpg",
  "/Vilacollection/DSC07442.jpg",
  "/Vilacollection/DSC07442.jpg",
  "/Vilacollection/DSC07474.jpg",
  "/Vilacollection/Untitled design.jpg",

];

export default function GalleryPage() {
  return (
    <main className="bg-white py-40 px-6">
      {/* Heading */}
      <div className="text-center mb-12 md:mt-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-green-900">
          Our Gallery
        </h1>
        <p className="text-lg max-w-xl mx-auto text-gray-600 mt-4">
          Explore breathtaking views of our villas, gardens, and relaxing spaces captured in vibrant detail.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 md:px-12">
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg group">
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
