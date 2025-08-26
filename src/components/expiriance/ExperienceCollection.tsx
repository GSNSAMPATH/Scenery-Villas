"use client";

import { lobster } from "@/app/googlefont";
import Image from "next/image";

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
              className="object-cover object-center h-30 w-full"
              sizes="(max-width: 640px) 100vw, 50vw "
              priority={index === 0}
            />
            <div
              className="absolute inset-0 bg-black/40 
                opacity-100 sm:opacity-100 sm:group-hover:opacity-100
                transition-opacity duration-300 p-5 flex flex-col justify-end"
            >
              <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-white text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
