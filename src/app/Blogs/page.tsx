// pages/blog.tsx

import BlogCard from "@/components/blogs/blogs";


const blogPosts = [
  {
    name: "John Doe",
    role: "Guest",
    content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    role: "Guest",
    content: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, making it look like readable English.",
    rating: 4,
  },
  {
    name: "Michael Brown",
    role: "Guest",
    content: "This villa exceeded all my expectations! The service was impeccable, and the location was perfect for a relaxing getaway.",
    rating: 5,
  },
  {
    name: "Emily Johnson",
    role: "Guest",
    content: "I loved the spacious rooms and the breathtaking ocean view. Definitely coming back next year!",
    rating: 5,
  },
  {
    name: "David Lee",
    role: "Guest",
    content: "A wonderful stay with friendly staff and clean facilities. Highly recommended for families.",
    rating: 4,
  },
  {
    name: "Sophia Martinez",
    role: "Guest",
    content: "The pool area was my favorite spot! Perfect place to unwind with a cocktail in hand.",
    rating: 5,
  },
  {
    name: "Daniel Kim",
    role: "Guest",
    content: "Great location, beautiful interiors, and the food was absolutely delicious.",
    rating: 5,
  },
  {
    name: "Olivia Garcia",
    role: "Guest",
    content: "Very peaceful and private. Just what we needed for our honeymoon escape.",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Guest",
    content: "The staff went above and beyond to make our stay comfortable. I felt at home instantly.",
    rating: 5,
  },
  {
    name: "Ava Thompson",
    role: "Guest",
    content: "An unforgettable experience! The sunsets from the balcony were magical.",
    rating: 5,
  },
  {
    name: "William Clark",
    role: "Guest",
    content: "The Wi-Fi could be a bit faster, but everything else was top-notch.",
    rating: 4,
  },
  {
    name: "Mia Lewis",
    role: "Guest",
    content: "Perfect for couples and small groups. Everything was spotless and well-maintained.",
    rating: 5,
  },
  {
    name: "Benjamin Hall",
    role: "Guest",
    content: "Close to the beach, and the free breakfast was an amazing bonus.",
    rating: 4,
  },
  {
    name: "Charlotte Allen",
    role: "Guest",
    content: "Every corner of the villa is Instagram-worthy. I loved taking photos here!",
    rating: 5,
  },
  {
    name: "Henry Young",
    role: "Guest",
    content: "Very comfortable stay. The air conditioning worked great and beds were super cozy.",
    rating: 4,
  },
  {
    name: "Amelia Scott",
    role: "Guest",
    content: "It felt like a dream vacation. I wish we stayed longer than just a weekend.",
    rating: 5,
  },
  {
    name: "Lucas Harris",
    role: "Guest",
    content: "Excellent service and very welcoming staff. We felt like royalty.",
    rating: 5,
  },
  {
    name: "Ella Adams",
    role: "Guest",
    content: "Loved the eco-friendly touches around the villa. Shows they care about the environment.",
    rating: 5,
  },
  {
    name: "Alexander Wright",
    role: "Guest",
    content: "Affordable luxury! Worth every penny we spent.",
    rating: 5,
  },
  {
    name: "Grace King",
    role: "Guest",
    content: "From check-in to check-out, everything was smooth and stress-free.",
    rating: 5,
  },
];



export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-40">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-800 font-bold mb-8">Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-12 gap-8 mb-12">
        {blogPosts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
}
