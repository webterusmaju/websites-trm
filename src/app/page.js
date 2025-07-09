// "use client";

// // Luxury-style UI for Malaysia Airport Cab Taxi with golden, white, and matte black theme
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import CarSlider from "@/components/CarSlider";



// import Navbar from "../components/Navbar";
// import Image from "next/image";
// import Slider from "react-slick";
// import { useState } from "react";
// import { PlaneLanding, Landmark, GlassWater, PartyPopper, Building2, BusFront } from "lucide-react";

// const slides = [
//   {
//     image: "/landing/carrental1.png",
//     title: "Luxury MPV / Mercedes",
//     desc: "Premium full spec Alphard / Vellfire / BMW / Mercedes available at your service.",
//   },
//   {
//     image: "/landing/carrental2.png",
//     title: "Professional Drivers",
//     desc: "Our professional drivers will pick you up anywhere, anytime with class and safety.",
//   },
//   {
//     image: "/landing/carrental3.png",
//     title: "Flexible Rates",
//     desc: "Affordable & transparent hourly/per trip pricing. Starting from RM90/hour.",
//   },
// ];

// const galleryImages = [
//   "/landing/carrental1.png",
//   "/landing/carrental2.png",
//   "/landing/carrental3.png",
// ];

// export default function Home() {
//   const [current, setCurrent] = useState(0);
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     arrows: true,
//     beforeChange: (_, newIndex) => setCurrent(newIndex),
//   };



//   const [submitted, setSubmitted] = useState(false);
// const [loading, setLoading] = useState(false);

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   setLoading(true);

//   const form = e.target;
//   const formData = new FormData(form);
//   const query = new URLSearchParams(formData).toString();

//   await fetch(
//     "https://docs.google.com/forms/d/e/1FAIpQLSczq1OHKrKRDowCLlu7GOeHH3gWHKhvYqgb697YxTwsmnH_bg/formResponse",
//     {
//       method: "POST",
//       mode: "no-cors",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//       body: query,
//     }
//   );

//   setSubmitted(true);
//   setLoading(false);
//   form.reset();
// };


//   return (
//     <>
//       <Navbar />

//       {/* HERO SECTION */}

//       <section className="relative min-h-screen w-full text-white">
//         <Image
//           src="/landing/airport1.png"
//           alt="Luxury Hero Background"
//           layout="fill"
//           objectFit="cover"
//           className="brightness-[.4]"
//           priority
//         />
//         <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-20 z-10 max-w-6xl">
//           <p className="uppercase text-sm tracking-widest text-white/90 mb-2">Your Trusted Partner for All Airport Transfers</p>
//           <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
//            Welcome to Malaysia Airport CabTaxi
//           </h1>
//           <p className="text-sm md:text-base text-white/80 mb-6 max-w-lg">
//             Whether you're traveling solo, with family, or in a group, we offer a wide selection of vehicles to ensure a comfortable and reliable journey to and from all major airports in Malaysia.
//           </p>
//           <a
//             href="#booking"
//             className="bg-[#D4AF37] text-white text-sm md:text-base font-semibold py-3 px-6 rounded-md shadow hover:bg-[#c6a239] transition"
//           >
//             BOOK NOW
//           </a>
//         </div>
//         <div className="absolute bottom-0 left-0 right-0 bg-white/95 text-[#1C1C1C] flex items-center justify-between px-6 md:px-20 py-4 text-sm shadow-md">
//           <div className="flex items-center gap-2">
//             <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//             </svg>
//             <input type="text" placeholder="Search services or vehicles..." className="bg-transparent outline-none placeholder-gray-600 text-sm w-52 md:w-96" />
//           </div>
//           <a href="#booking" className="text-sm font-semibold hover:underline">
//             BOOK AN APPOINTMENT →
//           </a>
//         </div>
//       </section>
//        <CarSlider />

