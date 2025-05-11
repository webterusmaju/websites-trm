"use client";

import { useParams } from "next/navigation";

export default function DestinationPage() {
  const { slug } = useParams();

  const formattedName = slug
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="min-h-screen bg-white py-24 px-6 text-center">
      <h1 className="text-4xl font-bold text-[#A8895B] mb-4">{formattedName}</h1>
      <p className="text-gray-700 text-lg max-w-2xl mx-auto">
        Welcome to our VIP Chauffeur Services in <strong>{formattedName}</strong>. Get ready to experience luxury rides tailored to your needs.
      </p>
    </div>
  );
}
