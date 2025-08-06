"use client";

import Image from "next/image";

export default function GetOffers() {
  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left - Image */}
        <div className="mt-12 w-full md:w-[680px] aspect-[4/3] bg-white border border-white rounded-2xl shadow-lg overflow-hidden transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:scale-105 relative">
          <Image
            src="/Vilacollection/0000001848.jpg"
            alt="Scenery Villa"
            fill
            sizes="(max-width: 768px) 100vw, 680px"
            className="object-cover object-center animate-fade-in"
            priority
          />
        </div>

        {/* Right - Text Content */}
        <div className="text-center md:text-left max-w-xl animate-fade-in">
          <h2 className="text-4xl font-bold text-black leading-tight mb-4">
            Get Offers with <br /> Scenery
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Scenery Villas, where every stay is a canvas for making memories that last a lifetime. 
            Our serene abodes are strategically nestled away from the hustle and bustle, 
            providing a tranquil escape for those seeking uninterrupted relaxation.
          </p>
        </div>
      </div>
    </section>
  );
}
