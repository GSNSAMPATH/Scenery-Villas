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
"https://lh3.googleusercontent.com/d/1kXRX7OeZw68A3ygYe52kovHLKMMalaSm",
"https://lh3.googleusercontent.com/d/1JOpbiOUmrE5XEYXzZEk2BODGV4xWRoWR",
"https://lh3.googleusercontent.com/d/1GyMQyCofaIUap275uGJygprROfsU3z6g",
"https://lh3.googleusercontent.com/d/16k1Bv6VcUSIE-CKeu5I7rds0FRGUTORC",
"https://lh3.googleusercontent.com/d/1IjX1bnVDb665OEOC2l6BU-4--v83SaCx",
"https://lh3.googleusercontent.com/d/1h4hR82_yb-bk3ffRzZGnh4gT2qeiGnaT",
"https://lh3.googleusercontent.com/d/16625r-u2VSs9YgK896WGIqkgjvqGtN3j",
"https://lh3.googleusercontent.com/d/1Uoqxjr8OhWPVnSu1Iz9JsPVbkCbD3ILi",
"https://lh3.googleusercontent.com/d/16x13MXKjv3A_qe646x-xjZNLpebnnmUY",
"https://lh3.googleusercontent.com/d/1isl3IF8hdXMQnG9E2ZEzJywWUUeY6HsG",
"https://lh3.googleusercontent.com/d/1tt851PGrbH-C6frVgi6Amyad6mD2beO7",
"https://lh3.googleusercontent.com/d/15nPr3qUl7uNa6Y13uqStonmrOhc4oc2m",
"https://lh3.googleusercontent.com/d/16kvjHaNRWStqDVN8mTsRg5kORDV3yRsz",
"https://lh3.googleusercontent.com/d/1RNrSe3JvxIfxNz5zeVgxsXGxeevTdNS4",
"https://lh3.googleusercontent.com/d/13DH_cXcXplga4dKctYvf8wUP4ezkhJRY",
"https://lh3.googleusercontent.com/d/1hh5yGcQA9qouhPcuaW7-w2WinnT7ryZd",
"https://lh3.googleusercontent.com/d/13OoOhGNwWJyuWG37BZhm6wdJbdD4lPTV",
"https://lh3.googleusercontent.com/d/1G-8ugDFmYKNk0-KO2pP6DaqIqPdhQZ4f",
"https://lh3.googleusercontent.com/d/1Yo1IZ0_Srr2Hi6XSUo4jGwAm5B4F7I6J",
"https://lh3.googleusercontent.com/d/1Kjsd-KhqR3qMUMNsyh589IdjBbOPSD3V",
"https://lh3.googleusercontent.com/d/1xicRsXGc0ZZOprnYQKgu3pcHrmq_-PGS",
"https://lh3.googleusercontent.com/d/10RUt-5nLJ6uqMMo4c91M4qj3fYk2OReg",
"https://lh3.googleusercontent.com/d/15YyyeSw00nqY_R9i0R2VYGNNgxZwp3rD",
"https://lh3.googleusercontent.com/d/18ZmqUGqGcTPL6Bj0GBiI-N4iRSx_BQCs",
"https://lh3.googleusercontent.com/d/1OYJTai1Ufg1mIizDH4z-fuDaq_b2kfdF",
"https://lh3.googleusercontent.com/d/1C3JPp5N3bCkxBCQBBBo7rzWFPRvHEYNq",
"https://lh3.googleusercontent.com/d/11HbTTnYtAh1zzGBTZFmOGWULtZqy2pFb",
"https://lh3.googleusercontent.com/d/1QVo-ie2nc613ruZ5P7fGG95ciWm5o4md",
"https://lh3.googleusercontent.com/d/1wFhL391bUepWNtbEHprbZJtlFgTnvqeI",
"https://lh3.googleusercontent.com/d/1PfOgAgzQzg1avF2fXLBotn2oHxOGFLgy",
"https://lh3.googleusercontent.com/d/1W_hKlSiz8kDA_xyxaRPrWPau-koqBxPT",
"https://lh3.googleusercontent.com/d/1GVChdsEq931U7xTnBAXQMcLzF8bwCq_Z",
"https://lh3.googleusercontent.com/d/1nQ1ywS5Qj_RSv0OFjVhwSWiB6SpgoqNN",
"https://lh3.googleusercontent.com/d/1y0SCraw1WiVDSwmwgHDNzHHkhx8N9JQ4",
"https://lh3.googleusercontent.com/d/1m6is-9hsujQNX8_ycenAegfJVZVl8kzm",
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
