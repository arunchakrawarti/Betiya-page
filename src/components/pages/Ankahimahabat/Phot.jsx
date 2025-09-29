import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";
import { FiShare2, FiDownload } from "react-icons/fi";

const Phot = () => {
  return (
    <div className="flex justify-center mt-10 w-full">
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col sm:flex-row w-full h-auto rounded-2xl shadow-sm overflow-hidden">
          
          {/* Left Section */}
          <div className="flex items-center gap-4 sm:gap-6 bg-[#cff4ff] px-4 sm:px-6 py-4 w-full sm:w-1/2 border-l-8 border-dashed border-white">
            
            {/* Profile Image */}
            <div className="relative">
              <Image
                src="/img/man.png"
                className="rounded-full object-cover"
                height={90}
                width={90}
                alt="Author Profile"
              />
              <div className="absolute bottom-1 right-2 w-4 h-4 bg-white rounded-full border-2 border-pink-400"></div>
            </div>

            {/* Name + Followers */}
            <div className="flex flex-col justify-center gap-1">
              <p className="text-black font-semibold text-lg sm:text-xl">
                :) preety ;) sarkar.... <span className="text-xl">"तूतून"</span>
              </p>
              <p className="text-sm sm:text-base text-gray-600">713 फॉलोअर्स</p>
            </div>

            {/* Follow Button */}
            <Link href="/Design123">
            <button className="bg-blue-600 px-4 sm:px-6 py-2 sm:py-4 rounded-lg text-white font-medium text-sm sm:text-base whitespace-nowrap ml-18">
              फॉलो
            </button>
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex flex-col sm:flex-row justify-around items-center bg-white p-4 w-full sm:w-1/2 gap-4 sm:gap-0">
            
            {/* Rating + Next Chapter */}
            <div className="flex flex-col items-center justify-center gap-2 w-full sm:w-auto">
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400 text-lg" />
                  <FaStar className="text-yellow-400 text-lg" />
                  <FaStar className="text-yellow-400 text-lg" />
                  <FaStar className="text-yellow-400 text-lg" />
                  <FaStar className="text-gray-300 text-lg" />
                  <span className="ml-1 font-bold text-lg text-black">4.0</span>
                </div>
                <p className="text-sm text-gray-600 whitespace-nowrap">Rating De</p>
              </div>
              <button className="bg-blue-600 w-full sm:w-auto px-8 py-3 rounded-lg text-white font-semibold text-sm sm:text-lg whitespace-nowrap">
                Next Chapter
              </button>
            </div>

            {/* Divider */}
            <div className="hidden sm:block h-20 w-[1px] bg-gray-200"></div>

            {/* Read Time + Share */}
            <div className="flex flex-col items-center justify-center gap-2 w-full sm:w-auto">
              <div className="flex flex-col items-center text-center">
                <p className="font-bold text-base sm:text-lg text-black">49 मिनट</p>
                <p className="text-sm text-gray-600 whitespace-nowrap">पढ़ने का समय</p>
              </div>
              <button className="bg-white border border-gray-200 rounded-lg p-2.5 text-3xl sm:text-4xl text-gray-700 shadow-md hover:bg-gray-100 transition-colors">
                <FiShare2 />
              </button>
            </div>

            {/* Divider */}
            <div className="hidden sm:block h-20 w-[1px] bg-gray-200"></div>

            {/* Read Count + Download */}
            <div className="flex flex-col items-center justify-center gap-2 w-full sm:w-auto">
              <div className="flex flex-col items-center text-center">
                <p className="font-bold text-base sm:text-lg text-black">83326+</p>
                <p className="text-sm text-gray-600 whitespace-nowrap">लोगों ने पढ़ा</p>
              </div>
              <button className="bg-white border border-gray-200 rounded-lg p-2.5 text-3xl sm:text-4xl text-gray-700 shadow-md hover:bg-gray-100 transition-colors">
                <FiDownload />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phot;