//      {/* WHY CHOOSE US */}
// <section className="bg-white py-20 px-6 sm:px-16">
//   <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1C1C1C] mb-12">
//     Why Choose Malaysia Airport CabTaxi?
//   </h2>
//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//     {[
//       {
//         title: " Versatility at Its Finest",
//         desc: "From sleek sedans to majestic MPVs and spacious vans, we cater to every taste and tribe — whether you seek luxury or low-cost, solo rides or group convoys."
//       },
//       {
//         title: " Impeccable Safety, Relentless Reliability",
//         desc: "Our professionally trained chauffeurs are more than just drivers — they're guardians of your punctuality, protectors of your peace of mind."
//       },
//       {
//         title: " Transparent Fare, No Surprises",
//         desc: "No gimmicks. No hidden surcharges. Just fair, flat rates with crystal-clear clarity — because trust is our true currency."
//       },
//       {
//         title: " Round-the-Clock Ride Readiness",
//         desc: "Flight at 3AM? No problem. Our wheels turn whenever you need — day, night, or somewhere in between."
//       },
//       {
//         title: " Frictionless Booking, Instant Confirmation",
//         desc: "Forget clunky forms. Our smart, streamlined booking makes reserving your ride faster than saying “KLIA, please!”"
//       },
//       {
//         title: " Eco-Conscious Options Available",
//         desc: "Prefer a hybrid or fuel-efficient ride? We got it. Comfort meets conscience with our evolving green fleet."
//       }
//     ].map((item, idx) => (
//       <div
//         key={idx}
//         className="bg-white border border-[#E5E5E5] rounded-xl p-6 shadow-sm hover:shadow-xl transition-all"
//       >
//         <h3 className="text-lg font-semibold text-[#D4AF37] mb-3">{item.title}</h3>
//         <p className="text-sm text-gray-700">{item.desc}</p>
//       </div>
//     ))}
//   </div>
// </section>


// {/* PROMOTIONAL MESSAGE */}
// <section className="bg-[#fef9f1] text-[#1C1C1C] py-20 px-6 sm:px-16 text-center">
//   <div className="max-w-4xl mx-auto space-y-6">
//     <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-[#D4AF37]">
//       Not Just a Ride — An Arrival in Style.
//     </h2>
//     <p className="text-lg sm:text-xl font-medium text-gray-800">
//       Whether you're a budget backpacker or a high-flyer on a business mission,<br />
//       <span className="font-semibold text-[#1C1C1C]">Malaysia Airport CabTaxi</span> transforms your airport transfer into an effortless experience of class, comfort, and care.
//     </p>
//     <p className="text-gray-700 text-base">
//       From <span className="font-bold text-[#D4AF37]">RM95</span>, your journey begins the moment you book.
//     </p>
//     <p className="text-gray-700 text-base">
//       Ride smart. Ride safe. Ride your way.
//     </p>
//     <div className="pt-4">
//       <a
//         href="/booking"
//         className="inline-block bg-[#D4AF37] hover:bg-[#c5a038] text-white font-semibold py-3 px-10 rounded-full shadow-md transition"
//       >
//         Book Now
//       </a>
//     </div>
//   </div>
// </section>




// <section className="relative h-screen text-white flex items-center justify-center text-center">
//   {/* Background Image */}
//   <Image
//     src="/landing/carrental3.png"
//     alt="VIP Experience"
//     layout="fill"
//     objectFit="cover"
//     className="z-0"
//     priority
//   />

//   {/* Overlay black layer */}
//   <div className="absolute inset-0 bg-black/60 z-[1]" />

//   {/* Overlay Content */}
//   <div className="absolute z-10 max-w-3xl px-6">
//     <div className="mb-6 flex flex-col items-center">
//       <div className="w-full max-w-[200px] mb-4 animate-fade-in">
//         <Image
//           src="/landing/Logo.png"
//           alt="Malaysia Airport Cab Taxi Logo"
//           width={500}
//           height={500}
//           className="w-full object-contain"
//         />
//       </div>
//       <p className="uppercase tracking-[.2em] text-sm text-gray-200 font-light text-center">
//         Malaysia Airport CabTaxi
//       </p>
//       <p className="text-xs text-gray-300 tracking-widest font-light text-center">
//         Your First-Class Airport Ride
//       </p>
//     </div>

