"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCollectionModal, setShowCollectionModal] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-black text-white w-full z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">Senery Villa</div>

          <div className="hidden md:flex space-x-6 items-center font-medium">
            <Link href="#">Home</Link>
            <Link href="#">About Us</Link>
            <div className="relative group">
              <button className="flex items-center gap-1">
                Our Collection
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div className="absolute hidden group-hover:block bg-black text-white mt-2 rounded shadow-md z-50">
                <Link href="#" className="block px-4 py-2 hover:text-white">
                  Villa A
                </Link>
                {/*taga garden vila link*/ }
                <Link href="/tara_garden_vila" className="block px-4 py-2 hover:text-white">
                  Tara Garden Villa
                </Link>
              </div>
            </div>
            <Link href="#">Gallery</Link>
            <Link href="#">Experience</Link>
            <Link href="#">Reviews</Link>
            <Link href="#">Blog</Link>
            <Link
              href="#"
              className="bg-white text-black font-bold px-5 py-2 rounded-full"
            >
              Book Now
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-black text-yellow-400 px-4 pb-4 space-y-3 text-base font-medium max-h-[80vh] overflow-y-auto transition-all text-center">
            <Link href="#" onClick={() => setMenuOpen(false)} className="block">
              Home
            </Link>
            <Link href="#" onClick={() => setMenuOpen(false)} className="block">
              About Us
            </Link>

            <button
              onClick={() => setShowCollectionModal(true)}
              className=" gap-1"
              aria-haspopup="dialog"
            >
              Our Collection
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-4 h-4 transform transition-transform duration-300 group-hover:rotate-180 justify-self-end ${
                  showCollectionModal ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg> */}
            </button>

            <Link href="#" onClick={() => setMenuOpen(false)} className="block">
              Gallery
            </Link>
            <Link href="#" onClick={() => setMenuOpen(false)} className="block">
              Experience
            </Link>
            <Link href="#" onClick={() => setMenuOpen(false)} className="block">
              Reviews
            </Link>
            <Link href="#" onClick={() => setMenuOpen(false)} className="block">
              Blog
            </Link>

            <Link
              href="#"
              className="bg-yellow-400 text-black font-bold px-5 py-2 rounded-full hover:bg-yellow-300 w-fit mx-auto"
              onClick={() => setMenuOpen(false)}
            >
              Book Now
            </Link>
          </div>
        )}

        {/* Modal Overlay */}
        {showCollectionModal && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-[]"
            onClick={() => setShowCollectionModal(false)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-black text-yellow-400 rounded-lg p-6 max-w-xs w-full"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Our Collection</h2>
                <button
                  onClick={() => setShowCollectionModal(false)}
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
              </div>
              <nav className="flex flex-col space-y-3 text-center">
                <Link
                  href="#"
                  onClick={() => setShowCollectionModal(false)}
                  className="hover:text-white"
                >
                  Villa A
                </Link>
                <Link
                  href="#"
                  onClick={() => setShowCollectionModal(false)}
                  className="hover:text-white"
                >
                  Villa B
                </Link>
              </nav>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16">{/* Page content here */}</main>
    </>
  );
};

export default Navbar;
