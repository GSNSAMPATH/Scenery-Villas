"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCollectionDropdown, setShowCollectionDropdown] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-black text-white w-full z-50 md:h-20 h-18">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/SVLogoWhite.webp"
            alt="Senery Villa Logo"
            width={120}
            height={40}
            className="object-contain md:h-12 w-auto h-8"
          />
        </Link>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center font-medium">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <div className="relative group">
              <button
                className="flex items-center gap-1"
                aria-haspopup="true"
                aria-expanded="false"
              >
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
              <div className="absolute hidden group-hover:block bg-black text-white mt-[-1px] rounded shadow-md z-50 w-40">
                <Link href="#" className="block px-4 py-2 hover:text-white">
                  Villa A
                </Link>
                <Link href="/tara-garden-vila" className="block px-4 py-2 hover:text-white">
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

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => {
                setMenuOpen(!menuOpen);
                setShowCollectionDropdown(false);
              }}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black text-yellow-400 px-4 pb-4 space-y-3 text-base font-medium max-h-[80vh] overflow-y-auto transition-all text-center z-40">
            <Link href="/" onClick={() => setMenuOpen(false)} className="block">
              Home
            </Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} className="block">
              About Us
            </Link>

            {/* Mobile Collection Dropdown */}
            <div>
              <button
                onClick={() => setShowCollectionDropdown(!showCollectionDropdown)}
                className="flex items-center gap-1 mx-auto"
                aria-haspopup="true"
                aria-expanded={showCollectionDropdown}
              >
                Our Collection
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-4 h-4 transform transition-transform duration-300 ${
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
                <div className="flex flex-col mt-2 space-y-2">
                  <Link
                    href="#"
                    onClick={() => {
                      setMenuOpen(false);
                      setShowCollectionDropdown(false);
                    }}
                    className="block"
                  >
                    Villa A
                  </Link>
                  <Link
                    href="/tara-garden-vila"
                    onClick={() => {
                      setMenuOpen(false);
                      setShowCollectionDropdown(false);
                    }}
                    className="block"
                  >
                    Tara Garden Villa
                  </Link>
                </div>
              )}
            </div>

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
      </nav>
    </>
  );
};

export default Navbar;
