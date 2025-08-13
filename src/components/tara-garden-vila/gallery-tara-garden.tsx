'use client';

import Image from 'next/image';
import React from 'react';

const images = [
  'https://drive.google.com/uc?export=download&id=1LjlM9s8mDob5CEAoBzUrVvwmvksrtJ9P',
  'https://drive.google.com/uc?export=download&id=14iNmda_yhHtOHiedOyd_qd6akB4jhcH2',
  'https://drive.google.com/uc?export=download&id=1uHvZaODcKHWbcmozpHj1XNdBooCeDCp_',
  'https://drive.google.com/uc?export=download&id=1rGcRYh_iPK3cdwT5Vuk5p09WytAkyBMs',
  'https://drive.google.com/uc?export=download&id=1dIK1DhBLysNquT_jhITDvtvdEjAoEZ_i',
  'https://drive.google.com/uc?export=download&id=15_EB3PQ93Ri0ltgxdWBvYD1djj5FEQEB',
  'https://drive.google.com/uc?export=download&id=16nnZWiLXx0LKpmyRIGDbUKjmIm92YbtL',
  'https://drive.google.com/uc?export=download&id=1BdT3SSg3LV4hhx-Da7K69InQoLTFfeSU',
  'https://drive.google.com/uc?export=download&id=19WycUKUcOwDsP5qJX-3q7Kub2bgYwmVO',
  'https://drive.google.com/uc?export=download&id=1sMs_ScSmkakalp8iFNpEFLNX6yns5EM9',
  
];

export default function Gallery() {
  return (
    <section className="bg-white text-center py-10 h-screen flex flex-col">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-brown-800">
        Gallery By Tara Garden
      </h2>
      <p className="text-sm md:text-base text-gray-600 mt-2">
        Tara Garden is a charming colonial villa that perfectly blends history with modern comforts.
      </p>

      {/* Scrollable Masonry Grid */}
      <div className="mt-6 flex-1 overflow-y-scroll px-4">
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="mb-4 break-inside-avoid overflow-hidden rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative w-full h-auto group">
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  width={600}
                  height={400}
                  className="object-cover w-full h-auto transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
