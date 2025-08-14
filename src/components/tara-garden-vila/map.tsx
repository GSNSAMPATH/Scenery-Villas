// components/MapSection.tsx
'use client';

import React from 'react';

export default function MapSection() {
  return (
    <section className="bg-white text-center py-10">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-brown-800">
        Map by Tara Garden
      </h2>

      {/* Contact Button */}
      <a
        href="mailto:youremail@example.com"
        className="inline-block mt-3 px-6 py-2 bg-green-700 text-white font-semibold rounded-full hover:bg-green-800 transition"
      >
        Contact us
      </a>

      {/* Map & Street View */}
      <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 px-6">
        {/* Google Map */}
        <div
          className="flex-1 bg-gray-200 rounded-lg overflow-hidden shadow-lg cursor-pointer"
          style={{ height: '300px' }}
          onClick={() =>
            window.open(
              'https://www.google.com/maps/dir/?api=1&destination=Your+Villa+Name+Address',
              '_blank'
            )
          }
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAPS_EMBED_CODE"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Street View */}
        <div
          className="w-full md:w-72 bg-gray-500 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
          style={{ height: '300px' }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=YOUR_STREET_VIEW_EMBED_CODE"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Logo */}
      <div className="mt-6">
        <img
          src="/2.png"
          alt="Tara Garden Logo"
          className="mx-auto w-48"
        />
      </div>
    </section>
  );
}
