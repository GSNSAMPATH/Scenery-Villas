// components/Hero.tsx
"use client";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/intro.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      {/* <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">Welcome!</h1>
        <p className="text-2xl sm:text-4xl italic mb-2">
          Colonial Style Four Bedroom Family
        </p>
        <p className="text-xl sm:text-2xl font-bold mb-6">
          Villa in Bentota – Tara Garden
        </p>
        <a
          href="#contact"
          className="inline-block bg-accent text-buttonText font-semibold px-6 py-3 rounded-full shadow-lg hover:opacity-90 transition"
        >
          Contact us
        </a>
        <p className="mt-6 font-bold">scroll down here ⏷</p>
      </div> */}
    </section>
  );
}
