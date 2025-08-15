import Hero from "@/components/tara-garden-vila/hero";
import VillaDescription from "@/components/tara-garden-vila/description";
import FeaturesSection from "@/components/tara-garden-vila/featues";
import Gallery from "@/components/tara-garden-vila/gallery-tara-garden";
import MapSection from "@/components/tara-garden-vila/map";

const primaryColor = "bg-red-600";
const secondaryColor = "bg-gray-50";
const fontClass = "font-lobster";

export default function Home() {
  return (
    <>
      <Hero 
        // primaryColor={primaryColor} 
        // secondaryColor={secondaryColor} 
        // fontClass={fontClass} 
      />

      <VillaDescription
        name="Colonial Style Four Bedroom Family Villa in Bentota - Tara Garden"
        description="
             Tara Garden is a charming colonial villa that perfectly blends history
             with modern comforts. Set amidst tropical greenery, this 4-bedroom
             villa accommodates up to 8 guests and offers a tranquil space for
             families to unwind. The villa’s colonial architecture adds a touch of
             elegance, while the baby pool ensures children are well entertained.
             Nearby, Tara Garden is a beautiful 4-bedroom colonial villa nestled in
             lush gardens, accommodating 8 guests and also offering a baby pool."
        image="/Vilacollection/DSC02837HDR-2.jpg"
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        fontClass={fontClass}
      />

      {/* <FeaturesSection 
        primaryColor={primaryColor} 
        secondaryColor={secondaryColor} 
        fontClass={fontClass} 
      /> */}

      {/* <Gallery 
        primaryColor={primaryColor} 
        secondaryColor={secondaryColor} 
        fontClass={fontClass} 
      /> */}

      {/* <MapSection 
        primaryColor={primaryColor} 
        secondaryColor={secondaryColor} 
        fontClass={fontClass} 
      /> */}
    </>
  );
}
