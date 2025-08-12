"use client";

import Image from "next/image";
import Button from "../Button";
import { dmSans, lobster } from "@/app/googlefont";
import { Console } from "console";

export default function GetExperience() {
  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    window.location.href = "/experience"
  }

  return (
    <section className="bg-[var(--background0)] py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 animate-fade-in text-left">
          <h2 className={`${lobster.className} text-4xl sm:text-5xl font-bold mb-6 text-green-900`}>Get Experience</h2>
         
          <p className={`${dmSans.className} text-base sm:text-2xl mb-10 max-w-4xl mx-auto`}>
            {/* text-gray-700 text-lg leading-relaxed mb-8" */}
            Bentota offers a wonderful mix of experiences for every traveler.
            Enjoy thrilling watersports like jet skiing and snorkeling in its
            beautiful blue waters, or take a relaxing boat ride along the
            Bentota River to explore lush mangroves and spot wildlife. For those
            looking to unwind, the sandy beaches are perfect for soaking up the
            sun, or you can treat yourself to a soothing Ayurvedic spa treatment.
            Don’t forget to explore the local culture through nearby temples and
            markets, all while savoring delicious Sri Lankan cuisine. Bentota is
            truly a tropical paradise that has something for everyone!
          </p>
          <Button color="black text-white" size="3"  onClick={handleClick} >
            Explore More
          </Button>
        </div>

        {/* Right Image Card - Responsive */}
        <div className="relative flex-1 animate-fade-in w-full max-w-md md:max-w-none md:w-[680px] aspect-[680/500] bg-white border border-white rounded-2xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 mx-auto md:mx-0">
          <Image
            src="https://res.cloudinary.com/diatamf9x/image/upload/v1754319469/WhatsApp_Image_2025-08-03_at_10.37.26_4eeba235_ciwzn2.jpg"
            alt="Experience"
            fill
            sizes="(max-width: 768px) 100vw, 680px"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