//     <h2 className="text-3xl sm:text-5xl font-semibold mb-6 text-white leading-tight">
//       Experience the Super VIP Treatment in Malaysia
//     </h2>

//     <p className="text-base sm:text-lg text-gray-200 max-w-xl mx-auto mb-8 leading-relaxed">
//       Where every ride is elevated to a first-class journey. Immerse yourself in elite service, luxury vehicles, and absolute comfort that redefines transportation.
//     </p>

//     <a
//       href="#contact"
//       className="bg-[#D4AF37] hover:bg-[#c6a239] text-white font-medium text-sm sm:text-base py-3 px-8 rounded-full shadow-md transition"
//     >
//       Contact Us
//     </a>
//   </div>
// </section>



// <section className="bg-white py-28 px-6 sm:px-16">
//   <div className="text-center mb-20">
//     <h2 className="text-4xl sm:text-5xl font-bold text-[#1C1C1C] mb-4 tracking-tight">
//       Our Premium Services
//     </h2>
//     <div className="w-20 h-[2px] bg-[#D4AF37] mx-auto mb-6 rounded-full"></div>
//     <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto">
//       Step into the world of luxury. Each service is tailored for elegance, punctuality, and unmatched comfort.
//     </p>
//   </div>

//   <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
//     {/* Service Card */}
//     {[
//       {
//         icon: PlaneLanding,
//         title: "Airport Transfer",
//         desc: "Luxury pickups from/to all airports in Malaysia. Starting at RM230."
//       },
//       {
//         icon: Landmark,
//         title: "Casino Transfer",
//         desc: "Travel to Genting Highlands in style. Enjoy the ride, leave the traffic to us."
//       },
//       {
//         icon: GlassWater,
//         title: "Wedding Chauffeur",
//         desc: "Celebrate your big day with our luxurious Alphard/Vellfire chauffeur service."
//       },
//       {
//         icon: PartyPopper,
//         title: "VVIP Event Rides",
//         desc: "For concerts, gala nights, and private occasions. Arrive like a celebrity."
//       },
//       {
//         icon: Building2,
//         title: "Corporate Events",
//         desc: "Reliable rides for conferences, meetings & company parties with high-end presentation."
//       },
//       {
//         icon: BusFront,
//         title: "Executive Transport",
//         desc: "Daily, weekly or monthly client transfers — always on time, always classy."
//       }
//     ].map((item, idx) => (
//       <div
//         key={idx}
//         className="flex flex-col items-center text-center border border-[#eee] p-8 rounded-xl hover:shadow-xl transition-all duration-300"
//       >
//         <item.icon size={42} className="text-[#D4AF37] mb-4" />
//         <h3 className="text-xl font-semibold text-[#1C1C1C] mb-2">{item.title}</h3>
//         <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
//       </div>
//     ))}
//   </div>
// </section>

// <section className="bg-white py-20 px-6 sm:px-16 text-center">
//   <div className="max-w-4xl mx-auto space-y-6">
//     <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1C1C]">Your Safety is Our Priority</h2>
//     <p className="text-lg text-gray-700">
//       We uphold the highest standards of cleanliness and hygiene for every ride.
//     </p>
//     <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left text-gray-800 pt-6">
//       <div className="border rounded-lg p-6 shadow-sm bg-[#fefefe]">
//         <h3 className="font-semibold text-lg mb-2 text-[#D4AF37]">Daily Vehicle Sanitization</h3>
//         <p className="text-sm">All vehicles are cleaned and sanitized thoroughly before every trip.</p>
//       </div>
//       <div className="border rounded-lg p-6 shadow-sm bg-[#fefefe]">
//         <h3 className="font-semibold text-lg mb-2 text-[#D4AF37]">Health-Conscious Drivers</h3>
//         <p className="text-sm">Our drivers follow strict health protocols, including wearing masks at all times.</p>
//       </div>
//       <div className="border rounded-lg p-6 shadow-sm bg-[#fefefe]">
//         <h3 className="font-semibold text-lg mb-2 text-[#D4AF37]">Cashless Payments Available</h3>
//         <p className="text-sm">Enjoy safe and contactless transactions via our secure online booking system.</p>
//       </div>
//     </div>
//   </div>
// </section>


