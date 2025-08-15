// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { Menu, X } from "lucide-react";
// import Image from "next/image";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [showCollectionDropdown, setShowCollectionDropdown] = useState(false);

//   return (
//     <>
//       <nav className="fixed top-0 left-0 right-0 bg-black text-white w-full z-50 md:h-20 h-17">
//         <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
//         <Link href="/" className="flex items-center gap-2">
//           <Image
//             src="/SVLogoWhite.webp"
//             alt="Senery Villa Logo"
//             width={120}
//             height={40}
//             className="object-contain md:h-12 w-auto h-8"
//           />
//         </Link>
//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-6 items-center font-medium">
//             <Link href="/">Home</Link>
//             <Link href="/about">About Us</Link>
//             <div className="relative group">
//               <button
//                 className="flex items-center gap-1"
//                 aria-haspopup="true"
//                 aria-expanded="false"
//               >
//                 Our Collection
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                   className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>
//               <div className="absolute hidden group-hover:block bg-black text-white mt-[-1px] rounded shadow-md z-50 w-40">
//                 <Link href="#" className="block px-4 py-2 hover:text-white">
//                   Villa A
//                 </Link>
//                 <Link href="/tara-garden-vila" className="block px-4 py-2 hover:text-white">
//                   Tara Garden Villa
//                 </Link>
//               </div>
//             </div>
//             <Link href="/gallery">Gallery</Link>
//             <Link href="/expiriance">Experience</Link>
//             <Link href="#">Reviews</Link>
//             <Link href="#">Blog</Link>
//             <Link
//               href="#"
//               className="bg-white text-black font-bold px-5 py-2 rounded-full"
//             >
//               Book Now
//             </Link>
//           </div>

//           {/* Mobile Menu Toggle */}
//           <div className="md:hidden">
//             <button
//               onClick={() => {
//                 setMenuOpen(!menuOpen);
//                 setShowCollectionDropdown(false);
//               }}
//               aria-label="Toggle menu"
//             >
//               {menuOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {menuOpen && (
//           <div className="md:hidden bg-black text-yellow-400 px-4 pb-4 space-y-3 text-base font-medium max-h-[80vh] overflow-y-auto transition-all text-center z-40">
//             <Link href="/" onClick={() => setMenuOpen(false)} className="block">
//               Home
//             </Link>
//             <Link href="/about" onClick={() => setMenuOpen(false)} className="block">
//               About Us
//             </Link>

//             {/* Mobile Collection Dropdown */}
//             <div>
//               <button
//                 onClick={() => setShowCollectionDropdown(!showCollectionDropdown)}
//                 className="flex items-center gap-1 mx-auto"
//                 aria-haspopup="true"
//                 aria-expanded={showCollectionDropdown}
//               >
//                 Our Collection
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className={`w-4 h-4 transform transition-transform duration-300 ${
//                     showCollectionDropdown ? "rotate-180" : ""
//                   }`}
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth={2}
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>

//               {showCollectionDropdown && (
//                 <div className="flex flex-col mt-2 space-y-2">
//                   <Link
//                     href="#"
//                     onClick={() => {
//                       setMenuOpen(false);
//                       setShowCollectionDropdown(false);
//                     }}
//                     className="block"
//                   >
//                     Villa A
//                   </Link>
//                   <Link
//                     href="/tara-garden-vila"
//                     onClick={() => {
//                       setMenuOpen(false);
//                       setShowCollectionDropdown(false);
//                     }}
//                     className="block"
//                   >
//                     Tara Garden Villa
//                   </Link>
//                 </div>
//               )}
//             </div>

//             <Link href="/gallery" onClick={() => setMenuOpen(false)} className="block">
//               Gallery
//             </Link>
//             <Link href="/expiriance" onClick={() => setMenuOpen(false)} className="block">
//               Experience
//             </Link>
//             <Link href="#" onClick={() => setMenuOpen(false)} className="block">
//               Reviews
//             </Link>
//             <Link href="#" onClick={() => setMenuOpen(false)} className="block">
//               Blog
//             </Link>

