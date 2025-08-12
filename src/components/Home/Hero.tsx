// components/Hero.tsx
"use client";

import Button from "../Button";

export default function Hero() {

  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
  window.location.href = "/bookpage";
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="https://res.cloudinary.com/diatamf9x/video/upload/v1754150334/intro.mp4_d4zljw.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />

        {/* Text content aligned to the left side */}
        <div className="absolute top-1/2 left-[5%] -translate-y-1/2 z-20 text-white max-w-[450px] text-left">
          <h1 className="text-5xl md:text-6xl font-serif mb-4 whitespace-nowrap">
            Scenery Villas
          </h1>
          <p className="text-xl md:text-2xl mb-6 mt-4 font-sans">
            Explore our beautiful villas, each crafted for comfort, style, and a memorable stay in Sri Lanka.
          </p>
          <Button color="white text-black" size="3" onClick={handleClick}>
            Contact Us
          </Button>
        </div>
    </section>
  );
}
