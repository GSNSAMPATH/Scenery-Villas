// // components/Gallery.tsx
// 'use client';

// import Image from 'next/image';
// import React, { useState } from 'react';

// const images = [
//   'https://drive.google.com/uc?export=download&id=1LjlM9s8mDob5CEAoBzUrVvwmvksrtJ9P',
//   'https://drive.google.com/uc?export=download&id=14iNmda_yhHtOHiedOyd_qd6akB4jhcH2',
//   'https://drive.google.com/uc?export=download&id=1uHvZaODcKHWbcmozpHj1XNdBooCeDCp_',
//   'https://drive.google.com/uc?export=download&id=1rGcRYh_iPK3cdwT5Vuk5p09WytAkyBMs',
//   'https://drive.google.com/uc?export=download&id=1dIK1DhBLysNquT_jhITDvtvdEjAoEZ_i',
//   'https://drive.google.com/uc?export=download&id=15_EB3PQ93Ri0ltgxdWBvYD1djj5FEQEB',
//   'https://drive.google.com/uc?export=download&id=16nnZWiLXx0LKpmyRIGDbUKjmIm92YbtL',
//   'https://drive.google.com/uc?export=download&id=1BdT3SSg3LV4hhx-Da7K69InQoLTFfeSU',
//   'https://drive.google.com/uc?export=download&id=19WycUKUcOwDsP5qJX-3q7Kub2bgYwmVO',
//   'https://drive.google.com/uc?export=download&id=1sMs_ScSmkakalp8iFNpEFLNX6yns5EM9',
// ];

// export default function Gallery() {
//   const INITIAL_DESKTOP_COUNT = 6;
//   const [expanded, setExpanded] = useState(false);

//   const desktopImages = expanded ? images : images.slice(0, INITIAL_DESKTOP_COUNT);

//   return (
//     <section className="bg-white text-center py-10 flex flex-col h-screen md:h-auto">
//       {/* Title */}
//       <h2 className="text-2xl md:text-3xl font-bold text-brown-800">
//         Gallery By Tara Garden
//       </h2>
//       <p className="text-sm md:text-base text-gray-600 mt-2 max-w-2xl mx-auto">
//         Tara Garden is a charming colonial villa that perfectly blends history with modern comforts.
//       </p>

//       {/* ===== Mobile View ===== */}
//       <div className="md:hidden mt-6 flex-1 overflow-y-auto px-6">
//         <div className="columns-1 xs:columns-2 sm:columns-2 gap-4">
//           {images.map((src, index) => (
//             <div
//               key={`m-${index}`}
//               className="mb-4 break-inside-avoid overflow-hidden rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
//             >
//               <div className="relative w-full h-auto group">
//                 <Image
//                   src={src}
//                   alt={`Gallery image ${index + 1}`}
//                   width={600}
//                   height={400}
//                   className="object-cover w-full h-auto transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ===== Desktop/Tablet View ===== */}
//       <div className="hidden md:block mt-6 px-6 lg:px-20">
//         <div className="columns-2 lg:columns-3 gap-4">
//           {desktopImages.map((src, index) => (
//             <div
//               key={`d-${index}`}
//               className="mb-4 break-inside-avoid overflow-hidden rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
//             >
//               <div className="relative w-full h-auto group">
//                 <Image
//                   src={src}
//                   alt={`Gallery image ${index + 1}`}
//                   width={800}
//                   height={600}
//                   className="object-cover w-full h-auto transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Buttons */}
//         <div className="mt-6 flex justify-center">
//           {!expanded ? (
//             <button
//               onClick={() => setExpanded(true)}
//               className="px-6 py-3 rounded-lg bg-sky-400 text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_#7dd3fc]"
//             >
//               See More
//             </button>
//           ) : (
//             <button
//               onClick={() => setExpanded(false)}
//               className="px-6 py-3 rounded-lg bg-sky-400 text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_#7dd3fc]"
//             >
//               See Less
//             </button>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

// components/Gallery.tsx
'use client';

import Image from 'next/image';
import React, { useState } from 'react';

interface GalleryProps {
  title: string;
  description: string;
  images: string[];
  villaName: string;
  primaryColor?: string;
  titleColor?: string; // optional (different villa themes)
}

export default function Gallery({
  title,
  description,
  images,
  villaName,
  primaryColor = "bg-sky-400",
  titleColor = "amber-700",
}: GalleryProps) {
  const INITIAL_DESKTOP_COUNT = 6;
  const [expanded, setExpanded] = useState(false);

  const desktopImages = expanded ? images : images.slice(0, INITIAL_DESKTOP_COUNT);

  return (
    <section className="bg-white text-center py-10 flex flex-col h-screen md:h-auto">
      {/* Title */}
      <h2 className={`text-${titleColor} text-2xl md:text-3xl font-bold ` }>
        {title} By {villaName}
      </h2>
      <p className="text-sm md:text-base text-gray-600 mt-2 max-w-2xl mx-auto">
        {description}
      </p>

      {/* ===== Mobile View ===== */}
      <div className="md:hidden mt-6 flex-1 overflow-y-auto px-6">
        <div className="columns-1 xs:columns-2 sm:columns-2 gap-4">
          {images.map((src, index) => (
            <div
              key={`m-${index}`}
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

      {/* ===== Desktop/Tablet View ===== */}
      <div className="hidden md:block mt-6 px-6 lg:px-20">
        <div className="columns-2 lg:columns-3 gap-4">
          {desktopImages.map((src, index) => (
            <div
              key={`d-${index}`}
              className="mb-4 break-inside-avoid overflow-hidden rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative w-full h-auto group">
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  width={800}
                  height={600}
                  className="object-cover w-full h-auto transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-center">
          {!expanded ? (
            <button
              onClick={() => setExpanded(true)}
              className={`px-6 py-3 rounded-lg ${primaryColor} text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_#7dd3fc]`}
            >
              See More
            </button>
          ) : (
            <button
              onClick={() => setExpanded(false)}
              className={`px-6 py-3 rounded-lg ${primaryColor} text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_#7dd3fc]`}
            >
              See Less
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