//             <Link
//               href="#"
//               className="bg-yellow-400 text-black font-bold px-5 py-2 rounded-full hover:bg-yellow-300 w-fit mx-auto"
//               onClick={() => setMenuOpen(false)}
//             >
//               Book Now
//             </Link>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// };

// export default Navbar;

// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Menu, X } from "lucide-react";
// import Image from "next/image";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [showCollectionDropdown, setShowCollectionDropdown] = useState(false);
//   const pathname = usePathname();

//   // Helper function to check if a path is active
//   const isActive = (path: string) => {
//     if (path === "/") {
//       return pathname === "/";
//     }
//     return pathname.startsWith(path);
//   };

//   // Helper function to check if any collection page is active
//   const isCollectionActive = () => {
//     return pathname === "/villa-a" || pathname === "/tara-garden-vila";
//   };

//   // Navigation items array for easier management
//   const navItems = [
//     { href: "/", label: "Home" },
//     { href: "/about", label: "About Us" },
//     { href: "/gallery", label: "Gallery" },
//     { href: "/experience", label: "Experience" }, // Fixed typo
//     { href: "/reviews", label: "Reviews" },
//     { href: "/blog", label: "Blog" },
//   ];

//   const collectionItems = [
//     { href: "/villa-a", label: "Villa A" },
//     { href: "/tara-garden-vila", label: "Tara Garden Villa" },
//   ];

//   return (
//     <>
//       <nav className="fixed top-0 left-0 right-0 bg-black text-white w-full z-50 md:h-20 h-17">
//         <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center md:px-0">
//           <Link href="/" className="flex items-center gap-2">
//             <Image
//               src="/SVLogoWhite.webp"
//               alt="Senery Villa Logo"
//               width={120}
//               height={40}
//               className="object-contain md:h-12 w-auto h-8"
//               priority
//             />
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-4 items-center font-medium">
//             {navItems.slice(0, 2).map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className={`px-2 py-1 rounded-md transition-all duration-200 ${
//                   isActive(item.href)
//                     ? "bg-white text-black font-semibold"
//                     : "text-white hover:text-yellow-400"
//                 }`}
//               >
//                 {item.label}
//               </Link>
//             ))}

//             {/* Our Collection Dropdown */}
//             <div className="relative group">
//               <button
//                 className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-200 ${
//                   isCollectionActive()
//                     ? "bg-white text-black font-semibold"
//                     : "text-white group-hover:text-yellow-400"
//                 }`}
//                 aria-haspopup="true"
//                 aria-expanded="false"
//               >
//                 Our Collection
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                   className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>
//               <div className="absolute hidden group-hover:block bg-black border border-gray-700 text-white mt-[-1px] rounded shadow-lg z-50 w-48">
//                 {collectionItems.map((item) => (
//                   <Link
//                     key={item.href}
//                     href={item.href}
//                     className={`block px-4 py-1 transition-all duration-200 rounded-md mx-2 my-1 ${
//                       isActive(item.href)
//                         ? "bg-white text-black font-semibold"
//                         : "text-white hover:text-yellow-400 hover:bg-gray-800"
//                     }`}
//                   >
//                     {item.label}
//                   </Link>
//                 ))}
//               </div>
//             </div>

//             {navItems.slice(2).map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className={`px-3 py-2 rounded-md transition-all duration-200 ${
//                   isActive(item.href)
//                     ? "bg-white text-black font-semibold"
//                     : "text-white hover:text-yellow-400"
//                 }`}
//               >
//                 {item.label}
//               </Link>
//             ))}

//             <Link
//               href="/book"
//               className="bg-white text-black font-bold px-5 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition-colors duration-200"
//             >
//               Book Now
//             </Link>
//           </div>

