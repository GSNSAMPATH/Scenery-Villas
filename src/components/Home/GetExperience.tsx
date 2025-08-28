// "use client";

// import Image from "next/image";
// import Button from "../Button";
// import { dmSans, lobster } from "@/app/googlefont";
// import { Console } from "console";

// export default function GetExperience() {
//   function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
//     window.location.href = "/experience"
//   }

//   return (
//     <section className="bg-[var(--background0)] py-20 px-6 md:px-20">
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-12">
//         {/* Left Content */}
//         <div className="flex-1 animate-fade-in text-left">
//           <h2 className={`${lobster.className} text-4xl sm:text-5xl font-bold mb-6 text-green-900`}>Get Experience</h2>
         
//           <p className={`${dmSans.className} text-base sm:text-2xl mb-10 max-w-4xl mx-auto`}>
//             {/* text-gray-700 text-lg leading-relaxed mb-8" */}
//             Bentota offers a wonderful mix of experiences for every traveler. 
//             Enjoy thrilling watersports like jet skiing and snorkeling in its beautiful blue waters, 
//             or take a relaxing boat ride along the Bentota River to explore lush mangroves and spot wildlife. 
//             For those looking to unwind, the sandy beaches are perfect for soaking up the sun, 
//             or you can treat yourself to a soothing Ayurvedic spa treatment. 
//             Don’t forget to explore the local culture through nearby temples and markets, 
//             all while savoring delicious Sri Lankan cuisine. Bentota is truly a tropical paradise that has something for everyone!
//           </p>
//           <Button color="black text-white" size="3"  onClick={handleClick} >
//             Explore More
//           </Button>
//         </div>

//         {/* Right Image Card - Responsive */}
//         <div className="relative flex-1 md:h-[500px] animate-fade-in w-full max-w-md md:max-w-none md:w-[680px] aspect-[680/500] bg-white border border-white rounded-2xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 mx-auto md:mx-0">
//           <Image
//             src="https://res.cloudinary.com/diatamf9x/image/upload/v1754319469/WhatsApp_Image_2025-08-03_at_10.37.26_4eeba235_ciwzn2.jpg"
//             alt="Experience"
//             fill
//             sizes="(max-width: 768px) 100vw, 680px "
//             className="object-cover"
//             priority
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { dmSans, lobster } from "@/app/googlefont";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

interface Scenery {
  name: string;
  description: string;
  font: string;
  titlecolor?: string;
  bgColor?: string;
}

export default function GetExperience({
  name,
  description,
  font = lobster.className,
  titlecolor = "text-green-900",
  bgColor = "bg-gray-100",

}: Scenery) {
  const [current, setCurrent] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Responsive items per page (1 on mobile, 3 on larger screens)
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 3);
    };

    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % villas.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + villas.length) % villas.length);
  };

  // Get visible villas (looping)
  const visibleVillas = [];
  for (let i = 0; i < itemsPerPage; i++) {
    visibleVillas.push(villas[(current + i) % villas.length]);
  }

  return (
    <div className={`${bgColor} py-16 px-6 overflow-hidden`}>
      {/* Heading */}
      <div className="text-center mb-12 mt-12">
        <h1
          className={`${font||lobster.className} text-4xl sm:text-5xl  mt-8 mb-18 ${titlecolor}`}
        >
          Get Experience
        </h1>
        <p
          className={`${dmSans.className} text-base sm:text-2xl mb-10 max-w-4xl mx-auto`}
        >
          Bentota offers a wonderful mix of experiences for every traveler. 
          Enjoy thrilling watersports like jet skiing and snorkeling in its beautiful blue waters, 
          or take a relaxing boat ride along the Bentota River to explore lush mangroves and spot wildlife. 
          For those looking to unwind, the sandy beaches are perfect for soaking up the sun, 
          or you can treat yourself to a soothing Ayurvedic spa treatment.              
          Don’t forget to explore the local culture through nearby temples and markets, 
          all while savoring delicious Sri Lankan cuisine. Bentota is truly a tropical paradise that has something for everyone!
        </p>
      </div>

      {/* Carousel */}
      <div className="relative w-full max-w-6xl mx-auto animate-fade-in">
        <div className="flex justify-center gap-4">
          {visibleVillas.map((villa, index) => (
            <div
              key={index}
              className={`${
                itemsPerPage === 1 ? "w-full" : "md:w-1/3"
              } relative h-[400px] rounded-2xl overflow-hidden shadow-lg`}
            >
              <Image
                src={villa.img}
                alt={villa.name}
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/40 p-5 flex flex-col justify-end">
                <h3 className="text-white text-xl font-bold mb-2">
                  {villa.name}
                </h3>
                <p className="text-white text-sm">{villa.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white/70 p-3 rounded-full shadow hover:bg-white"
        >
          <ChevronLeft className="w-6 h-6 text-green-900" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white/70 p-3 rounded-full shadow hover:bg-white"
        >
          <ChevronRight className="w-6 h-6 text-green-900" />
        </button>
      </div>
    </div>
  );
}
