'use client';

export default function Hero() {
  return (
    <section className="bg-white relative w-full h-[700px] md:h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://res.cloudinary.com/diatamf9x/video/upload/v1754416652/videoplayback_wxsr8s.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Text Content */}
      <div className="absolute top-1/2 left-[5%] -translate-y-1/2 z-20 max-w-[450px] text-white text-left">
        <h1 className="text-5xl md:text-6xl font-serif mb-4 whitespace-nowrap">
          Spacious Five Bedroom Villa for Groups
        </h1>
        <p className="text-xl md:text-2xl mb-6 mt-4 font-sans">
          in Bentota – Treetop Resort
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-100 transition">
          Contact Us
        </button>
      </div>

      {/* Scroll Down Icon */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center z-20 animate-bounce">
        <div className="mb-1 text-sm">Scroll Down</div>
        <div className="text-2xl">⬇️</div>
      </div>
    </section>
  );
}