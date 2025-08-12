// "use client";

// import Link from "next/link";
// import Image from "next/image";

// // components/Footer.tsx
// export default function Footer() {
//   return (
//     <footer
//       style={{ backgroundColor: "var(--color-secondary)", color: "var(--color-primary)" }}
//       className="px-6 md:px-20 py-10 text-sm md:text-base"
//     >
//       <div className="flex flex-col md:flex-row justify-between items-start gap-10">

//         {/* Left: Logo and CTA */}
//         <div className="space-y-4 w-full md:w-1/3 flex flex-col items-center ">
  
//           <Image
//             src="/SVLogoWhite.webp"
//             alt="Senery Villa Logo"
//             width={160}         // larger width for web
//             height={48}         // larger height for web
//             className="object-contain h-16 md:h-30 mb-10 mt-4 w-auto"
//           />


//           <button
//             style={{ backgroundColor: "var(--color-primary)", color: "#000" }}
//             className="px-6 py-3 rounded-full font-bold"
//           >
//             Book Now
//           </button>
//         </div>

//         {/* Middle: Navigation Links */}
//         <div className="grid grid-cols-2 gap-6 w-full md:w-1/3">
//           <div className="space-y-2">
//             <h3 className="font-semibold">Pages</h3>
//               <Link href="/" className="hover:underline block">Home</Link>
//               <Link href="/about" className="hover:underline block">About Us</Link>
//               <Link href="/gallery" className="hover:underline block">Gallery</Link>
//               <Link href="/expiriance" className="hover:underline block">Experience</Link>
//               <Link href="/reviews" className="hover:underline block">Reviews</Link>
//               <Link href="/blog" className="hover:underline block">Blog</Link>
//           </div>
//           <div className="space-y-2">
//             <h3 className="font-semibold">Our Collection</h3>
//               <Link href="/Villa-Mandalay" className="hover:underline block">Villa Mandalay</Link>
//               <Link href="/tara-garden-vila" className="hover:underline block">Tara Garden</Link>
//               <Link href="/Treetop-Resort" className="hover:underline block">Treetop Resort</Link>
//               <Link href="/Villa-Desire" className="hover:underline block">Villa Desire</Link>
//           </div>
//         </div>

//         {/* Right: Contact and Newsletter */}
//         <div className="space-y-4 w-full md:w-1/3">
//           <h3 className="font-semibold">Join our News Alert</h3>
//           <div className="flex flex-col sm:flex-row gap-2">
//             <input
//               type="text"
//               placeholder="Enter your email"
//               className="px-4 py-2 rounded-full text-gray-900 w-full sm:w-1/2 placeholder:text-gray-400 placeholder:font-semibold border border-gray-400"
//             />
//             <button
//               style={{ backgroundColor: "var(--color-primary)", color: "#000" }}
//               className="px-5 py-2 rounded-full font-bold"
//             >
//               Subscribe
//             </button>
//           </div>
//           <p className="mt-4">📞 +94 77 908 2515</p>
//           <p>📧 sceneryvillassl@gmail.com</p>
//           <div className="flex gap-4 text-2xl mt-4">
//             {/* social icons */}
//           </div>
//         </div>
//       </div>

//       <div
//         className="border-t mt-10 pt-4 flex flex-col md:flex-row justify-between text-xs"
//         style={{ borderColor: "rgba(230, 204, 128, 0.3)" }}
//       >
//         <p>© Scenery Villas 2025, All rights reserved.</p>
//         <p>Concept By Digital Escapes & Developed By Stacmac</p>
//       </div>
//     </footer>
//   );
// }


