"use client";

import Image from "next/image";
import Button from "../Button";

export default function GetExperience() {
  return (
    <section className="bg-[var(--background0)] py-30 px-6 md:px-20 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 animate-fade-in text-left">
          <h2 className="text-4xl font-bold text-black mb-6">Get Experience</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
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
          <Button color="black text-white" size="3">
            Explore More
          </Button>
        </div>

        {/* Right Image Card - Landscape */}
        {/* <div className="flex-1 animate-fade-in flex justify-center"> */}
          <div className="bg-white border border-white rounded-2xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 w-[680px] h-[500px]">
            <Image
              src="/Vilacollection/0000001848.jpg"
              alt="Experience"
              width={680}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      {/* </div> */}
    </section>
  );
}
