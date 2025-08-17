// import Hero from "@/components/treetop-vila/hero";

import GetExperience from "@/components/Home/GetExperience";
import VillaDescription from "@/components/tara-garden-vila/description";
import FeaturesSection from "@/components/tara-garden-vila/featues";
import Gallery from "@/components/tara-garden-vila/gallery-tara-garden";
import MapSection from "@/components/tara-garden-vila/map";
import Hero from "@/components/treetop-vila/hero";
import { FaBed, FaTree, FaParking, FaSwimmingPool, FaTv, FaSnowflake } from "react-icons/fa";
import { FiWifi } from "react-icons/fi";
import { GiChefToque } from "react-icons/gi";
import { MdOutlineKitchen, MdBathroom } from "react-icons/md";

// export default function Home() {
//   return (
//     <>
//       <Hero />
      
//     </>
//   );
// }

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


const primaryColor = "bg-orange-100";
const secondaryColor = "bg-gray-50";
const fontClass = "font-lobster";
const textColor = "#000000ff"; // gray-600
const titleColor = "#16A34A"; // green-600
const btnColor = "bg-orange-400";

export default function Home() {
  return (
    <>
      <Hero/>
      <VillaDescription
        name="Luxury Family Villa in Kandy – Treetop Resort"
        description="
          Treetop Resort is perfect for large groups looking for a private, spacious villa in Bentota. With 5 bedrooms accommodating up to 25 guests, it’s an ideal location for office outings, family reunions, or group vacations. The villa features a baby pool, making it kids-friendly and suitable for families. The villa’s expansive layout ensures there’s enough space for everyone, while the surrounding greenery provides a peaceful atmosphere. Whether you're planning a company retreat or a family gathering, Treetop Resort offers all the comfort and privacy you need."
        image="https://lh3.googleusercontent.com/d/1JOpbiOUmrE5XEYXzZEk2BODGV4xWRoWR"
        primaryColor={btnColor}
        secondaryColor={secondaryColor}
        fontClass={fontClass}
        textColor={textColor}
        titleColor={titleColor}
      />
      <FeaturesSection
        title="Villa One Features"
        bgColor={primaryColor}
        textColor = {titleColor}
        features={features}
        />
      <GetExperience 
        name={""} 
        description={""} 
        font={fontClass}
        titlecolor={titleColor} 
        bgColor={"bg-white"}
       />                  
      <Gallery
        title="Gallery"
        description="Tara Garden is a charming colonial villa that perfectly blends history with modern comforts."
        images={taraGardenImages}
        villaName="TreeTop Villa"
        primaryColor={primaryColor}
        titleColor={titleColor}
        btnColor={btnColor}
        fontClass={fontClass}
      />
      <MapSection
        title="Map by Scenery Villa"
        mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.562053466053!2d80.02785838338569!3d6.450227200386593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae22d31d1a7b78b%3A0x4cac9913e26791b2!2sTreetop%20Resort%20by%20Scenery%20Villas!5e0!3m2!1sen!2slk!4v1755358165302!5m2!1sen!2slk"
        streetViewSrc="https://www.google.com/maps/embed?pb=!4v1755358037036!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRGY0cWZ2Ymc.!2m2!1d6.450227200386593!2d80.02785838338569!3f113.96699501998148!4f-6.031832369001592!5f0.7820865974627469"
        contactEmail="villa@scenery.com"
        logo="/LogoTreetop.png"
        primaryColor={primaryColor}
        titleColor={titleColor}
        btnColor={btnColor}
        fontClass={fontClass}
      />
    </>
  );
}
