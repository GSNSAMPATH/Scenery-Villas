import VillaDescription from "@/components/tara-garden-vila/description";
import Hero from "./hero";


const primaryColor = "bg-orange-400";
const secondaryColor = "bg-gray-50";
const fontClass = "font-lobster";
const textColor = "#4B5563"; // gray-600
const titleColor = "#EA5D9A"; // amber-700

export default function Home() {
  return (
    <>
      <Hero />
      <VillaDescription
        name="Luxury Retreat – Villa Mandalay"
        description="
          Villa Mandalay is an exquisite villa located in the heart of Sri Lanka’s tropical paradise.
          This 5-bedroom retreat accommodates up to 12 guests and offers ultimate comfort and
          privacy. Guests can relax in the infinity pool, enjoy spacious outdoor lounges,
          and take in breathtaking views of the surrounding nature. Perfect for families or
          groups seeking luxury and tranquility."
        image="/Vilacollection/villa_mandalay_main.jpg"
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        fontClass={fontClass}
        textColor={textColor}
        titleColor={titleColor}
      />
    </>
  );
}
