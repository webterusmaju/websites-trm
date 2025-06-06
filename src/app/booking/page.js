// pages/booking.js
"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function BookingPage() {
  const carOptions = [
    { name: "Perodua Bezza 1.3", price: "RM100.00 / Day", image: "/car-img/bezza.png" },
    { name: "Proton Saga 1.3", price: "RM100.00 / Day", image: "/car-img/saga.png" },
    { name: "Toyota Vios 1.5", price: "RM120.00 / Day", image: "/car-img/vios.png" },
    { name: "Honda City 1.5", price: "RM120.00 / Day", image: "/car-img/honda-city.png" },
    { name: "Toyota Innova 2.0", price: "RM160.00 / Day", image: "/car-img/innova.png" },
    { name: "Toyota Voxy 2.0", price: "RM160.00 / Day", image: "/car-img/voxy.png" },
    { name: "Toyota Camry 2.5", price: "RM180.00 / Day", image: "/car-img/camry.png" },
    { name: "Honda Accord 2.4", price: "RM180.00 / Day", image: "/car-img/accord.png" },
    { name: "Toyota Vellfire 3.5", price: "RM220.00 / Day", image: "/car-img/vellfire.png" },
    { name: "Grand Hyundai Starex 2.5", price: "RM250.00 / Day", image: "/car-img/straxe.png" },
    { name: "Toyota Hiace 3.0", price: "RM300.00 / Day", image: "/car-img/heice.png" },
    { name: "Mercedes-Benz C200", price: "RM400.00 / Day", image: "/car-img/mercedes.png" },
    { name: "BMW", price: "RM400.00 / Day", image: "/car-img/bmw.png" },
  ];

  const [selectedCar, setSelectedCar] = useState(carOptions[0].name);
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <>
      <Navbar />

      {/* Car Section */}
      <section className="bg-white py-16 px-6 sm:px-12">
        <h2 className="text-3xl font-bold text-center text-[#1C1C1C] mb-10">Choose Your Car</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {carOptions.map((car, i) => (
            <div key={i} className="border rounded-xl shadow-lg overflow-hidden bg-white">
              <Image src={car.image} alt={car.name} width={800} height={500} className="w-full h-64 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-1 text-gray-800">{car.name}</h3>
                <p className="text-gray-600 mb-4">{car.price}</p>
                <button
                  onClick={() => {
                    setSelectedCar(car.name);
                    document.getElementById("urgent-booking").scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-[#D4AF37] hover:bg-[#c5a038] text-white font-semibold py-2 px-6 rounded-full"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Form */}
      <section id="urgent-booking" className="bg-[#1e1e1e] py-16 px-6 sm:px-12">
        <div className="max-w-4xl mx-auto bg-[#2b2b2b] border border-gray-700 rounded-2xl shadow-2xl p-10 space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#D4AF37] text-white">Urgent Car Booking</h1>
            <p className="text-gray-300 mt-2">Fill in your details to complete your booking</p>
          </div>

          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.target;
              const name = form.name.value;
              const email = form.email.value;
              const phone = form.phone.value;
              const pickupLocation = form.pickupLocation.value;
              const pickupDate = form.pickupDate.value;
              const pickupTime = form.pickupTime.value;
              const dropLocation = form.dropLocation.value;
              const dropDate = form.dropDate.value;
              const dropTime = form.dropTime.value;
              const notes = form.notes.value;

              const formData = new FormData();
              formData.append("entry.1242793116", selectedCar);
              formData.append("entry.1589861015", name);
              formData.append("entry.1298682969", email);
              formData.append("entry.38197127", phone);
              formData.append("entry.1045954874", pickupLocation);
              formData.append("entry.1063230868", pickupDate);
              formData.append("entry.733215374", pickupTime);
              formData.append("entry.485806253", dropLocation);
              formData.append("entry.1853447200", dropDate);
              formData.append("entry.471796680", dropTime);
              formData.append("entry.1114137327", notes);

              await fetch("https://docs.google.com/forms/d/e/1FAIpQLSdhwXOpE2eFYh26SeedJgWlx1dObtVkB81jOJi3Y6l_Cf1p-w/formResponse", {
                method: "POST",
                mode: "no-cors",
                body: formData,
              });

              setShowSuccess(true);
              form.reset();
            }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-semibold text-white mb-1">Selected Car</label>
              <select
                value={selectedCar}
                onChange={(e) => setSelectedCar(e.target.value)}
                className="w-full border border-gray-600 bg-[#1f1f1f] text-white placeholder-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:border-[#D4AF37]"
              >
                {carOptions.map((car, idx) => (
                  <option key={idx} value={car.name}>{car.name}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="email" name="email" placeholder="Email" required className="input-box bg-[#1f1f1f] text-white" />
              <input type="text" name="name" placeholder="Full Name" required className="input-box bg-[#1f1f1f] text-white" />
              <input type="tel" name="phone" placeholder="Phone Number" required className="input-box bg-[#1f1f1f] text-white" />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#D4AF37]">Pick Up Info</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
                <input type="text" name="pickupLocation" placeholder="Pick Up Location" required className="input-box bg-[#1f1f1f] text-white" />
                <input type="date" name="pickupDate" required className="input-box bg-[#1f1f1f] text-white" />
                <input type="time" name="pickupTime" required className="input-box bg-[#1f1f1f] text-white" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#D4AF37]">Drop Off Info</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
                <input type="text" name="dropLocation" placeholder="Drop-Off Location" required className="input-box bg-[#1f1f1f] text-white" />
                <input type="date" name="dropDate" required className="input-box bg-[#1f1f1f] text-white" />
                <input type="time" name="dropTime" required className="input-box bg-[#1f1f1f] text-white" />
              </div>
            </div>

            <textarea name="notes" placeholder="Additional Notes (optional)" rows={4} className="input-box w-full bg-[#1f1f1f] text-white" />

            <div className="flex items-start gap-2 text-sm text-gray-300">
              <input type="checkbox" required className="mt-1" />
              <label>I have read and accept the terms & conditions.</label>
            </div>

            <div className="text-center pt-4">
              <button type="submit" className="bg-[#D4AF37] hover:bg-[#c5a038] text-white font-semibold py-3 px-10 rounded-full shadow-md transition">
                Send Booking
              </button>
            </div>

            {showSuccess && (
              <div className="text-center text-green-400 text-lg font-semibold mt-4">
                ✅ Thank you for booking! We will contact you soon.
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
