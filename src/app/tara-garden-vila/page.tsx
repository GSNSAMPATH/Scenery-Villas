import Hero from "@/components/tara-garden-vila/hero";
import VillaDescription from "@/components/tara-garden-vila/description";
import FeaturesSection from "@/components/tara-garden-vila/featues";
import Gallery from "@/components/tara-garden-vila/gallery-tara-garden";
import MapSection from "@/components/tara-garden-vila/map";
import { FaBed, FaParking, FaSnowflake, FaSwimmingPool, FaTree, FaTv, FaWifi } from "react-icons/fa";
import { FiWifi } from "react-icons/fi";
import { GiChefToque } from "react-icons/gi";
import { MdOutlineKitchen, MdBathroom } from "react-icons/md";
import GetExperience from "@/components/Home/GetExperience";

const primaryColor = "bg-red-600";
const bgColor0 = "bg-yellow-100";
const secondaryColor = "bg-gray-50";
const fontClass = "font-lato";
const textColor = "#4B5563"; // gray-600
const titleColor = "#654632";
const btnColor = "bg-green-700"; // amber-700

const taraGardenImages = [
   "https://drive.google.com/uc?export=download&id=1LjlM9s8mDob5CEAoBzUrVvwmvksrtJ9P",
   "https://drive.google.com/uc?export=download&id=14iNmda_yhHtOHiedOyd_qd6akB4jhcH2",
   "https://drive.google.com/uc?export=download&id=1uHvZaODcKHWbcmozpHj1XNdBooCeDCp_",
   "https://drive.google.com/uc?export=download&id=1rGcRYh_iPK3cdwT5Vuk5p09WytAkyBMs",
];

const features = [
  { icon: <FaBed />, text: '4 Bedrooms' },
  { icon: <FaTree />, text: 'Private garden' },
  { icon: <FaParking />, text: 'Free parking on premise' },
  { icon: <FaSwimmingPool />, text: 'Private Pool' },
  { icon: <MdOutlineKitchen />, text: 'Kitchen' },
  { icon: <FaTv />, text: 'TV' },
  { icon: <MdBathroom />, text: 'Washroom' },
  { icon: <FaSnowflake />, text: 'Air Condition' },
  { icon: <GiChefToque />, text: 'Private chef' },
  { icon: <FiWifi />, text: 'Wifi' },
];

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
        textColor={textColor}
        titleColor={titleColor}
      />

      <FeaturesSection
        title="Villa One Features"
        bgColor="bg-yellow-100"
        textColor="text-blue-600"
        titleColor={titleColor}
        features={features}
    />

      <GetExperience 
      name={""} 
      description={""} 
      font={fontClass}
      titlecolor={titleColor} 
      bgColor={"bg-white"}/>

    <Gallery
      title="Gallery"
      description="Tara Garden is a charming colonial villa that perfectly blends history with modern comforts."
      images={taraGardenImages}
      villaName="Tara Garden"
      primaryColor={bgColor0}
      titleColor={titleColor}
      btnColor={btnColor}
    />

    <MapSection
      title="Map by Scenery Villa"
      mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1982.291131168939!2d80.03540055271188!3d6.447643372559895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae22dbe17f64441%3A0x918002d13fb4835a!2sTara%20Garden%20by%20Scenery%20Villas%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1755343520866!5m2!1sen!2slk"
      streetViewSrc=""
      contactEmail="villa@scenery.com"
      logo="/scenery.png"
      bgColor="bg-white"
    />

    </>
  );
}
