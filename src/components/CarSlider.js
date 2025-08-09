"use client";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

const cars = [
  {
    name: "Bezza/Saga/Myvi",
    price: "RM100.00 / Per Trip",
    image: "/car-img/bezza.png",
    category: "Economy Sedan",
    capacity: "Up to 4 passengers"
  },
  // {
  //   name: "Bezza/Saga/Myvi",
  //   price: "RM100.00 / Per Trip",
  //   image: "/car-img/saga.png",
  //   category: "Economy Sedan",
  //   capacity: "Up to 4 passengers"
  // },
  {
    name: "Vios/Honda City",
    price: "RM120.00 / Per Trip",
    image: "/car-img/vios.png",
    category: "Economy Sedan",
    capacity: "Up to 4 passengers"
  },
  // {
  //   name: "Vios/Honda City",
  //   price: "RM120.00 / Per Trip",
  //   image: "/car-img/honda-city.png",
  //   category: "Economy Sedan",
  //   capacity: "Up to 4 passengers"
  // },
  {
    name: "Innova/Alza/Aruz",
    price: "RM160.00 / Per Trip",
    image: "/car-img/innova.png",
    category: "Compact MPV",
    capacity: "Up to 5 passengers"
  },
  {
    name: "Voxy/Serena/Spada/estima",
    price: "RM180.00 / Per Trip",
    image: "/car-img/voxy.png",
    category: "Compact MPV",
    capacity: "Up to 5 passengers"
  },
  {
    name :"Accord/Camry/Civic/Altis",
    price: "RM180.00 / Per Trip",
    image: "/car-img/camry.png",
    category: "Standard Sedan",
    capacity: "Up to 4 passengers"
  },
  // {
  //   name: "Honda Accord 2.4",
  //   price: "RM180.00 / Per Trip",
  //   image: "/car-img/accord.png",
  //   category: "Standard Sedan",
  //   capacity: "Up to 4 passengers"
  // },
  {
    name: "Vellfire/Alphard",
    price: "RM220.00 / Per Trip",
    image: "/car-img/vellfire.png",
    category: "Premium MPV",
    capacity: "Up to 6 passengers"
  },
  {
    name: "Staria/Starex",
    price: "RM250.00 / Per Trip",
    image: "/car-img/straxe.png",
    category: "Family Van",
    capacity: "Up to 10 passengers"
  },
  {
    name: "Toyota Hiace 3.0",
    price: "RM300.00 / Per Trip",
    image: "/car-img/heice.png",
    category: "VIP Van",
    capacity: "Up to 16 passengers"
  },
  {
    name: "Mercedes-Benz E200",
    price: "RM400.00 / Per trip",
    image: "/car-img/mercedes.png",
    category: "Luxury Sedan",
    capacity: "Up to 3 passengers"
  },
  {
    name: "BMW 5 Series",
    price: "RM400.00 / Per Trip",
    image: "/car-img/bmw.png",
    category: "Luxury Sedan",
    capacity: "Up to 3 passengers"
  }
];

export default function CarSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } }
    ]
  };

  return (
    <section className="bg-[#f8f8f8] py-16 px-6 sm:px-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-[#1C1C1C]">
          <span className="text-[#D4AF37]">Malaysia</span> Airport CabTaxi
        </h2>
        <Link href="/booking">
          <button className="bg-[#D4AF37] hover:bg-[#c5a038] text-white px-4 py-2 rounded-md font-semibold transition">
            View All Car
          </button>
        </Link>
      </div>

      <Slider {...settings}>
        {cars.map((car, index) => (
          <div key={index} className="px-2">
            <div className="bg-white rounded-xl shadow-md overflow-hidden p-4 text-center">
              <Image
                src={car.image}
                alt={car.name}
                width={400}
                height={250}
                className="w-full h-48 object-contain mx-auto"
              />
              <h3 className="text-xl font-semibold mt-4 text-[#1C1C1C]">{car.name}</h3>
              <p className="text-[#D4AF37] font-medium">{car.price}</p>
              <p className="text-sm text-gray-500 mt-1">{car.category}</p>
              <p className="text-sm text-gray-500">{car.capacity}</p>
              <Link href="/booking">
                <button className="mt-4 bg-[#D4AF37] hover:bg-[#c5a038] text-white py-2 px-6 rounded-md font-semibold transition">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
