// // components/MapSection.tsx
// 'use client';

// import React from 'react';

// export default function MapSection() {
//   return (
//     <section className="bg-white text-center py-10">
//       {/* Title */}
//       <h2 className="text-2xl md:text-3xl font-bold text-brown-800">
//         Map by Tara Garden
//       </h2>

//       {/* Contact Button */}
//       <a
//         href="mailto:youremail@example.com"
//         className="inline-block mt-3 px-6 py-2 bg-green-700 text-white font-semibold rounded-full hover:bg-green-800 transition"
//       >
//         Contact us
//       </a>

//       {/* Map & Street View */}
//       <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 px-6">
//         {/* Google Map */}
//         <div
//           className="flex-1 bg-gray-200 rounded-lg overflow-hidden shadow-lg cursor-pointer"
//           style={{ height: '300px' }}
//           onClick={() =>
//             window.open(
//               'https://www.google.com/maps/dir/?api=1&destination=Your+Villa+Name+Address',
//               '_blank'
//             )
//           }
//         >
//           <iframe
//             src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAPS_EMBED_CODE"
//             width="100%"
//             height="100%"
//             style={{ border: 0 }}
//             allowFullScreen
//             loading="lazy"
//           ></iframe>
//         </div>

//         {/* Street View */}
//         <div
//           className="w-full md:w-72 bg-gray-500 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
//           style={{ height: '300px' }}
//         >
//           <iframe
//             src="https://www.google.com/maps/embed?pb=YOUR_STREET_VIEW_EMBED_CODE"
//             width="100%"
//             height="100%"
//             style={{ border: 0 }}
//             allowFullScreen
//             loading="lazy"
//           ></iframe>
//         </div>
//       </div>

//       {/* Logo */}
//       <div className="mt-6">
//         <img
//           src="/2.png"
//           alt="Tara Garden Logo"
//           className="mx-auto w-48"
//         />
//       </div>
//     </section>
//   );
// }


interface MapSectionProps {
  title: string;
  mapSrc: string;         // Google Maps Embed link
  streetViewSrc: string;  // Google 360° Street View embed link
  contactEmail: string;
  logo: string;
  primaryColor?: string;
  bgColor?: string
}

export default function MapSection({
  title,
  mapSrc,
  streetViewSrc,
  contactEmail,
  logo,
  primaryColor = "bg-white",
  bgColor = "bg-white"
}: MapSectionProps) {
  return (
    <section className= {`${bgColor} text-center py-30`}>
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-brown-800">{title}</h2>

      {/* Contact Button */}
      <a
        href={`mailto:${contactEmail}`}
        className="inline-block mt-3 px-6 py-2 bg-green-700 text-white font-semibold rounded-full hover:bg-green-800 transition md:mb-20"
      >
        Contact Us
      </a>

      {/* Map + 360° View */}
      <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 px-6">
        {/* Google Maps */}
        <div className="flex-1 bg-gray-200 rounded-lg overflow-hidden shadow-lg" style={{ height: "500px" }}>
          <iframe
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* 360° Street View */}
        <div className="md:absolute md:align-right md:right-70 w-full md:w-100 bg-gray-500 rounded-2xl overflow-hidden shadow-lg" style={{ height: "600px" }}>
          <iframe
            src={streetViewSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Logo */}
      <div className="mt-6">
        <img src={logo} alt={`${title} Logo`} className="mx-auto w-48" />
      </div>
    </section>
  );
}
