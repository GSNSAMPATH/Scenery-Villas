"use client";

import { dmSans, lobster } from "@/app/googlefont";
import Image from "next/image";

const villas = [
  {
    name: "Villa Mandalay",
    description: "Ocean-view luxury villa with open living space.",
    img: "https://res.cloudinary.com/diatamf9x/image/upload/v1754320249/WhatsApp_Image_2025-08-03_at_10.38.04_c21be287_pjzltg.jpg",
  },
  {
    name: "Tara Garden",
    description: "Perfect for families, quiet and cozy.",
    img: "https://res.cloudinary.com/diatamf9x/image/upload/v1754320248/WhatsApp_Image_2025-08-03_at_10.37.27_a809a769_kkjmid.jpg",
  },
  {
    name: "Treetop Resort",
    description: "Relax with a view of the sunset and garden.",
    img: "https://res.cloudinary.com/diatamf9x/image/upload/v1754320248/WhatsApp_Image_2025-08-03_at_10.36.55_d819d788_zefhf6.jpg",
  },
];

export default function LiveVilla() {
  return (
    <div className="bg-white py-16 px-6">
      {/* Heading */}
      <div className="text-center mb-12 mt-12">
        <h1 className={`${lobster.className} text-4xl sm:text-5xl font-bold mt-8 mb-18 text-green-900`}>
          Living in Scenery Villas
        </h1>
        <p className={`${dmSans.className} text-base sm:text-2xl mb-10 max-w-4xl mx-auto`}>
          {/* "text-lg max-w-2xl mx-auto text-gray-600" */}
          Living in Scenery Villas combines comfort and tranquility. With spacious living areas and family-friendly amenities, it’s the perfect home away from home for unforgettable vacations.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 mx-4 sm:mx-14">
        {villas.map((villa, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden shadow-lg group border-4 border-white transform transition-transform duration-500 hover:scale-[1.03] animate-fade-in
              aspect-[5/6] sm:aspect-[3/4]"
            style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'both' }}
          >
            <Image
              src={villa.img}
              alt={villa.name}
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 100vw, 33vw"
              priority={index === 0}
            />
            <div
              className="absolute inset-0 bg-black/40 
                opacity-100 sm:opacity-0 sm:group-hover:opacity-100 
                transition-opacity duration-300 p-5 flex flex-col justify-end"
            >
              <h3 className="text-white text-xl font-bold mb-2">{villa.name}</h3>
              <p className="text-white text-sm">{villa.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


// "use client";

// import { dmSans, lobster } from "@/app/googlefont";
// import Image from "next/image";

// const villas = [
//   {
//     name: "Villa Mandalay",
//     description: "Ocean-view luxury villa with open living space.",
//     img: "https://res.cloudinary.com/diatamf9x/image/upload/v1754320249/WhatsApp_Image_2025-08-03_at_10.38.04_c21be287_pjzltg.jpg",
//   },
//   {
//     name: "Tara Garden",
//     description: "Perfect for families, quiet and cozy.",
//     img: "https://res.cloudinary.com/diatamf9x/image/upload/v1754320248/WhatsApp_Image_2025-08-03_at_10.37.27_a809a769_kkjmid.jpg",
//   },
//   {
//     name: "Treetop Resort",
//     description: "Relax with a view of the sunset and garden.",
//     img: "https://res.cloudinary.com/diatamf9x/image/upload/v1754320248/WhatsApp_Image_2025-08-03_at_10.36.55_d819d788_zefhf6.jpg",
//   },

//     {
//     name: "Villa Mandalay",
//     description: "Ocean-view luxury villa with open living space.",
//     img: "https://res.cloudinary.com/diatamf9x/image/upload/v1754320249/WhatsApp_Image_2025-08-03_at_10.38.04_c21be287_pjzltg.jpg",
//   },
//   {
//     name: "Tara Garden",
//     description: "Perfect for families, quiet and cozy.",
//     img: "https://res.cloudinary.com/diatamf9x/image/upload/v1754320248/WhatsApp_Image_2025-08-03_at_10.37.27_a809a769_kkjmid.jpg",
//   },
//   {
//     name: "Treetop Resort",
//     description: "Relax with a view of the sunset and garden.",
//     img: "https://res.cloudinary.com/diatamf9x/image/upload/v1754320248/WhatsApp_Image_2025-08-03_at_10.36.55_d819d788_zefhf6.jpg",
//   },
// ];

// export default function LiveVilla() {
//   return (
//     <div className="bg-white py-16 px-6 overflow-hidden">
//       {/* Heading */}
//       <div className="text-center mb-12 mt-12">
//         <h1
//           className={`${lobster.className} text-4xl sm:text-5xl font-bold mt-8 mb-18 text-green-900`}
//         >
//           Living in Scenery Villas
//         </h1>
//         <p
//           className={`${dmSans.className} text-base sm:text-2xl mb-10 max-w-4xl mx-auto`}
//         >
//           Living in Scenery Villas combines comfort and tranquility. With spacious living areas and family-friendly amenities, it’s the perfect home away from home for unforgettable vacations.
//         </p>
//       </div>

//       {/* Auto-rotating Carousel */}
//       <div className="relative w-full overflow-hidden">
//         <div className="flex animate-slide">
//           {[...villas, ...villas].map((villa, index) => (
//             <div
//               key={index}
//               className="relative min-w-[300px] sm:min-w-[400px] md:min-w-[500px] aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border-4 border-white mx-2"
//             >
//               <Image
//                 src={villa.img}
//                 alt={villa.name}
//                 fill
//                 className="object-cover object-center"
//               />
//               <div className="absolute inset-0 bg-black/40 p-5 flex flex-col justify-end">
//                 <h3 className="text-white text-xl font-bold mb-2">
//                   {villa.name}
//                 </h3>
//                 <p className="text-white text-sm">{villa.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Tailwind keyframes */}
//       <style jsx>{`
//         @keyframes slide {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//         .animate-slide {
//           width: max-content;
//           animation: slide 60s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import { dmSans, lobster } from "@/app/googlefont";
// import Image from "next/image";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const villas = [
//   {
//     name: "Villa Mandalay",
//     description: "Ocean-view luxury villa with open living space.",
//     img: "https://res.cloudinary.com/diatamf9x/image/upload/v1754320249/WhatsApp_Image_2025-08-03_at_10.38.04_c21be287_pjzltg.jpg",
//   },
//   {
//     name: "Tara Garden",
//     description: "Perfect for families, quiet and cozy.",
//     img: "https://res.cloudinary.com/diatamf9x/image/upload/v1754320248/WhatsApp_Image_2025-08-03_at_10.37.27_a809a769_kkjmid.jpg",
//   },
//   {
//     name: "Treetop Resort",
//     description: "Relax with a view of the sunset and garden.",
//     img: "https://res.cloudinary.com/diatamf9x/image/upload/v1754320248/WhatsApp_Image_2025-08-03_at_10.36.55_d819d788_zefhf6.jpg",
//   },
//   {
//     name: "Villa Mandalay",
//     description: "Ocean-view luxury villa with open living space.",
//     img: "https://res.cloudinary.com/diatamf9x/image/upload/v1754320249/WhatsApp_Image_2025-08-03_at_10.38.04_c21be287_pjzltg.jpg",
//   },
//   {
//     name: "Tara Garden",
//     description: "Perfect for families, quiet and cozy.",
//     img: "https://res.cloudinary.com/diatamf9x/image/upload/v1754320248/WhatsApp_Image_2025-08-03_at_10.37.27_a809a769_kkjmid.jpg",
//   },
//   {
//     name: "Treetop Resort",
//     description: "Relax with a view of the sunset and garden.",
//     img: "https://res.cloudinary.com/diatamf9x/image/upload/v1754320248/WhatsApp_Image_2025-08-03_at_10.36.55_d819d788_zefhf6.jpg",
//   },
// ];

// export default function LiveVilla() {
//   const [current, setCurrent] = useState(0);
//   const [itemsPerPage, setItemsPerPage] = useState(3);

//   // Responsive items per page (1 on mobile, 3 on larger screens)
//   useEffect(() => {
//     const handleResize = () => {
//       setItemsPerPage(window.innerWidth < 768 ? 1 : 3);
//     };

//     handleResize(); // run once on mount
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Auto-slide every 5s
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const nextSlide = () => {
//     setCurrent((prev) => (prev + 1) % villas.length);
//   };

//   const prevSlide = () => {
//     setCurrent((prev) => (prev - 1 + villas.length) % villas.length);
//   };

//   // Get visible villas (looping)
//   const visibleVillas = [];
//   for (let i = 0; i < itemsPerPage; i++) {
//     visibleVillas.push(villas[(current + i) % villas.length]);
//   }

//   return (
//     <div className="bg-white py-16 px-6 overflow-hidden">
//       {/* Heading */}
//       <div className="text-center mb-12 mt-12">
//         <h1
//           className={`${lobster.className} text-4xl sm:text-5xl font-bold mt-8 mb-18 text-green-900`}
//         >
//           Living in Scenery Villas
//         </h1>
//         <p
//           className={`${dmSans.className} text-base sm:text-2xl mb-10 max-w-4xl mx-auto`}
//         >
//           Living in Scenery Villas combines comfort and tranquility. With
//           spacious living areas and family-friendly amenities, it’s the perfect
//           home away from home for unforgettable vacations.
//         </p>
//       </div>

//       {/* Carousel */}
//       <div className="relative w-full max-w-6xl mx-auto animate-fade-in">
//         <div className="flex justify-center gap-4">
//           {visibleVillas.map((villa, index) => (
//             <div
//               key={index}
//               className={`${
//                 itemsPerPage === 1 ? "w-full" : "md:w-1/3"
//               } relative h-[400px] rounded-2xl overflow-hidden shadow-lg`}
//             >
//               <Image
//                 src={villa.img}
//                 alt={villa.name}
//                 fill
//                 className="object-cover object-center"
//               />
//               <div className="absolute inset-0 bg-black/40 p-5 flex flex-col justify-end">
//                 <h3 className="text-white text-xl font-bold mb-2">
//                   {villa.name}
//                 </h3>
//                 <p className="text-white text-sm">{villa.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Buttons */}
//         <button
//           onClick={prevSlide}
//           className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white/70 p-3 rounded-full shadow hover:bg-white"
//         >
//           <ChevronLeft className="w-6 h-6 text-green-900" />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white/70 p-3 rounded-full shadow hover:bg-white"
//         >
//           <ChevronRight className="w-6 h-6 text-green-900" />
//         </button>
//       </div>
//     </div>
//   );
//}

