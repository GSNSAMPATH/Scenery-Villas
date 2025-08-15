// import Hero from "@/components/treetop-vila/hero";

import VillaDescription from "@/components/tara-garden-vila/description";
import Hero from "@/components/treetop-vila/hero";

// export default function Home() {
//   return (
//     <>
//       <Hero />
      
//     </>
//   );
// }


const primaryColor = "bg-orange-400";
const secondaryColor = "bg-gray-50";
const fontClass = "font-lobster";
const textColor = "#000000ff"; // gray-600
const titleColor = "#16A34A"; // green-600

export default function Home() {
  return (
    <>
      <Hero/>
      <VillaDescription
        name="Luxury Family Villa in Kandy – Treetop Resort"
        description="
          Treetop Resort Villa is a luxurious getaway nestled in the lush hills of Kandy.
          This 4-bedroom villa accommodates up to 10 guests, offering a perfect blend of
          modern amenities and natural serenity. Guests can enjoy scenic views from the
          spacious deck, a private pool, and proximity to Kandy's top attractions."
        image="/Vilacollection/treetop_villa_main.jpg"
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        fontClass={fontClass}
        textColor={textColor}
        titleColor={titleColor}
      />
    </>
  );
}