// <section className="bg-white py-24 px-6 sm:px-16">
//   <h2 className="text-3xl sm:text-5xl font-bold text-center text-[#1C1C1C] mb-12">
//     Gallery
//   </h2>

//   <div className="max-w-6xl mx-auto">
//     <Slider
//       dots={true}
//       infinite={true}
//       speed={700}
//       slidesToShow={3}
//       slidesToScroll={1}
//       autoplay={true}
//       autoplaySpeed={3500}
//       arrows={true}
//       responsive={[
//         { breakpoint: 1024, settings: { slidesToShow: 2 } },
//         { breakpoint: 640, settings: { slidesToShow: 1 } },
//       ]}
//     >
//       {galleryImages.map((src, index) => (
//         <div key={index} className="px-4">
//           <a href={src} target="_blank" rel="noopener noreferrer">
//             <div className="overflow-hidden rounded-2xl shadow-lg group cursor-pointer">
//               <Image
//                 src={src}
//                 alt={`Gallery Image ${index}`}
//                 width={600}
//                 height={400}
//                 className="w-full h-[400px] object-cover group-hover:scale-105 transition duration-500"
//               />
//             </div>
//           </a>
//         </div>
//       ))}
//     </Slider>
//   </div>
// </section>


// <section className="bg-[#D4AF37] text-white py-6 px-6 sm:px-16 text-center">
//   <div className="max-w-4xl mx-auto">
//     <p className="text-lg sm:text-xl font-semibold">
//       First-time user? Use code <span className="underline font-bold">WELCOME15</span> at checkout to get <span className="font-bold">RM15 off</span> your first ride.
//     </p>
//   </div>
// </section>



// <section className="bg-white py-28 px-4 sm:px-12" id="booking">
//   <div className="max-w-6xl mx-auto">
//     <h2 className="text-4xl sm:text-5xl font-bold text-center text-[#1C1C1C] mb-4">
//       Enquiry Form
//     </h2>
//     <div className="w-16 h-[3px] bg-[#D4AF37] mx-auto mb-12 rounded-full"></div>

//     {submitted ? (
//       <div className="bg-[#F6F4EF] border border-[#D4AF37] rounded-xl p-6 text-center shadow-lg mb-12 animate-fade-in">
//         <div className="text-[#D4AF37] text-2xl font-semibold mb-2 tracking-wide">
//           Booking Successful
//         </div>
//         <p className="text-gray-700 text-base max-w-xl mx-auto">
//           Thank you for your enquiry. Our team will contact you shortly to arrange payment and confirm your service.
//         </p>
//       </div>
//     ) : (
//       <form onSubmit={handleSubmit} className="space-y-10">
//         {/* Personal Info */}
//         <div>
//           <h3 className="text-lg font-semibold text-[#1C1C1C] mb-4">Personal Info</h3>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <input
//               type="text"
//               name="entry.241128140"
//               placeholder="Full Name*"
//               required
//               className="bg-white border border-[#DDD] focus:border-[#D4AF37] placeholder-gray-400 text-gray-800 px-5 py-3 rounded-lg w-full shadow-sm focus:outline-none"
//             />
//             <input
//               type="tel"
//               name="entry.1867721580"
//               placeholder="Phone Number*"
//               required
//               className="bg-white border border-[#DDD] focus:border-[#D4AF37] placeholder-gray-400 text-gray-800 px-5 py-3 rounded-lg w-full shadow-sm focus:outline-none"
//             />
//             <input
//               type="email"
//               name="entry.1222550185"
//               placeholder="Email Address*"
//               required
//               className="bg-white border border-[#DDD] focus:border-[#D4AF37] placeholder-gray-400 text-gray-800 px-5 py-3 rounded-lg w-full shadow-sm focus:outline-none"
//             />
//           </div>
//         </div>

