import VillaDescription from "@/components/tara-garden-vila/description";
import Hero from "./hero";
import FeaturesSection from "@/components/tara-garden-vila/featues";
import { FaBed, FaTree, FaParking, FaSwimmingPool, FaTv, FaSnowflake } from "react-icons/fa";
import { FiWifi } from "react-icons/fi";
import { GiChefToque } from "react-icons/gi";
import { MdOutlineKitchen, MdBathroom } from "react-icons/md";
import MapSection from "@/components/tara-garden-vila/map";
import Gallery from "@/components/tara-garden-vila/gallery-tara-garden";
import GetExperience from "@/components/Home/GetExperience";

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

const taraGardenImages = [
   "https://drive.google.com/uc?export=download&id=1LjlM9s8mDob5CEAoBzUrVvwmvksrtJ9P",
   "https://drive.google.com/uc?export=download&id=14iNmda_yhHtOHiedOyd_qd6akB4jhcH2",
   "https://drive.google.com/uc?export=download&id=1uHvZaODcKHWbcmozpHj1XNdBooCeDCp_",
   "https://drive.google.com/uc?export=download&id=1rGcRYh_iPK3cdwT5Vuk5p09WytAkyBMs",
];



const primaryColor = "bg-orange-400";
const bgColor0 = "bg-orange-100";
const secondaryColor = "bg-gray-50";
const fontClass = "font-nunito";
const textColor = "#4B5563"; // gray-600
const titleColor = "#EA5D9A"; // amber-700
const btnColor = "bg-orange-400";
export default function Home() {
  return (
    <>
      <Hero />
      <VillaDescription
        name="Family Friendly Three Bedroom Villa in Bentota - Villa Mandalay"
        description="
          Villa Mandalay is a peaceful retreat for families looking to unwind in Bentota. This 3-bedroom villa accommodates up to 7 guests and is designed with families in mind. The baby pool offers a safe and fun space for children, while the surrounding countryside provides a serene backdrop for relaxation. Enjoy spacious bedrooms, a comfortable living area, and plenty of outdoor space to soak up the beauty of Bentota. Whether you're lounging by the baby pool or exploring the nearby attractions, Villa Mandalay is the perfect base for your family holiday."
        image="https://lh3.googleusercontent.com/d/1NydD--eQ-ZxYy_5Xq_bttVMjZwCNGzhv"
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        fontClass={fontClass}
        textColor={textColor}
        titleColor={titleColor}
      />
      <FeaturesSection
        title="Villa One Features"
        bgColor={bgColor0}
        textColor = {titleColor}
        features={features}
        titleColor={titleColor}
        fontClass={fontClass}
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
        villaName="Villa Mandalay"
        primaryColor={bgColor0}
        titleColor={titleColor}
        btnColor={btnColor}
        fontClass={fontClass}
        />              
      <MapSection
        title="Map by Scenery Villa"
        bgColor="bg-white"
        mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.56147319093!2d80.02268447928022!3d6.450301376887283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae22dc65a994b87%3A0x10f4d014bef0a799!2sVilla%20Mandalay%20by%20Scenery%20Villas%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1755344043422!5m2!1sen!2slk"
        streetViewSrc="https://www.google.com/maps/embed?pb=!4v1755355883176!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJREg0TWZ6S2c.!2m2!1d6.450236102438017!2d80.0275312745208!3f324.9880977966791!4f-1.0620615719108883!5f0.7820865974627469"
        contactEmail="villa@scenery.com"
        logo="/mandalayvillalogo.png"
        btnColor={btnColor}
        titleColor={titleColor}
        fontClass={fontClass}
       
        />
       
    </>
  );
}
