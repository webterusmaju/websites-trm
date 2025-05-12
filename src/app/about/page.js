"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar"; // ⬅️ Tambah ini ikut path sebenar

export default function AboutPage() {
  return (
    <>
      <Navbar /> {/* ⬅️ Tambah ini */}
      <section className="min-h-screen bg-[#f0eee9] pt-28 pb-20 px-6 sm:px-12">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-[#D4AF37] tracking-tight mb-4">
            About Us
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto text-base sm:text-lg">
            Malaysia Airport CabTaxi is the premier choice for luxury transportation in Malaysia, offering VIP chauffeur services with excellence, punctuality and class.
          </p>
        </motion.div>

        {/* IMAGE + CONTENT SECTION */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <Image
              src="/landing/carrental1.png"
              alt="Luxury Ride"
              width={800}
              height={600}
              className="rounded-xl shadow-xl w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="text-gray-800"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1C1C1C] mb-4">
              Your Journey Begins with Class
            </h2>
            <p className="text-base sm:text-lg leading-relaxed mb-6">
              We are dedicated to offering elite transportation from all major airports across Malaysia. From our fleet of premium Alphard, Vellfire, Mercedes to our professional chauffeurs, everything is designed for your peace of mind and class.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              Whether it’s a wedding, VIP event, business trip or vacation, our team ensures that you travel in absolute comfort. With over 3,800 satisfied clients and 177,000+ KM of luxury travel experience, Malaysia Airport CabTaxi sets the gold standard in airport pickup services.
            </p>
          </motion.div>
        </div>

        {/* MISSION SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-24 text-center max-w-4xl mx-auto"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-[#D4AF37] mb-4">Our Mission</h3>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            To provide a truly luxurious, professional, and reliable airport chauffeur experience that reflects the prestige and comfort you deserve.
          </p>
        </motion.div>

        {/* CALL TO ACTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <a
            href="/"
            className="inline-block bg-[#D4AF37] hover:bg-[#c5a038] text-white font-semibold text-sm sm:text-base py-3 px-8 rounded-full shadow-lg transition"
          >
            Return to Homepage
          </a>
        </motion.div>
      </section>
    </>
  );
}