"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// components/Footer.tsx
export default function Footer() {
  const pathname = usePathname();

  // Function to get the appropriate logo based on current page
  const getCurrentLogo = () => {
    if (pathname === "/Villa-Mandalay" || pathname === "/villa-mandalay") {
      return {
        src: "/VillaMandalay-Logo.webp", // Replace with actual Villa Mandalay logo path
        alt: "Villa Mandalay Logo"
      };
    } else if (pathname === "/tara-garden-vila") {
      return {
        src: "/2.png", // Replace with actual Tara Garden Villa logo path
        alt: "Tara Garden Villa Logo"
      };
    } else if (pathname === "/Treetop-Resort" || pathname === "/treetop-resort") {
      return {
        src: "/TreetopResort-Logo.webp", // Replace with actual Treetop Resort logo path
        alt: "Treetop Resort Logo"
      };
    } else if (pathname === "/Villa-Desire" || pathname === "/villa-desire") {
      return {
        src: "/VillaDesire-Logo.webp", // Replace with actual Villa Desire logo path
        alt: "Villa Desire Logo"
      };
    }
    // Default logo for all other pages
    return {
      src: "/SVLogoWhite.webp",
      alt: "Senery Villa Logo"
    };
  };

  const currentLogo = getCurrentLogo();

    function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    window.location.href = "/bookpage";
  }

  return (
    <footer
      style={{ backgroundColor: "var(--color-secondary)", color: "var(--color-primary)" }}
      className="px-6 md:px-20 py-10 text-sm md:text-base"
    >
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">

        {/* Left: Logo and CTA */}
        <div className="space-y-4 w-full md:w-1/3 flex flex-col items-center ">
  
          <Image
            src={currentLogo.src}
            alt={currentLogo.alt}
            width={160}         // larger width for web
            height={48}         // larger height for web
            className="object-contain h-16 md:h-30 mb-10 mt-4 w-auto transition-all duration-300"
          />

          <button
            style={{ backgroundColor: "var(--color-primary)", color: "#000" }}
            className="px-6 py-3 rounded-full font-bold"
            onClick={handleClick}
          >
            Book Now
          </button>
        </div>

        {/* Middle: Navigation Links */}
        <div className="grid grid-cols-2 gap-6 w-full md:w-1/3">
          <div className="space-y-2">
            <h3 className="font-semibold">Pages</h3>
              <Link href="/" className="hover:underline block">Home</Link>
              <Link href="/about" className="hover:underline block">About Us</Link>
              <Link href="/gallery" className="hover:underline block">Gallery</Link>
              <Link href="/experience" className="hover:underline block">Experience</Link>
              <Link href="/reviews" className="hover:underline block">Reviews</Link>
              <Link href="/blog" className="hover:underline block">Blog</Link>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Our Collection</h3>
              <Link href="/Villa-Mandalay" className="hover:underline block">Villa Mandalay</Link>
              <Link href="/tara-garden-vila" className="hover:underline block">Tara Garden</Link>
              <Link href="/Treetop-Resort" className="hover:underline block">Treetop Resort</Link>
              <Link href="/Villa-Desire" className="hover:underline block">Villa Desire</Link>
          </div>
        </div>

        {/* Right: Contact and Newsletter */}
        <div className="space-y-4 w-full md:w-1/3">
          <h3 className="font-semibold">Join our News Alert</h3>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-full text-gray-900 w-full sm:w-1/2 placeholder:text-gray-400 placeholder:font-semibold border border-gray-400"
            />
            <button
              style={{ backgroundColor: "var(--color-primary)", color: "#000" }}
              className="px-5 py-2 rounded-full font-bold"
            >
              Subscribe
            </button>
          </div>
          <p className="mt-4">📞 +94 77 908 2515</p>
          <p>📧 sceneryvillassl@gmail.com</p>
          <div className="flex gap-4 text-2xl mt-4">
            {/* social icons */}
          </div>
        </div>
      </div>

      <div
        className="border-t mt-10 pt-4 flex flex-col md:flex-row justify-between text-xs"
        style={{ borderColor: "rgba(230, 204, 128, 0.3)" }}
      >
        <p>© Scenery Villas 2025, All rights reserved.</p>
        <p>Concept By Digital Escapes & Developed By Stacmac</p>
      </div>
    </footer>
  );
}