//           {/* Mobile Menu Toggle */}
//           <div className="md:hidden">
//             <button
//               onClick={() => {
//                 setMenuOpen(!menuOpen);
//                 setShowCollectionDropdown(false);
//               }}
//               aria-label="Toggle menu"
//               className="hover:text-yellow-400 transition-colors duration-200"
//             >
//               {menuOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {menuOpen && (
//           <div className="md:hidden bg-black text-white px-4 pb-4 space-y-1 text-base font-medium max-h-[80vh] overflow-y-auto transition-all text-center z-40 border-t border-gray-700">
//             {navItems.slice(0, 2).map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 onClick={() => setMenuOpen(false)}
//                 className={`block py-1 px-4 mx-4 rounded-md mt-2 transition-all duration-200 ${
//                   isActive(item.href)
//                     ? "bg-white text-black font-semibold"
//                     : "text-white hover:text-yellow-400"
//                 }`}
//               >
//                 {item.label}
//               </Link>
//             ))}

//             {/* Mobile Collection Dropdown */}
//             <div>
//               <button
//                 onClick={() => setShowCollectionDropdown(!showCollectionDropdown)}
//                 className={`flex items-center gap-1 mx-auto py-2 px-4 rounded-md transition-all duration-200 ${
//                   isCollectionActive()
//                     ? "bg-white text-black font-semibold"
//                     : "text-white hover:text-yellow-400"
//                 }`}
//                 aria-haspopup="true"
//                 aria-expanded={showCollectionDropdown}
//               >
//                 Our Collection
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className={`w-4 h-4 transform transition-transform duration-300 ${
//                     showCollectionDropdown ? "rotate-180" : ""
//                   }`}
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth={2}
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>

//               {showCollectionDropdown && (
//                 <div className="flex flex-col mt-2 space-y-2 bg-gray-900 rounded-lg py-2">
//                   {collectionItems.map((item) => (
//                     <Link
//                       key={item.href}
//                       href={item.href}
//                       onClick={() => {
//                         setMenuOpen(false);
//                         setShowCollectionDropdown(false);
//                       }}
//                       className={`block py-2 px-4 mx-2 my-1 rounded-md transition-all duration-200 ${
//                         isActive(item.href)
//                           ? "bg-white text-black font-semibold"
//                           : "text-white hover:text-yellow-400"
//                       }`}
//                     >
//                       {item.label}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {navItems.slice(2).map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 onClick={() => setMenuOpen(false)}
//                 className={`block py-2 px-4 mx-4 rounded-md transition-all duration-200 ${
//                   isActive(item.href)
//                     ? "bg-white text-black font-semibold"
//                     : "text-white hover:text-yellow-400"
//                 }`}
//               >
//                 {item.label}
//               </Link>
//             ))}

//             <Link
//               href="/book"
//               className="bg-yellow-400 text-black font-bold px-5 py-2 rounded-full hover:bg-yellow-300 w-fit mx-auto block transition-colors duration-200"
//               onClick={() => setMenuOpen(false)}
//             >
//               Book Now
//             </Link>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// };

// export default Navbar;


