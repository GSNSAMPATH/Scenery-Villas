'use client';

export default function Hero() {
  return (
    <section className="bg-white relative w-full h-[700px] md:h-screen overflow-hidden">
      {/* Optimized Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://res.cloudinary.com/diatamf9x/video/upload/f_auto,q_auto,w_1280,h_720,c_fill/v1755092614/Best_place_for_Family_gettogethers_Office_crew_outing_Treetop_Resort_by_Scenery_Villas_Bentota_-_Scenery_Villas_Sri_Lanka_720p_h264_lnjakm.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Gradient overlay - full width on mobile, half on larger */}
      <div className="absolute top-0 left-0 w-full sm:w-1/2 h-full bg-gradient-to-r from-yellow-500 to-transparent z-10 pointer-events-none" />

      {/* Text Content */}
      <div className="absolute top-1/2 left-[5%] -translate-y-1/2 z-20 max-w-[90%] sm:max-w-[450px] text-white text-left">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif mb-4 leading-tight ">
          Treetop Resort Villas
          
        </h1>
        <p className="text-base sm:text-xl md:text-2xl mb-6 mt-4 font-sans leading-snug">
         Spacious Five Bedroom Villa for Groups in Bentota – Treetop Resort
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
