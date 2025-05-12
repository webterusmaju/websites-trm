"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ChevronDown, Globe, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const destinations = [
    "Kuala Lumpur", "Genting Highland", "Selangor", "Putrajaya", "Penang", "Melaka", "Johor", "Perak",
    "Pahang", "Negeri Sembilan", "Kelantan", "Terengganu", "Kedah", "Perlis", "Thailand",
  ];

  const handleDestinationClick = (place) => {
    const slug = place.toLowerCase().replace(/\s+/g, "-");
    router.push(`/destination/${slug}`);
    setIsDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-white/80 backdrop-blur-md shadow-md text-black" : "bg-transparent text-white"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Brand Name */}
          <div className="flex items-center space-x-3 animate-fade-in py-1 sm:py-2">
            <Image
              src="/landing/Logo.png"
              alt="Malaysia Airport Cab Taxi Logo"
              width={60}
              height={60}
              className="object-contain"
            />
            <div className="flex flex-col leading-tight">
        <span className="text-sm sm:text-xl font-bold tracking-wide break-words text-wrap text-center sm:text-left">
  MALAYSIA AIRPORT<br className="block sm:hidden" /> CABTAXI
</span>


              <span className="text-[10px] sm:text-xs uppercase text-gray-400">
              Your First-Class Airport Ride
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center text-sm">
            <a href="/" className="hover:text-[#A8895B] transition">Home</a>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className="flex items-center hover:text-[#A8895B] transition"
              >
                Destination <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 bg-white text-black border rounded shadow-md w-48 z-50 max-h-96 overflow-auto">
                  {destinations.map((place, i) => (
                    <button
                      key={i}
                      onClick={() => handleDestinationClick(place)}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                    >
                      {place}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a href="/about" className="hover:text-[#A8895B] transition">About Us</a>
            <a href="#" className="hover:text-[#A8895B] transition">VIP Services</a>
            <a href="/contact" className="hover:text-[#A8895B] transition">Contact Us</a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm px-4 py-4 text-black animate-slide-in-down">
          <a href="/about" className="block text-sm py-2 hover:text-[#A8895B]">About</a>

          <button
            onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            className="w-full text-left text-sm font-semibold py-2 flex items-center justify-between"
          >
            Destination
            <ChevronDown
              className={`ml-2 h-4 w-4 transition-transform ${mobileDropdownOpen ? "rotate-180" : ""}`}
            />
          </button>
          {mobileDropdownOpen && (
            <div className="pl-4 space-y-2 transition-all duration-300 max-h-80 overflow-auto">
              {destinations.map((place, i) => (
                <button
                  key={i}
                  onClick={() => handleDestinationClick(place)}
                  className="block text-sm text-gray-700 hover:text-[#A8895B] w-full text-left"
                >
                  {place}
                </button>
              ))}
            </div>
          )}

         
          <a href="#" className="block text-sm py-2 hover:text-[#A8895B]">VIP Services</a>
          <a href="/contact" className="block text-sm py-2 hover:text-[#A8895B]">Contact Us</a>

          <div className="flex items-center space-x-1 pt-4 border-t border-gray-200 mt-4">
            <Globe className="h-4 w-4 text-gray-500" />
          </div>
        </div>
      )}
    </nav>
  );
}
