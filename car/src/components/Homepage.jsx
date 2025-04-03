import React, { useState } from "react";
import { FaMapMarkerAlt, FaBars, FaTimes } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import backgroundImage from "../images/bgimage.jpg";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import suv from "../images/suv.jpg";
import convertible from "../images/convertible.jpg";
import hyundai from "../images/hyundai.jpg";
import corolla from "../images/corolla.jpg";
import logo6 from "../images/logo6.jpg"



const CarRentalWebsite = () => {
 
  const { scrollYProgress } = useViewportScroll();
  const scrollX = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const [booked, setBooked] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the hamburger menu

  const handleBooking = () => {
    setBooked(true);
  };

  const cars = [
    {
      name: "Corolla",
      image: corolla,
      description: "A comfortable and stylish sedan for all your needs.",
      price: "$75/day",
    },
    {
      name: "hyundai",
      image: hyundai,
      description: "Speed and style combined. Perfect for a thrill-seeker.",
      price: "$120/day",
    },
    {
      name: "SUV",
      image: suv,
      description: "Spacious and powerful. Great for family trips and adventures.",
      price: "$90/day",
    },
    {
      name: "Convertible",
      image: convertible,
      description: "Feel the wind in your hair while driving this stylish car.",
      price: "$110/day",
    },
    // {
    //   name: "Family Van",
    //   image: "https://example.com/family-van.jpg",
    //   description: "Comfort and space for the whole family.",
    //   price: "$95/day",
    // },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[90%] bg-transparent rounded-lg shadow-lg p-4 z-50">
        <div className="flex items-center justify-between">
          {/* Logo on the Left */}
          <div className="text-white font-semibold text-xl">
            <span>Danful Autos</span>
          </div>

          {/* Nav Links for Large Screens */}
          <div className="hidden lg:flex space-x-8">
            <a href="#" className="text-white font-semibold">Home</a>
            <a href="#available-cars" className="text-white font-semibold">Available Cars</a>
            <a href="#about" className="text-white font-semibold">About Us</a>
          </div>

          {/* Hamburger Menu on Small Screens */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <FaTimes size={24} className="text-white" /> : <FaBars size={24} className="text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu (Hamburger) */}
        {isMenuOpen && (
          <div className="lg:hidden flex flex-col items-center mt-4 space-y-4">
            <a href="#" className="text-white font-semibold">Home</a>
            <a href="#available-cars" className="text-white font-semibold">Available Cars</a>
            <a href="#about" className="text-white font-semibold">About Us</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center h-screen bg-blue-500 text-white text-center px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-5xl font-bold mb-4">Rent Your Dream Car Today</h1>
        <p className="text-lg mb-6">Best rental services with affordable pricing and top-notch vehicles.Book your ride with us today and experience the difference!</p>
        <button
          onClick={handleBooking}
          className="px-6 py-3 bg-yellow-400 text-black rounded-lg shadow-lg hover:bg-yellow-500"
        >
          Book Now
        </button>

        {/* Location Card */}
        <div className="absolute bottom-4 right-4 hidden lg:block bg-white shadow-lg rounded-lg p-4">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt size={24} className="text-red-500" />
            <a href="https://goo.gl/maps/example" target="_blank" rel="noopener noreferrer" className="text-blue-500">
              View Location
            </a>
          </div>
        </div>
      </section>

      {/* Available Cars Section */}
      <section className="py-16 px-6 bg-gray-200" id="available-cars">
        <h2 className="text-3xl font-bold text-center mb-10">Available Cars</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {cars.map((car, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{car.name}</h3>
                <p className="text-sm text-gray-600">{car.description}</p>
                <p className="text-lg font-semibold text-gray-800 mt-2">{car.price}</p>
                <button className="w-full mt-4 py-2 bg-yellow-400 text-black rounded-lg shadow-lg hover:bg-yellow-500">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 px-6 bg-white text-center" id="about">
        <h2 className="text-3xl font-bold mb-8">About Us</h2>
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side - Description */}
          <div className="lg:w-1/2">
            <p className="text-lg text-gray-700 mb-4">
            At Danful autos, we provide a seamless and hassle-free car rental experience. We offer a wide range of vehicles to suit all your needs, whether you're on a weekend getaway, a business trip, or simply need a reliable car.
            </p>
            <h2 className="text-lg font-semibold">
            Why Choose Us:
            </h2>
            <ul className="max-w-3xl mx-auto text-lg text-left list-disc list-inside space-y-3">
        <li><span className="font-semibold">Wide Range of Vehicles:</span> Compact, SUVs, luxury cars, and more.</li>
        <li><span className="font-semibold">Affordable & Competitive Rates:</span> Flexible rental options to fit any budget.</li>
        <li><span className="font-semibold">Well-Maintained Fleet:</span> Safe, clean, and road-ready cars.</li>
        <li><span className="font-semibold">Customer Satisfaction:</span> Easy booking, excellent service, and hassle-free rentals.</li>
      </ul>
     
          </div>

          {/* Right side - Image */}
          <div className="lg:w-1/2">
            <img
            src={logo6}
              alt="About Us"
              className="w-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Car Logos Section */}
     

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6">
  <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center">
    {/* Centered Logo */}
    <div className="mb-4 lg:mb-0">
      <img src="path-to-your-logo.png" alt="Danful Autos Logo" className="h-10 mx-auto" />
    </div>

    {/* Social Media Links */}
    <div className="flex space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <FaLinkedin size={24} />
            </a>
          </div>
  </div>

  {/* Copyright in the center */}
  <div className="mt-4 text-center">
    <p>&copy; 2025 Danful Autos. All rights reserved.</p>
  </div>
</footer>

     
    </div>
  );
};

export default CarRentalWebsite;
