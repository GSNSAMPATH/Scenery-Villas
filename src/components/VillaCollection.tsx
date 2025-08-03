import Image from 'next/image';
import Button from "./Button";
import { dmSans, lobster } from "../app/googlefont";

const villas = [
  {
    name: "Villa Mandalay",
    description: "Cozy 3-bedroom villa for up to 7 guests, featuring spacious living areas and a baby pool.",
    img: "/Vilacollection/DSC07314.jpg",
  },
  {
    name: "Tara Garden",
    description: "Beautiful 4-bedroom colonial villa in lush gardens, accommodating 8 guests with a baby pool.",
    img: "/Vilacollection/0000001848.jpg",
  },
  {
    name: "Treetop Resort",
    description: "Spacious 5-bedroom villa for up to 25 guests, complete with a baby pool.",
    img: "/Vilacollection/Untitled design.jpg",
  },
  {
    name: "Villa Desire",
    description: "Private 6-bedroom villa for 12 guests, 2 km from Bentota Beach — ideal for peaceful escapes.",
    img: "/Vilacollection/0000001848.jpg",
  },
];

const villaDescription = `
  Villa Mandalay is a cozy 3-bedroom villa for up to 7 guests, featuring spacious living areas and a baby pool, ideal for families. Nearby, Tara Garden is a beautiful 4-bedroom colonial villa nestled in lush gardens, accommodating 8 guests and also offering a baby pool. For larger gatherings, Treetop Resort provides a spacious 5-bedroom villa for up to 25 guests, complete with a baby pool. Finally, Villa Desire is a private 6-bedroom villa for 12 guests, located 2 km from Bentota Beach, perfect for families or groups seeking a peaceful escape.
`;

export default function VillaCollection() {
  return (
    <section className="bg-[var(--background0)] px-4 py-16 text-[var(--foreground)]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`${lobster.className} text-5xl font-bold mb-4 mt-10`}>
          <span className="text-black">Our </span>
          <span className="text-green-900">Collection</span>
        </h2>
        <p className={`${dmSans.className} text-base sm:text-2xl mb-20 max-w-4xl mx-auto mt-20`}>
          {villaDescription}
        </p>

        
        <div className="mb-20">
          <Button color="black text-white mb-20" size="3">
            Contact US
          </Button>
        </div>

      </div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 py-10 ml-10 mr-10">
  {villas.map((villa, index) => (
    <div
      key={index}
      className="relative aspect-[3/5] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all group"
    >
      <Image
        src={villa.img}
        alt={villa.name}
        fill
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 
        opacity-100 sm:opacity-0 sm:group-hover:opacity-100 
        transition-opacity duration-300 p-5 flex flex-col justify-end">
        <h3 className="text-white text-xl font-bold mb-2">{villa.name}</h3>
        <p className="text-white text-sm">{villa.description}</p>
      </div>
    </div>
  ))}
</div>





    </section>
  );
}
