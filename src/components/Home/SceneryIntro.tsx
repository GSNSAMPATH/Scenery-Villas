"use client";

import { dmSans, lobster } from "@/app/googlefont";
import Button from "../Button";

const welcomeText = `Welcome to Scenery Villas, A collection of four private villas in Bentota, Sri Lanka.
Each villa offers a unique experience designed for families and groups seeking a serene,
comfortable retreat. Whether you're planning a family vacation, a group outing, or
simply a relaxing getaway, Scenery Villas provides spacious accommodations,
kids-friendly facilities, and tranquil surroundings.`;

export default function SceneryIntro() {
  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    window.location.href = "/bookpage";
  }
  
  return (
    <section className="bg-white text-gray-800 py-25 px-4 sm:px-8 lg:px-24">
      <div className="max-w-6xl mx-auto text-center sm:mb-20 sm:mt-20">
        {/* Heading */}
        <h1 className={`${lobster.className} text-4xl sm:text-5xl font-bold mt-8 mb-18 text-green-900`}>
          Scenery Villas Sri Lanka
        </h1>

        {/* Introduction Text */}
        <p className={`${dmSans.className} text-base sm:text-2xl mb-10 max-w-4xl mx-auto`}>
          {welcomeText}
        </p>

        {/* Book Now Button */}
        <div className="mb-6 ">
          <Button color="black text-white" size="3" onClick={handleClick}>Book Now</Button>
        </div>
      </div>

    </section>
  );
}
