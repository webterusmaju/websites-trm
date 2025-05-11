"use client";

import Navbar from "../components/Navbar";
import Image from "next/image";
import Slider from "react-slick";
import { useState } from "react";
import { PlaneLanding, Landmark, GlassWater, PartyPopper, Building2, BusFront } from "lucide-react";


// 💡 Carousel data
const slides = [
  {
    image: "/landing/carrental1.png",
    title: "Luxury MPV / Mercedes",
    desc:
      "Premium full spec Alphard / Vellfire / BMW / Mercedes available at your service. Making sure your travel is classy as always.",
  },
  {
    image: "/landing/carrental2.png",
    title: "Professional Drivers",
    desc:
      "Our professional drivers will pick you up at any location anytime. Ensuring you a ride on time every time safely while you ride in luxury.",
  },
  {
    image: "/landing/carrental3.png",
    title: "Flexible Rates",
    desc:
      "No matter what services you need, we always offer flexible charging rate to suit your plan. Per trip or hourly from RM90/hour.",
  },
];

//gelerypage 
const galleryImages = [
  "/landing/carrental1.png",
  "/landing/carrental2.png",
  "/landing/carrental3.png",
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    beforeChange: (oldIndex, newIndex) => setCurrent(newIndex),
  };

  const [submitted, setSubmitted] = useState(false);
