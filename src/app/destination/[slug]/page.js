"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const destinationData = {
  "kuala-lumpur": {
    name: "Kuala Lumpur",
    description:
      "Experience luxury airport transfers and elite chauffeur rides in Malaysia's bustling capital city, known for its iconic skyline and vibrant lifestyle.",
    image: "/destination/kl.png",
  },
  "genting-highland": {
    name: "Genting Highland",
    description:
      "Escape to the cool hills of Genting Highland with our VIP chauffeur service — perfect for casino lovers, theme park adventurers, and mountain breeze seekers.",
    image: "/destination/genting.png",
  },
  "putrajaya": {
    name: "Putrajaya",
    description:
      "Travel to Malaysia’s modern administrative city with our stylish chauffeur rides — featuring lakes, bridges, and impressive government buildings.",
    image: "/destination/pj.png",
  },
  "penang": {
    name: "Penang",
    description:
      "Discover heritage, street food, and beaches in Penang with our comfortable chauffeur service. Ideal for culture lovers and city explorers.",
    image: "/destination/penang.png",
  },
  "melaka": {
    name: "Melaka",
    description:
      "Ride in elegance to historic Melaka, a UNESCO heritage city rich with colonial charm, river cruises, and night markets.",
    image: "/destination/melaka.png",
  },
  "johor": {
    name: "Johor",
    description:
      "Whether it's Legoland, premium outlets or coastal resorts — travel to Johor in style and comfort with our VIP chauffeurs.",
    image: "/destination/johor.png",
  },
  "perak": {
    name: "Perak",
    description:
      "Visit caves, heritage towns and hot springs in Perak with our premium chauffeur service — ideal for relaxing road trips.",
    image: "/destination/perak.png",
  },
  "pahang": {
    name: "Pahang",
    description:
      "From Genting to Cameron Highlands and Cherating — enjoy scenic drives to Pahang with smooth, professional service.",
    image: "/destination/pahang.png",
  },
  "negeri-sembilan": {
    name: "Negeri Sembilan",
    description:
      "Explore cultural richness and nature retreats in Negeri Sembilan with our chauffeured rides, perfect for family and leisure travel.",
    image: "/destination/ns.png",
  },
  "kelantan": {
    name: "Kelantan",
    description:
      "Travel to the east coast's cultural gem with ease — Kelantan awaits with traditions, crafts, and peaceful vibes.",
    image: "/destination/kelantan.png",
  },
  "terengganu": {
    name: "Terengganu",
    description:
      "Discover stunning islands, beaches and mosques in Terengganu with smooth VIP transfers — your tropical retreat begins here.",
    image: "/destination/ganu.png",
  },
  "kedah": {
    name: "Kedah",
    description:
      "From paddy fields to Langkawi gateway — explore Kedah in comfort with our trusted chauffeur experience.",
    image: "/destination/kedah.png",
  },
  "thailand": {
    name: "Thailand",
    description:
      "Cross the border to Thailand with peace of mind — enjoy a safe, stylish, and comfortable ride with our professional team.",
    image: "/destination/thai.png",
  },
};

export default function DestinationPage() {
  const { slug } = useParams();
  const data = destinationData[slug];

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 2000);
  };

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center text-gray-700 bg-[#f3f3f3] px-4 pt-[100px]">
        <div>
          <h1 className="text-3xl sm:text-4xl font-semibold mb-4">Destination Not Found</h1>
          <p className="text-base sm:text-lg">We couldn’t find information about this destination.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#e6e3de] pt-[100px] pb-20 px-6">
      <h1 className="text-4xl sm:text-5xl font-bold text-[#D4AF37] mb-6 text-center tracking-tight">
        {data.name}
      </h1>

      <div className="relative w-full max-w-3xl mx-auto h-64 sm:h-96 mb-8 rounded-lg overflow-hidden shadow-lg">
        <Image
          src={data.image}
          alt={data.name}
          fill
          className="object-cover"
          priority
        />
      </div>

      <p className="text-gray-800 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed text-center mb-20">
        {data.description}
      </p>

      {/* Enquiry Form */}
      <section className="bg-white py-28 px-4 sm:px-12 rounded-xl shadow-inner" id="booking">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-[#1C1C1C] mb-4">
            Enquiry Form
          </h2>
          <div className="w-16 h-[3px] bg-[#D4AF37] mx-auto mb-12 rounded-full"></div>

          {submitted ? (
            <div className="bg-[#F6F4EF] border border-[#D4AF37] rounded-xl p-6 text-center shadow-lg mb-12 animate-fade-in">
              <div className="text-[#D4AF37] text-2xl font-semibold mb-2 tracking-wide">
                Booking Successful
              </div>
              <p className="text-gray-700 text-base max-w-xl mx-auto">
                Thank you for your enquiry. Our team will contact you shortly to arrange payment and confirm your service.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              <div>
                <h3 className="text-lg font-semibold text-[#1C1C1C] mb-4">Personal Info</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <input
                    type="text"
                    name="entry.241128140"
                    placeholder="Full Name*"
                    required
                    className="bg-white border border-[#DDD] focus:border-[#D4AF37] placeholder-gray-400 text-gray-800 px-5 py-3 rounded-lg w-full shadow-sm focus:outline-none"
                  />
                  <input
                    type="tel"
                    name="entry.1867721580"
                    placeholder="Phone Number*"
                    required
                    className="bg-white border border-[#DDD] focus:border-[#D4AF37] placeholder-gray-400 text-gray-800 px-5 py-3 rounded-lg w-full shadow-sm focus:outline-none"
                  />
                  <input
                    type="email"
                    name="entry.1222550185"
                    placeholder="Email Address*"
                    required
                    className="bg-white border border-[#DDD] focus:border-[#D4AF37] placeholder-gray-400 text-gray-800 px-5 py-3 rounded-lg w-full shadow-sm focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#1C1C1C] mb-4">Date & Location</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <input
                    type="text"
                    name="entry.2022935511"
                    placeholder="Pickup Location"
                    className="bg-white border border-[#DDD] focus:border-[#D4AF37] placeholder-gray-400 text-gray-800 px-5 py-3 rounded-lg w-full shadow-sm focus:outline-none"
                  />
                  <input
                    type="text"
                    name="entry.378846262"
                    placeholder="Drop-off Location"
                    className="bg-white border border-[#DDD] focus:border-[#D4AF37] placeholder-gray-400 text-gray-800 px-5 py-3 rounded-lg w-full shadow-sm focus:outline-none"
                  />
                  <input
                    type="date"
                    name="entry.1182135585"
                    className="bg-white border border-[#DDD] focus:border-[#D4AF37] text-gray-800 px-5 py-3 rounded-lg w-full shadow-sm focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <textarea
                  name="entry.1276024601"
                  placeholder="Your Message..."
                  className="bg-white border border-[#DDD] focus:border-[#D4AF37] placeholder-gray-400 text-gray-800 px-5 py-4 rounded-lg w-full min-h-[140px] shadow-sm focus:outline-none"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#D4AF37] hover:bg-[#c6a239] text-white text-base font-semibold py-3 px-10 rounded-full shadow-lg transition duration-300"
                >
                  {loading ? "Submitting..." : "Request a Quote"}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
