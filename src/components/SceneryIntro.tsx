"use client";

import Button from "./Button";

export default function SceneryIntro() {
  return (
    <section className="bg-white text-gray-800 py-40 px-4 sm:px-8 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Scenery Villas Sri Lanka
        </h1>

        {/* Introduction Text */}
        <p className="text-base sm:text-lg mb-4 max-w-6xl mx-auto">
          Welcome to Scenery Villas, A collection of four private villas in Bentota, Sri Lanka. Each villa offers a unique experience designed for families and groups seeking a serene, comfortable retreat. Whether you&apos;re planning a family vacation, a group outing, or simply a relaxing getaway, Scenery Villas provides spacious accommodations, kids-friendly facilities, and tranquil surroundings.
        </p>

        {/* Book Now Button */}
        <div className="mb-20">
          <Button color="yellow-400" size="3">
            Book Now
          </Button>
        </div>

        {/* Collection Title */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Our Collection</h2>

        {/* Villas Description */}
        <div className="text-center text-base sm:text-lg max-w-6xl mx-auto space-y-4">
          <p>
            Villa Mandalay is a cozy 3-bedroom villa for up to 7 guests, featuring spacious living areas and a baby pool, ideal for families. Nearby, Tara Garden is a beautiful 4-bedroom colonial villa nestled in lush gardens, accommodating 8 guests and also offering a baby pool. For larger gatherings, Treetop Resort provides a spacious 5-bedroom villa for up to 25 guests, complete with a baby pool. Finally, Villa Desire is a private 6-bedroom villa for 12 guests, located 2 km from Bentota Beach, perfect for families or groups seeking a peaceful escape.
          </p>
        </div>
      </div>
    </section>
  );
}
