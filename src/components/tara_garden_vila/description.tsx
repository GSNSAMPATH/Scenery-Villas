'use client';

import Image from 'next/image';
import React from 'react';

const VillaDescription: React.FC = () => {
  return (
    <div className="bg-white py-10 px-4 md:px-10">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/Vilacollection/DSC02837HDR-2.jpg"
            alt="Tara Garden Villa"
            width={600}
            height={400}
            className="rounded-lg shadow-md h-auto"
          />
        </div>

        {/* Right Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-bold text-[#3f2413] mb-4">
            Colonial Style Four Bedroom Family Villa in Bentota - Tara Garden
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Tara Garden is a charming colonial villa that perfectly blends history
            with modern comforts. Set amidst tropical greenery, this 4-bedroom
            villa accommodates up to 8 guests and offers a tranquil space for
            families to unwind. The villa’s colonial architecture adds a touch of
            elegance, while the baby pool ensures children are well entertained.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VillaDescription;
