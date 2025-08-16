"use client";

import { dmSans, lobster } from "@/app/googlefont";
import Image from "next/image";
import { Interface } from "readline";

  
 interface FeaturesSectionProps {
  titlefont?: string;
  titlecolore?: string;

}

export default function GetOffers({ 
  titlefont = lobster.className,
  titlecolore = "text-green-900",

}: FeaturesSectionProps) {

  return (
    <section className="bg-white md:py-40 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left - Image */}
        <div className="mt-12 w-full md:w-[680px] aspect-[4/3] bg-white border border-white rounded-2xl shadow-lg overflow-hidden transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:scale-105 relative">
          <Image
            src="https://res.cloudinary.com/diatamf9x/image/upload/v1754319469/WhatsApp_Image_2025-08-03_at_10.37.26_4eeba235_ciwzn2.jpg"
            alt="Scenery Villa"
            fill
            sizes="(max-width: 768px) 100vw, 680px"
            className="object-cover object-center animate-fade-in"
            priority
          />
        </div>

        {/* Right - Text Content */}
        <div className="text-center md:text-left max-w-xl animate-fade-in">
          <h2 className={`${titlefont} text-4xl font-bold ${titlecolore} leading-tight mb-4`}>
            Get Offers with <br /> Scenery
          </h2>
          <p className={`${dmSans.className} text-base sm:text-2xl mb-10 max-w-4xl mx-auto`}>
            {/* "text-gray-700 text-lg leading-relaxed" */}
            Scenery Villas, where every stay is a canvas for making memories that last a lifetime. 
            Our serene abodes are strategically nestled away from the hustle and bustle, 
            providing a tranquil escape for those seeking uninterrupted relaxation.
          </p>
        </div>
      </div>
    </section>
  );
}
