"use client";

import { lobster } from "@/app/googlefont";
import Image from "next/image";
import { title } from "process";
import { MdDescription } from "react-icons/md";

const experiences = [
  {
    title: "Bentota Beach",
    description: "Bentota Beach is a long, sandy beach with calm waters that are perfect for swimming and sunbathing. There are also a number of water sports operators offering activities such as surfing, paddleboarding, and kayaking. The beach is also home to a number of restaurants and bars, as well as a few hotels and resorts.",
    image: "https://res.cloudinary.com/diatamf9x/image/upload/v1756225071/g1_kasqyz.webp",
  },
  {
    title: "Aluthgama Beach",
    description: "Aluthgama Beach is a bit smaller than Bentota Beach, but it is equally beautiful. The beach is known forits strong waves, which make it a popular spot for surfing. There are also a number of other water sportsavailable, such as paddleboarding and kayaking. The beach is also home to a number of restaurants andbars, as well as a few hotels and resorts.",
    image: "https://res.cloudinary.com/diatamf9x/image/upload/v1756225071/g2_gwwost.webp",
  },
  {
    title: "Bentota Boat safari",
    description: "Glide along the serene river, your vessel guided by experienced local guides who possess an intimateknowledge of the area's hidden treasures and secrets. As you venture deeper into this enchantingecosystem, prepare to encounter a captivating array of creatures that call this verdant sanctuary home.",
    image: "https://res.cloudinary.com/diatamf9x/image/upload/v1756225072/g3_x7sdxy.webp",
  },
  {
    title: "Turtle hatchery Kosgoda",
    description: "Scattered along Sri Lanka's coast, turtle hatcheries serve as sanctuaries for endangered sea turtles,providing refuge, rehabilitation, and education. Visitors witness the delicate hatching process, hold tinyhatchlings, and release them back into the sea, fostering a connection to these remarkable creatures.",
    image: "https://res.cloudinary.com/diatamf9x/image/upload/v1756225072/g4_oadpuu.webp",
  },
  {
    title: "Bentota river water sports",
    description: "Feel the surge of adrenaline as you carve through the glistening waters on a jet ski, the wind whippingthrough your hair and the riverbanks blurring past your vision. Hold on tight as you experience theexhilarating twists and turns of water skiing, the spray of water refreshing your face as you glide acrossthe surface. Embark on a thrilling ride on a banana boat, bouncing along the waves and sharing laughterwith friends as you navigate the river's bends.",
    image: "https://res.cloudinary.com/diatamf9x/image/upload/v1756225072/g5_czhxe8.webp",
  },
  {
    title: "Bentota river fishing",
    description: "The Bentota River, winding its way through the lush landscapes of Sri Lanka, offers an angler's paradise,a haven where the thrill of catching a prized fish meets the serenity of nature's embrace. As you castyour line into the shimmering waters, anticipation builds, the gentle tug of the river promising arewarding encounter with the diverse aquatic life that thrives within its depths.",
    image: "https://res.cloudinary.com/diatamf9x/image/upload/v1756225071/g6_wuwvlu.webp",
  },
  {
    title: "Wood carvings and masks",
    description: "Tangalle Beach is a wide, palm-lined beach located in the southern part of Sri Lanka. It's less crowded and offers a peaceful atmosphere for sunbathing and swimming. Tangalle is also known for its rich marine biodiversity.",
    image: "https://res.cloudinary.com/diatamf9x/image/upload/v1756225075/g7_yqn0d2.webp",
  },
  {
    title: "Kandeviharaya temple",
    description: "As you approach the temple, a sense of calm washes over you, the gentle breeze carrying the soothingsounds of chanting monks. The air is filled with the fragrance of incense, mingling with the sweet aromaof frangipani flowers that adorn the temple grounds. Step inside the temple's main hall, and your eyes are immediately drawn to the magnificent Buddhastatue, its serene expression radiating an aura of peace.", 
    image: "https://res.cloudinary.com/diatamf9x/image/upload/v1756225074/g8_zdwsvt.webp",
  },
  {
    title: "Ayurveda",
    description: "nder the guidance of experienced Ayurvedic practitioners, you will undergo a comprehensiveassessment to determine your unique constitution, or prakriti. This assessment involves observing yourphysical characteristics, analyzing your lifestyle habits, and understanding your emotional tendencies. Based on your prakriti, a personalized treatment plan will be tailored to address your specific needs.",
    image: "https://res.cloudinary.com/diatamf9x/image/upload/v1756225073/g9_n1hhk8.webp",
  },
  {
    title: "Beruwala fish market",
    description: "The bustling Beruwala Fish Market, nestled along the vibrant coastline of Sri Lanka, is a kaleidoscope ofcolors, aromas, and sounds, a testament to the island's rich fishing heritage and culinary traditions. Asyou step into this lively marketplace, your senses are immediately awakened by the vibrant hues offreshly caught seafood, the tantalizing aroma of spices wafting through the air, and the lively chatter ofvendors and buyers.",    
    image: "https://res.cloudinary.com/diatamf9x/image/upload/v1756225073/g10_mnkhh5.webp",  
  },
  {
    title: "Get More Experience with Scenery",
    //description: "nder the guidance of experienced Ayurvedic practitioners, you will undergo a comprehensiveassessment to determine your unique constitution, or prakriti. This assessment involves observing yourphysical characteristics, analyzing your lifestyle habits, and understanding your emotional tendencies. Based on your prakriti, a personalized treatment plan will be tailored to address your specific needs.",
    image: "https://res.cloudinary.com/diatamf9x/image/upload/v1756225073/kevin-olson-ScBHbYokiQE-unsplash_atallt.webp",
  },
  {
    title:"Brief garden",
    description:"A sanctuary of tranquility and botanical wonders. Once a rubber plantation, this enchanting estate hasbeen transformed into a masterpiece of landscape architecture, a testament to the visionary artistry ofBevis Bawa. As you step through the garden's gates, a sense of serenity washes over you, the gentle rustling of leavesand the chirping of birds creating a symphony of nature's embrace. Meandering pathways, adorned withvibrant blooms and verdant foliage, beckon you to explore the garden's hidden treasures.",
    image: "https://res.cloudinary.com/diatamf9x/image/upload/v1756225073/g11_b6xl5c.webp",
  }

];


export default function ExperienceCollection() {
  return (
    <div className="bg-[var(--background0)] py-10 px-6 ">
      {/* Heading */}


      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10  mx-auto md:max-w-7xl mb-10">
        {experiences.map((item, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden shadow-lg group border-1 border-white transform transition-transform duration-500 hover:scale-[1.03] animate-fade-in aspect-[5/6] sm:aspect-[4/3] h-120 w-full"
            style={{ animationDelay: `${index * 150}ms`, animationFillMode: "both" }}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover object-center h-20 w-full"
              sizes="(max-width: 640px) 100vw, 50vw "
              priority={index === 0}
            />
            <div
              className="absolute inset-0 bg-black/40 
                opacity-100 sm:opacity-100 sm:group-hover:opacity-100
                transition-opacity duration-300 p-5 flex flex-col justify-end"
            >
              <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-white text-lg text-left">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
