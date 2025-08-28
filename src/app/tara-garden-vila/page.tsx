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
const bgColor0 = "bg-blue-200";
const secondaryColor = "bg-gray-50";
const fontClass = "font-lato";
const textColor = "#4B5563"; // gray-600
const titleColor = "#654632";
const btnColor = "bg-green-700"; // amber-700

const taraGardenImages = [
      "https://lh3.googleusercontent.com/d/16DKoTibgCmyBlcbkDqeoRwa-lJrJmg8s",
      "https://lh3.googleusercontent.com/d/1dTS4mFWZutJwuBbnXgyIJgkvx7ynzbmM",
      "https://lh3.googleusercontent.com/d/1a_2TnSYdajXvbWhceZptzS0qGpPZ-vvg",
      "https://lh3.googleusercontent.com/d/1pokMA3ZCzGYGU4Z8Xtm7p1De9N-j7yXM",
      "https://lh3.googleusercontent.com/d/10ALOZAYdtGJyN5ghFPXMDmw5hMd7y9FA",
      "https://lh3.googleusercontent.com/d/1VzmBlOxKv-tdPzkEOuHt3T0vxgdxIU_d",
      "https://lh3.googleusercontent.com/d/1vHNHa2wwA3sOCSeqaAempf5JQ8kMQV0N",
      "https://lh3.googleusercontent.com/d/1Zqs1O6DsFbdEqFZA6M919gvp0n90vXbA",
      "https://lh3.googleusercontent.com/d/1XGKvT7QJdRYp0Em2iUyWgkzq860LZ9L9",
      "https://lh3.googleusercontent.com/d/1I7OF6M1OlK9aFkClxVbG48qTREVny1dk",
      "https://lh3.googleusercontent.com/d/1sXz1ADaYKgICdmt5exaYixTjMXTXTF1X",
      "https://lh3.googleusercontent.com/d/1rvtUj7nCdZ4_VyH3drsbGDO5UEwHXYFo",
      "https://lh3.googleusercontent.com/d/1IB6IOO5ntlHCrZaM6a3UlNJyUoHNMXRC",
      "https://lh3.googleusercontent.com/d/1pjw-Jx6utKSuuc00Efq_XphUepTh4qfK",
      "https://lh3.googleusercontent.com/d/1J6aTIEnct7oRiiMcxhFlKRwvmzTAQSOP",
      "https://lh3.googleusercontent.com/d/1nflsRci7sE_4-jJr0ngpk6uXVRNur-_1",
      "https://lh3.googleusercontent.com/d/1sMs_ScSmkakalp8iFNpEFLNX6yns5EM9",
      "https://lh3.googleusercontent.com/d/19WycUKUcOwDsP5qJX-3q7Kub2bgYwmVO",
      "https://lh3.googleusercontent.com/d/1nfqJ4hYXJU6TQd3yzKPRadvWbfJBCz_0",
      "https://lh3.googleusercontent.com/d/1xOfkvxWzGjW8FlnWsdA-x7kwVTueZaUB",
      "https://lh3.googleusercontent.com/d/1dIK1DhBLysNquT_jhITDvtvdEjAoEZ_i",
      "https://lh3.googleusercontent.com/d/1uHvZaODcKHWbcmozpHj1XNdBooCeDCp_",
      "https://lh3.googleusercontent.com/d/14iNmda_yhHtOHiedOyd_qd6akB4jhcH2",
      "https://lh3.googleusercontent.com/d/1BdT3SSg3LV4hhx-Da7K69InQoLTFfeSU",
      "https://lh3.googleusercontent.com/d/1rGcRYh_iPK3cdwT5Vuk5p09WytAkyBMs",
      "https://lh3.googleusercontent.com/d/1LjlM9s8mDob5CEAoBzUrVvwmvksrtJ9P",
      "https://lh3.googleusercontent.com/d/1cojznQUBEOYkokmwiu_SzavdunNgQYBZ",
      "https://lh3.googleusercontent.com/d/1M-nh1MLsFrZ30f0NYzX4xM-VVMRds50J",
      "https://lh3.googleusercontent.com/d/1zXNo5OjkFL7zDZGmbjLZUuPMAtYM68fU",
      "https://lh3.googleusercontent.com/d/1Q14ueF-72XFgV905UDLpFkJ4oJw_UvB1",
      "https://lh3.googleusercontent.com/d/1ikUV6BrV04nIfA5jlFYNC1eb6jddrupf",
      "https://lh3.googleusercontent.com/d/16nnZWiLXx0LKpmyRIGDbUKjmIm92YbtL",
      "https://lh3.googleusercontent.com/d/15_EB3PQ93Ri0ltgxdWBvYD1djj5FEQEB",
      "https://lh3.googleusercontent.com/d/1Mghtvv2cn5RkS7cS5KUEMpsQBS1Q9fnD",

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
      <Hero/>
      <VillaDescription
        name="Colonial Style Four Bedroom Family Villa in Bentota - Tara Garden"
        description="
             Tara Garden is a charming colonial villa that perfectly blends history with modern comforts. Set amidst tropical greenery, this 4-bedroom villa accommodates up to 8 guests and offers a tranquil space for families to unwind. The villa’s colonial architecture adds a touch of elegance, while the baby pool ensures children are well entertained."
        image="/Vilacollection/DSC02837HDR-2.jpg"
        primaryColor={btnColor}
        secondaryColor={secondaryColor}
        fontClass={fontClass}
        textColor={textColor}
        titleColor={titleColor}
      />
      <FeaturesSection
        title="Villa One Features"
        bgColor={bgColor0}
        textColor="text-blue-600"
        titleColor={titleColor}
        features={features}
        fontClass={fontClass}
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
        villaName="Tara Garden"
        primaryColor={bgColor0}
        titleColor={titleColor}
        btnColor={btnColor}
        fontClass={fontClass}
        />
      <MapSection
        title="Map by Scenery Villa"
        mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1982.291131168939!2d80.03540055271188!3d6.447643372559895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae22dbe17f64441%3A0x918002d13fb4835a!2sTara%20Garden%20by%20Scenery%20Villas%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1755343520866!5m2!1sen!2slk"
        streetViewSrc=""
        contactEmail="villa@scenery.com"
        logo="/2.png"
        bgColor="bg-white"
        btnColor={btnColor}
        titleColor={titleColor}
        fontClass={fontClass}
    />

    </>
  );
}

