"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  const whatsappNumber = "60109203011";

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#f6f5f0] pt-28 pb-20 px-6 sm:px-12 text-[#1C1C1C]">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-[#D4AF37] mb-4 tracking-tight">
            Contact Us
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto text-base sm:text-lg">
            Reach out to us for bookings, custom requests, or VIP packages. Our team is ready 24/7 to assist you.
          </p>
        </motion.div>

        {/* IMAGE + INFO */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/landing/carrental2.png"
              alt="Contact Luxury"
              width={700}
              height={500}
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <div className="bg-white shadow-lg rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">Let’s Talk</h2>
              <p className="text-gray-700 mb-6">
                Contact our team instantly via WhatsApp or send us a message below.
              </p>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#D4AF37] hover:bg-[#c5a038] text-white font-semibold py-3 px-6 rounded-full transition-all shadow-md"
              >
                Chat on WhatsApp
              </a>

              <div className="mt-6 text-sm text-gray-600 space-y-1">
                <p><strong>Phone:</strong> <a href={`https://wa.me/${whatsappNumber}`} className="text-[#D4AF37] hover:underline">+60 10-920 3011</a></p>
                <p><strong>Email:</strong> info@malaysiaairportcab.com</p>
                <p><strong>Location:</strong> Kuala Lumpur, Malaysia</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* WHATSAPP CONTACT FORM */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8"
        >
          <h2 className="text-2xl font-bold text-[#D4AF37] mb-6 text-center">Send Enquiry via WhatsApp</h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const name = e.target.name.value.trim();
              const phone = e.target.phone.value.trim();
              const message = e.target.message.value.trim();

              const encodedMessage = encodeURIComponent(
                `Name: ${name}\nPhone: ${phone}\nMessage: ${message}`
              );

              window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
            }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="name"
                required
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:border-[#D4AF37]"
              />
              <input
                name="phone"
                required
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            <textarea
              name="message"
              required
              placeholder="Your Message..."
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:border-[#D4AF37]"
            />

            <div className="text-center">
              <button
                type="submit"
                className="bg-[#D4AF37] hover:bg-[#c5a038] text-white font-semibold text-sm sm:text-base py-3 px-10 rounded-full shadow-md transition"
              >
                Send via WhatsApp
              </button>
            </div>
          </form>
        </motion.div>

        {/* BACK HOME BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <a
            href="/"
            className="inline-block bg-[#1C1C1C] hover:bg-[#000] text-white font-semibold py-3 px-10 rounded-full shadow-lg transition-all"
          >
            Back to Homepage
          </a>
        </motion.div>
      </section>
    </>
  );
}
