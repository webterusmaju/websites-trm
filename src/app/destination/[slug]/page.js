"use client";

import { useParams } from "next/navigation";

export default function DestinationPage() {
  const { slug } = useParams();

  const formattedName = slug
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="min-h-screen bg-[#e6e3de] pt-[100px] pb-20 px-6 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-[#D4AF37] mb-6 tracking-tight">
        {formattedName}
      </h1>
      <p className="text-gray-800 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
        Welcome to our VIP Chauffeur Services in <strong>{formattedName}</strong>.<br />
        Enjoy premium airport pickup, luxury rides, and elite chauffeur experience.
      </p>
    </div>
  );
}