//         {/* Date & Location */}
//         <div>
//           <h3 className="text-lg font-semibold text-[#1C1C1C] mb-4">Date & Location</h3>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <input
//               type="text"
//               name="entry.2022935511"
//               placeholder="Pickup Location"
//               className="bg-white border border-[#DDD] focus:border-[#D4AF37] placeholder-gray-400 text-gray-800 px-5 py-3 rounded-lg w-full shadow-sm focus:outline-none"
//             />
//             <input
//               type="text"
//               name="entry.378846262"
//               placeholder="Drop-off Location"
//               className="bg-white border border-[#DDD] focus:border-[#D4AF37] placeholder-gray-400 text-gray-800 px-5 py-3 rounded-lg w-full shadow-sm focus:outline-none"
//             />
//             <input
//               type="date"
//               name="entry.1182135585"
//               className="bg-white border border-[#DDD] focus:border-[#D4AF37] text-gray-800 px-5 py-3 rounded-lg w-full shadow-sm focus:outline-none"
//             />
//           </div>
//         </div>

//         {/* Message */}
//         <div>
//           <textarea
//             name="entry.1276024601"
//             placeholder="Your Message..."
//             className="bg-white border border-[#DDD] focus:border-[#D4AF37] placeholder-gray-400 text-gray-800 px-5 py-4 rounded-lg w-full min-h-[140px] shadow-sm focus:outline-none"
//           />
//         </div>

//         {/* Submit Button */}
//         <div className="text-center">
//           <button
//             type="submit"
//             className="bg-[#D4AF37] hover:bg-[#c6a239] text-white text-base font-semibold py-3 px-10 rounded-full shadow-lg transition duration-300"
//           >
//             {loading ? "Submitting..." : "Request a Quote"}
//           </button>
//         </div>
//       </form>
//     )}
//   </div>
// </section>


//       {/* FOOTER */}
//       <footer className="bg-[#1C1C1C] text-white py-6 text-center">
//         <p className="text-sm">© 2025 Malaysia Airport Cab Taxi. All rights reserved.</p>
//       </footer>
//     </>
//   );
// }

'use client';

import { useEffect, useState } from 'react';
import { ShieldOff } from 'lucide-react'; // Icon nampak mcm sekatan / sekuriti

export default function HomePage() {
  const [ready, setReady] = useState(false);

  // ✅ Tukar ke false bila client sudah bayar
  const isClientBlocked = true;

  useEffect(() => {
    setTimeout(() => setReady(true), 800);
  }, []);

  if (!ready) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <p className="text-gray-400 animate-pulse text-sm tracking-wide">
          Loading access session...
        </p>
      </div>
    );
  }

  if (isClientBlocked) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fffdf7] px-6 text-center">
        <ShieldOff className="w-16 h-16 text-yellow-600 mb-4 animate-fade-in" />

        <h1 className="text-3xl sm:text-4xl font-bold text-yellow-700 mb-3">
          Access Temporarily Restricted
        </h1>

        <p className="text-gray-700 max-w-lg mb-4">
          This website is currently undergoing service verification. To ensure uninterrupted access, kindly reach out to our service team for assistance.
        </p>

        <p className="text-sm text-gray-500 mb-6">
          For security and operational continuity, some features may be temporarily disabled.
        </p>

        <a
          href="https://wa.me/60132291201"
          target="_blank"
          className="px-5 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition shadow"
        >
          Contact Service Support
        </a>

        <p className="text-[11px] text-gray-400 mt-8">
          Status Ref: <span className="text-black">VER-ACL-2025</span> | RSA Control Unit
        </p>
      </div>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <h1 className="text-3xl font-bold text-green-700">✅ Website is Active</h1>
    </main>
  );
}

