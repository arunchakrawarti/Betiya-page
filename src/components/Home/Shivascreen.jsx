"use client"
import Image from "next/image";
import React, { useRef } from "react";

const images = [
  "/img/shivajilogo.png",
  "/img/shivajilogo2.png",
  "/img/shivajilogo3.png",
  "/img/shivajilogo4.png",
  "/img/shivajilogo5.png"
];

const Shivascreen = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -sliderRef.current.offsetWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: sliderRef.current.offsetWidth, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full max-w-[1380px] mx-auto overflow-hidden">
      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex overflow-x-hidden scroll-smooth"
      >
        {images.map((img, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            <Image
              src={img}
              alt={`slider-${index}`}
              width={1380}
              height={483}
              // ✅ Responsive classes
              className="w-full lg:w-[1380px] h-auto object-cover"
            />
          </div>
        ))}
      </div>

      {/* Left Button */}
      <button
        onClick={scrollLeft}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-900 transition z-10"
      >
        &#8592;
      </button>

      {/* Right Button */}
      <button
        onClick={scrollRight}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-900 transition z-10"
      >
        &#8594;
      </button>
    </div>
  );
};

export default Shivascreen;


