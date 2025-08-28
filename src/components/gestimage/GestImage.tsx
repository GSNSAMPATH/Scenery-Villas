"use client";
import Image from "next/image";

const guestImages = [
  { id: 1, src: "https://thumbs.dreamstime.com/z/cute-smiling-girl-wonderful-cute-white-smile-red-lips-look-sunset-sit-hills-mountains-summer-has-good-time-69895542.jpg?ct=jpeg", name: "Sophia" },
  { id: 2, src: "https://thumbs.dreamstime.com/z/smiling-young-pretty-girl-sitting-grass-25817110.jpg?ct=jpeg", name: "Matthew" },
  { id: 3, src: "https://thumbs.dreamstime.com/z/young-cute-woman-posing-green-park-cheerful-62977900.jpg?ct=jpeg", name: "Ava" },
  { id: 4, src: "https://thumbs.dreamstime.com/z/cute-baby-green-park-caucasian-boy-summer-40431747.jpg?ct=jpeg", name: "Daniel" },
  { id: 5, src: "https://thumbs.dreamstime.com/z/young-man-park-laptop-sitting-grass-40270977.jpg?ct=jpeg", name: "Christopher" },
  { id: 6, src: "https://thumbs.dreamstime.com/z/cute-smiling-girl-wonderful-cute-white-smile-red-lips-look-sunset-sit-hills-mountains-summer-has-good-time-69895542.jpg?ct=jpeg", name: "Melinda" },
];

export default function GuestImages() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Guest Moments at <span className="text-orange-500">Villa Mandalay</span>
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Our lovely guests enjoying their time. Share your photos and be part of the Villa Mandalay story!
          </p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {guestImages.map((img) => (
            <div
              key={img.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition relative"
            >
              <Image
                src={img.src}
                alt={img.name}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center py-2">
                {img.name}
              </div>
            </div>
          ))}
        </div>

        {/* Upload Section */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-4">Want to share your memories?</h3>
          <button className="px-6 py-3 bg-black font-weight text-white rounded-full font-medium shadow hover:bg-orange-600 transition">
            Upload Your Photo
          </button>
        </div>
      </div>
    </div>
  );
}