// 

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCollectionDropdown, setShowCollectionDropdown] = useState(false);
  const pathname = usePathname();
  

  // Helper function to check if a path is active
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  // Helper function to check if any collection page is active
  const isCollectionActive = () => {
    return pathname === "/villa-a" || pathname === "/tara-garden-vila";
  };

  // Function to get the appropriate logo based on current page
  const getCurrentLogo = () => {
    if (pathname === "/villa-a") {
      return {
        src: "/VillaA-Logo.webp", // Replace with actual Villa A logo path
        alt: "Villa A Logo"
      };
    } else if (pathname === "/tara-garden-vila") {
      return {
        src: "/2.png", // Replace with actual Tara Garden Villa logo path
        alt: "Tara Garden Villa Logo"
      };
    }
    // Default logo for all other pages
    return {
      src: "/SVLogoWhite.webp",
      alt: "Senery Villa Logo"
    };
  };

  // Navigation items array for easier management
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/gallery", label: "Gallery" },
    { href: "/experience", label: "Experience" }, // Fixed typo
    // { href: "/reviews", label: "Reviews" },
    { href: "/Blogs", label: "Blog" },
  ];

  const collectionItems = [
    { href: "/treetop-vila", label: "Treetop-Villa" },
    { href: "/tara-garden-vila", label: "Tara Garden Villa" },
  ];

  const currentLogo = getCurrentLogo();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-black text-white w-full z-50 md:h-20 h-17">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center md:px-0">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={currentLogo.src}
              alt={currentLogo.alt}
              width={120}
              height={40}
              className="object-contain md:h-12 w-auto h-8 transition-all duration-700 ease-in-out"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 items-center font-medium">
            {navItems.slice(0, 2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-2 py-1 rounded-md transition-all duration-500 ease-in-out ${
                  isActive(item.href)
                    ? "bg-white text-black font-semibold"
                    : "text-white hover:text-yellow-400"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Our Collection Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-500 ease-in-out ${
                  isCollectionActive()
                    ? "bg-white text-black font-semibold"
                    : "text-white group-hover:text-yellow-400"
                }`}
                aria-haspopup="true"
                aria-expanded="false"
              >
                Our Collection
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 transition-transform duration-500 ease-in-out group-hover:rotate-180"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div className="absolute hidden group-hover:block bg-black border border-gray-700 text-white mt-[-1px] rounded shadow-lg z-50 w-48">
                {collectionItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-1 transition-all duration-500 ease-in-out rounded-md mx-2 my-1 ${
                      isActive(item.href)
                        ? "bg-white text-black font-semibold"
                        : "text-white hover:text-yellow-400 hover:bg-gray-800"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {navItems.slice(2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md transition-all duration-500 ease-in-out ${
                  isActive(item.href)
                    ? "bg-white text-black font-semibold"
                    : "text-white hover:text-yellow-400"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/bookpage"
              className="bg-white text-black font-bold px-5 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-500 ease-in-out"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => {
                setMenuOpen(!menuOpen);
                setShowCollectionDropdown(false);
              }}
              aria-label="Toggle menu"
              className="hover:text-yellow-400 transition-all duration-500 ease-in-out"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black text-white px-4 pb-4 space-y-1 text-base font-medium max-h-[80vh] overflow-y-auto transition-all duration-500 ease-in-out text-center z-40 border-t border-gray-700">
            {navItems.slice(0, 2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`block py-1 px-4 mx-4 rounded-md mt-2 transition-all duration-500 ease-in-out ${
                  isActive(item.href)
                    ? "bg-white text-black font-semibold"
                    : "text-white hover:text-yellow-400"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Collection Dropdown */}
            <div>
              <button
                onClick={() => setShowCollectionDropdown(!showCollectionDropdown)}
                className={`flex items-center gap-1 mx-auto py-2 px-4 rounded-md transition-all duration-500 ease-in-out ${
                  isCollectionActive()
                    ? "bg-white text-black font-semibold"
                    : "text-white hover:text-yellow-400"
                }`}
                aria-haspopup="true"
                aria-expanded={showCollectionDropdown}
              >
                Our Collection
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-4 h-4 transform transition-transform duration-500 ease-in-out ${
                    showCollectionDropdown ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {showCollectionDropdown && (
                <div className="flex flex-col mt-2 space-y-2 bg-gray-900 rounded-lg py-2">
                  {collectionItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        setMenuOpen(false);
                        setShowCollectionDropdown(false);
                      }}
                      className={`block py-2 px-4 mx-2 my-1 rounded-md transition-all duration-500 ease-in-out ${
                        isActive(item.href)
                          ? "bg-white text-black font-semibold"
                          : "text-white hover:text-yellow-400"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navItems.slice(2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`block py-2 px-4 mx-4 rounded-md transition-all duration-500 ease-in-out ${
                  isActive(item.href)
                    ? "bg-white text-black font-semibold"
                    : "text-white hover:text-yellow-400"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/bookpage"
              className="bg-yellow-400 text-black font-bold px-5 py-2 rounded-full hover:bg-yellow-300 w-fit mx-auto block transition-all duration-500 ease-in-out"
              onClick={() => setMenuOpen(false)}
            >
              Book Now
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;