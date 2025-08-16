// import Image from 'next/image';
// import Button from "../Button";
// import { dmSans, lobster } from "../../app/googlefont";

// const villas = [
//   {
//     name: "Villa Mandalay",
//     description: "Cozy 3-bedroom villa for up to 7 guests, featuring spacious living areas and a baby pool.",
//     img: "/Vilacollection/DSC07314.jpg",
//   },
//   {
//     name: "Tara Garden",
//     description: "Beautiful 4-bedroom colonial villa in lush gardens, accommodating 8 guests with a baby pool.",
//     img: "/Vilacollection/0000001848.jpg",
//   },
//   {
//     name: "Treetop Resort",
//     description: "Spacious 5-bedroom villa for up to 25 guests, complete with a baby pool.",
//     img: "/Vilacollection/Untitled design.jpg",
//   },
//   {
//     name: "Villa Desire",
//     description: "Private 6-bedroom villa for 12 guests, 2 km from Bentota Beach — ideal for peaceful escapes.",
//     img: "/Vilacollection/0000001848.jpg",
//   },
// ];

// const villaDescription = `
//   Villa Mandalay is a cozy 3-bedroom villa for up to 7 guests, featuring spacious living areas and a baby pool, ideal for families. Nearby, Tara Garden is a beautiful 4-bedroom colonial villa nestled in lush gardens, accommodating 8 guests and also offering a baby pool. For larger gatherings, Treetop Resort provides a spacious 5-bedroom villa for up to 25 guests, complete with a baby pool. Finally, Villa Desire is a private 6-bedroom villa for 12 guests, located 2 km from Bentota Beach, perfect for families or groups seeking a peaceful escape.
// `;

// export default function VillaCollection() {
//   return (
//     <section className="bg-[var(--background0)] px-4 py-16 text-[var(--foreground)]">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className={`${lobster.className} text-5xl font-bold mb-3 mt-4`}>
//           <span className="text-black">Our </span>
//           <span className="text-green-900">Collection</span>
//         </h2>
//         <p className={`${dmSans.className} text-base sm:text-2xl mb-8 max-w-4xl mx-auto mt-10`}>
//           {villaDescription}
//         </p>
//         <div className="mb-10">
//           <Button color="black text-white mb-4" size="3">
//             Contact US
//           </Button>
//         </div>
//       </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 py-10 ml-10 mr-10">
//           {villas.map((villa, index) => (
//             <div
//               key={index}
//               className="relative aspect-[3/5] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all group"
//             >
//               <Image
//                 src={villa.img}
//                 alt={villa.name}
//                 fill
//                 className="object-cover object-center"
//               />

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-black/40 
//                 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 
//                 transition-opacity duration-300 p-5 flex flex-col justify-end">
//                 <h3 className="text-white text-xl font-bold mb-2">{villa.name}</h3>
//                 <p className="text-white text-sm">{villa.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import Button from "../Button";
import { dmSans, lobster } from "../../app/googlefont";

const villas = [
  {
    name: "Villa Mandalay",
    description:
      "Cozy 3-bedroom villa for up to 7 guests, featuring spacious living areas and a baby pool.",
    img: "https://res.cloudinary.com/diatamf9x/image/upload/v1754318415/WhatsApp_Image_2025-08-03_at_10.38.05_4c6eb6b6_alvpoz.jpg",
  },
  {
    name: "Tara Garden",
    description:
      "Beautiful 4-bedroom colonial villa in lush gardens, accommodating 8 guests with a baby pool.",
    img: "https://res.cloudinary.com/diatamf9x/image/upload/v1754319469/WhatsApp_Image_2025-08-03_at_10.37.26_4eeba235_ciwzn2.jpg",
  },
  {
    name: "Treetop Resort",
    description:
      "Spacious 5-bedroom villa for up to 25 guests, complete with a baby pool.",
    img: "https://res.cloudinary.com/diatamf9x/image/upload/v1754319111/WhatsApp_Image_2025-08-03_at_10.36.56_362985d9_k8iwhv.jpg",
  },
  {
    name: "Villa Desire",
    description:
      "Private 6-bedroom villa for 12 guests, 2 km from Bentota Beach — ideal for peaceful escapes.",
    img: "/Vilacollection/0000001848.jpg",
  },
];

const villaDescription = `
  Bentota offers a wonderful mix of experiences for every traveler. 
  Enjoy thrilling watersports like jet skiing and snorkeling in its beautiful blue waters, 
  or take a relaxing boat ride along the Bentota River to explore lush mangroves and spot wildlife. 
  For those looking to unwind, the sandy beaches are perfect for soaking up the sun, 
  or you can treat yourself to a soothing Ayurvedic spa treatment. 
  Don’t forget to explore the local culture through nearby temples and markets, 
  all while savoring delicious Sri Lankan cuisine. 
  Bentota is truly a tropical paradise that has something for everyone!
`;

export default function VillaCollection() {

  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    window.location.href = "/bookpage";
  }

  return (
    <section className="bg-[var(--background0)] px-4 py-16 text-[var(--foreground)]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className={`${lobster.className} text-5xl font-bold mb-3 mt-4`}>
          <span className="text-black">Our </span>
          <span className="text-green-900">Collection</span>
        </h2>
        <p
          className={`${dmSans.className} text-base sm:text-2xl mb-8 max-w-4xl mx-auto mt-10`}
        >
          {villaDescription}
        </p>
        <div className="mb-10">
          <Button color="black text-white mb-4 " onClick={handleClick} size="3">
            Contact US
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-2 sm:px-4 sm:ml-10 sm:mr-10">
        {villas.map((villa, index) => (
          <div
            key={index}
            className="relative w-full aspect-[4/5] sm:aspect-[3/5] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
          >
            <Image
              src={villa.img}
              alt={villa.name}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />

            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/40 
              opacity-100 sm:opacity-0 sm:group-hover:opacity-100 
              transition-opacity duration-300 p-5 flex flex-col justify-end"
            >
              <h3 className="text-white text-xl font-bold mb-2">
                {villa.name}
              </h3>
              <p className="text-white text-sm">{villa.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