const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  const form = e.target;
  const formData = new FormData(form);
  const query = new URLSearchParams(formData).toString();

  await fetch(
    "https://docs.google.com/forms/d/e/1FAIpQLSczq1OHKrKRDowCLlu7GOeHH3gWHKhvYqgb697YxTwsmnH_bg/formResponse",
    {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: query,
    }
  );

  setSubmitted(true);
  setLoading(false);
  form.reset();
};


  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-[100vh] bg-black text-white flex items-center justify-center">
        <Image
          src="/landing/carrental2.png"
          alt="Luxury car and jet"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
          priority
        />
        <div className="absolute z-10 text-center px-4 sm:px-6 max-w-2xl">
          <h1 className="text-2xl sm:text-5xl font-bold mb-4 leading-tight">
            Your first class chauffeur service
          </h1>
          <p className="text-sm sm:text-lg mb-6 leading-relaxed">
            Travelling in ultimate luxury with Terus Maju Resources. With the
            largest fleet of luxury vehicles, we offer bespoke, first-class
            chauffeur services and personalised journeys that ensure you arrive in style.
          </p>
          <a
            href="#"
            className="bg-[#A8895B] text-white py-2 px-4 sm:py-3 sm:px-6 rounded shadow hover:bg-[#8a744d] transition text-sm sm:text-base"
          >
            Request a Quote
          </a>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-14 px-4 sm:px-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-gray-800">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {slides.map((item, idx) => (
            <div
              key={idx}
              className="shadow-md p-6 rounded-lg border hover:shadow-xl transition"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-[#A8895B]">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VIP SLIDER SECTION */}
  {/* VIP Chauffeur Slider Section */}

<section className="bg-white py-24 px-6 sm:px-16">
  <p className="text-sm uppercase text-[#A8895B] tracking-[0.25em] text-center mb-2">
    Largest Chauffeur Service Provider
  </p>
  <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 text-center mb-16 leading-tight">
    Tailormade Bespoke VIP Chauffeur Service
  </h2>

  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
    {/* Gambar Slider – NO FRAME */}
    <Slider {...settings} className="w-full max-w-2xl mx-auto">
      {slides.map((item, index) => (
        <div key={index} className="overflow-hidden group cursor-pointer">
          <Image
            src={item.image}
            alt={item.title}
            width={1000}
            height={600}
            className="w-full h-[500px] object-cover transition-all duration-700 
                       group-hover:scale-105 group-hover:brightness-110 group-active:scale-100"
          />
        </div>
      ))}
    </Slider>

    {/* Content Kanan */}
    <div className="text-center md:text-left px-4 sm:px-10">
      <h3 className="text-3xl sm:text-4xl font-bold text-[#A8895B] mb-6 tracking-tight">
        {slides[current].title}
      </h3>
      <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8">
        {slides[current].desc}
      </p>
      <a
        href="#"
        className="inline-block bg-[#A8895B] text-white font-semibold tracking-wide text-sm sm:text-base py-3 px-8 
                   rounded-md transition-all duration-300 shadow-md hover:bg-yellow-500 hover:shadow-lg"
      >
        Book Now
      </a>
    </div>
  </div>
</section>

{/* Welcome Super VIP Section */}
<section className="relative h-screen text-white flex items-center justify-center text-center">
  {/* Background Image */}
  <Image
    src="/landing/carrental3.png" // Ganti ikut nama gambar sebenar
    alt="VIP Vellfire"
    layout="fill"
    objectFit="cover"
    className="z-0 brightness-[.45]"
    priority
  />

  {/* Overlay Content */}
  <div className="absolute z-10 max-w-3xl px-6">
    {/* Logo atas */}
    <div className="mb-4">
      <h1 className="text-[48px] font-serif tracking-widest leading-none">TRM</h1>
      <p className="uppercase tracking-[.2em] text-xs text-gray-200">
        TERUS MAJU RESOURCES
      </p>
      <p className="text-[10px] text-gray-300 tracking-widest">Travelling in Style</p>
    </div>
    {/* Title */}
    <h2 className="text-2xl sm:text-4xl font-semibold mb-4">
      We offer you a super VIP experience in Malaysia.
    </h2>

    {/* Description */}
    <p className="text-sm sm:text-base text-gray-200 max-w-xl mx-auto mb-8">
      By offering exceptional service with no detail unattended, we have been fortunate enough to have developed into the leading provider of ground transportation in the area.
    </p>

    {/* Button */}
    <a
      href="#contact"
      className="bg-[#A8895B] text-white font-medium text-sm sm:text-base py-3 px-7 
                 rounded-md hover:bg-yellow-500 transition"
    >
      Contact Us
    </a>
  </div>
</section>




      {/* TOP RATED CHAUFFEUR SECTION */}
      <section className="bg-[#f8f6fb] py-20 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <Image
              src="/landing/badge.png"
              alt="Top Rated Chauffeur"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>

          <div className="text-gray-700 text-sm sm:text-base">
            <p className="leading-relaxed">
              The premier choice for award-winning luxury chauffeur services that cater to exclusive clients like you who value elegance, comfort and privacy.
              Each journey with us is tailored to your individual preferences, ensuring an unparalleled level of service that anticipates and exceeds your expectations.
              Making us the preferred choice for those who seek the ultimate in luxury transportation.
            </p>
          </div>
        </div>

        <div className="bg-white mt-16 p-6 sm:p-10 rounded-lg shadow-xl max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 text-center gap-6">
          <div>
            <div className="text-[#a8895b] mb-1 text-2xl sm:text-3xl font-bold">3,883</div>
            <p className="text-sm text-gray-700">bookings made</p>
          </div>
          <div>
            <div className="text-[#a8895b] mb-1 text-2xl sm:text-3xl font-bold">177,551</div>
            <p className="text-sm text-gray-700">KM travelled safely</p>
          </div>
          <div>
            <div className="text-[#a8895b] mb-1 text-2xl sm:text-3xl font-bold">200</div>
            <p className="text-sm text-gray-700">Over 200 premium MPV</p>
          </div>
          <div>
            <div className="text-[#a8895b] mb-1 text-2xl sm:text-3xl font-bold">24</div>
            <p className="text-sm text-gray-700">Available 24/7</p>
          </div>
        </div>
      </section>

{/* Our Services Section */}
<section className="bg-white py-24 px-6 sm:px-16">
  <div className="text-center mb-16">
    <h2 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-3">Our Services</h2>
    <div className="w-12 h-1 bg-[#A8895B] mx-auto mb-4 rounded-full"></div>
    <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
      The exclusive way to travel. Step right in and sit back. We will take care of everything else.
    </p>
  </div>

  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
    {/* Item 1 */}
    <div className="flex flex-col items-center text-center">
      <PlaneLanding size={36} className="text-[#A8895B] mb-3" />
      <h3 className="text-lg font-semibold text-gray-800 mb-1">Airport Transfer</h3>
      <p className="text-sm text-gray-600">
        Le Vince offer superb luxury transfer service in Kuala Lumpur. One way airport transfer from any point in KL / Selangor cost RM230 only.
      </p>
    </div>

    {/* Item 2 */}
    <div className="flex flex-col items-center text-center">
      <Landmark size={36} className="text-[#A8895B] mb-3" />
      <h3 className="text-lg font-semibold text-gray-800 mb-1">Casino Transfer (Genting Highland)</h3>
      <p className="text-sm text-gray-600">
        Le Vince offer comfort ride to/from Genting Highland. We are the most popular and has been chosen by many VIP.
      </p>
    </div>

    {/* Item 3 */}
    <div className="flex flex-col items-center text-center">
      <GlassWater size={36} className="text-[#A8895B] mb-3" />
      <h3 className="text-lg font-semibold text-gray-800 mb-1">Wedding</h3>
      <p className="text-sm text-gray-600">
        Have a wedding coming up? We provide luxury Alphard / Vellfire on rent to make your big day an unforgettable experience.
      </p>
    </div>

    {/* Item 4 */}
    <div className="flex flex-col items-center text-center">
      <PartyPopper size={36} className="text-[#A8895B] mb-3" />
      <h3 className="text-lg font-semibold text-gray-800 mb-1">Special Events/VVIP Transfer</h3>
      <p className="text-sm text-gray-600">
        Classy ride from your pick up point to/from your special occasion like concert, parties, proms night, with our quality Alphard/Vellfire.
      </p>
    </div>

    {/* Item 5 */}
    <div className="flex flex-col items-center text-center">
      <Building2 size={36} className="text-[#A8895B] mb-3" />
      <h3 className="text-lg font-semibold text-gray-800 mb-1">Corporate Events</h3>
      <p className="text-sm text-gray-600">
        Employee parties, team buildings, conference and more. You can trust our team at LeVince to make your corporate event one to remember.
      </p>
    </div>

    {/* Item 6 */}
    <div className="flex flex-col items-center text-center">
      <BusFront size={36} className="text-[#A8895B] mb-3" />
      <h3 className="text-lg font-semibold text-gray-800 mb-1">Corporate Transportation</h3>
      <p className="text-sm text-gray-600">
        Need to chauffeur your clients anywhere anytime? Focus on your business and let us take care of your clients with our stylish and comfortable rides 24/7.
      </p>
    </div>
  </div>
</section>


{/* gelerypage */}
<section className="bg-white py-24 px-6 sm:px-16">
  <div className="text-center mb-12">
    <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
      The perfect balance between comfort, style, and luxury
    </h2>
    <div className="w-16 h-1 bg-[#A8895B] mx-auto rounded-full"></div>
  </div>

  <Slider
    dots={true}
    infinite={true}
    speed={700}
    slidesToShow={3}
    slidesToScroll={1}
    autoplay={true}
    autoplaySpeed={4000}
    arrows={true}
    responsive={[
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ]}
  >
    {galleryImages.map((src, index) => (
      <div key={index} className="px-4">
        <div className="overflow-hidden rounded-2xl shadow-xl group">
          <Image
            src={src}
            alt={`Gallery ${index}`}
            width={600}
            height={400}
            className="w-full h-[400px] object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-700"
          />
        </div>
      </div>
    ))}
  </Slider>
</section>

{/* Booking / Enquiry Form Section */}
{/* Booking / Enquiry Form Section */}
<section className="bg-white py-24 px-4 sm:px-12" id="booking">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl sm:text-5xl font-bold text-center text-[#2C2C2C] mb-2">
      Enquiry Form
    </h2>
    <div className="w-16 h-[2px] bg-[#A8895B] mx-auto mb-12 rounded-full"></div>

    {submitted ? (
     <div className="bg-[#F6F4EF] border border-[#A8895B] rounded-xl p-6 text-center shadow-lg mb-12 animate-fade-in">
  <div className="text-[#A8895B] text-2xl font-semibold mb-2 tracking-wide">
     Booking Successful
  </div>
  <p className="text-gray-700 text-sm sm:text-base max-w-xl mx-auto">
    Thank you for your enquiry. Our team will contact you shortly to arrange payment and confirm your  service.
  </p>
</div>

    ) : (
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Personal Info */}
        <div>
          <h3 className="text-md font-semibold text-[#2C2C2C] mb-3">Personal Info</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              name="entry.241128140"
              placeholder="Name*"
              required
              className="bg-[#FAF8F5] placeholder-gray-500 text-gray-700 px-4 py-3 rounded-md w-full focus:outline-none border"
            />
            <input
              type="tel"
              name="entry.1867721580"
              placeholder="Phone*"
              required
              className="bg-[#FAF8F5] placeholder-gray-500 text-gray-700 px-4 py-3 rounded-md w-full focus:outline-none border"
            />
            <input
              type="email"
              name="entry.1222550185"
              placeholder="Email*"
              required
              className="bg-[#FAF8F5] placeholder-gray-500 text-gray-700 px-4 py-3 rounded-md w-full focus:outline-none border"
            />
          </div>
        </div>

        {/* Date & Location */}
        <div>
          <h3 className="text-md font-semibold text-[#2C2C2C] mb-3">Date & Location</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              name="entry.2022935511"
              placeholder="Pickup Location"
              className="bg-[#FAF8F5] placeholder-gray-500 text-gray-700 px-4 py-3 rounded-md w-full focus:outline-none border"
            />
            <input
              type="text"
              name="entry.378846262"
              placeholder="Drop-off Location"
              className="bg-[#FAF8F5] placeholder-gray-500 text-gray-700 px-4 py-3 rounded-md w-full focus:outline-none border"
            />
            <input
              type="date"
              name="entry.1182135585"
              className="bg-[#FAF8F5] text-gray-700 px-4 py-3 rounded-md w-full focus:outline-none border"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <textarea
            name="entry.1276024601"
            placeholder="Message"
            className="bg-[#FAF8F5] placeholder-gray-500 text-gray-700 px-4 py-3 rounded-md w-full min-h-[120px] focus:outline-none border"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-[#A8895B] hover:bg-yellow-500 text-white font-semibold py-3 px-8 rounded-md transition duration-300"
          >
            {loading ? "Submitting..." : "Request a Quote"}
          </button>
        </div>
      </form>
    )}
  </div>
</section>

{/* Footer Section */}
<footer className="bg-[#202241] py-6 relative">
  <div className="max-w-7xl mx-auto px-4 text-center">
    <p className="text-sm text-gray-300">
      © Terus Maju Resources Malaysia. All Rights Reserved.
    </p>
  </div>

  {/* Scroll to Top Button */}
  <a
    href="#"
    className="absolute top-2 right-4 bg-white/10 hover:bg-white/20 p-2 rounded-md transition-all duration-300"
  >
    <svg
      xmlns=""
      className="h-4 w-4 text-[#A8895B]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
    </svg>
  </a>
</footer>




    </>
  );
}
