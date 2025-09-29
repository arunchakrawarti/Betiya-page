import Image from "next/image";
import React from "react";

const Photo = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center mt-10 sm:justify-between w-[95%] sm:w-[90%] h-auto sm:h-[123px] m-auto bg-[#cff4ff] rounded-2xl p-4 sm:p-0">
    
      <div className="flex flex-col sm:flex-row items-center ml-5 text-center sm:text-left gap-4 sm:gap-10">
        <Image
          src="/img/man.png"
          className="rounded-full"
          height={110}
          width={110}
          alt="man.png"
        />
        <div>
          <p className="text-black font-bold text-lg sm:text-xl">
            :)preety;)sarkar...."परिचय"
          </p>
          <p className="pt-1 text-sm sm:text-base">713 अनुयायी</p>
        </div>
      </div>

     
      <div className="mt-4 mr-7 sm:mt-0">
        <button className="bg-blue-700 px-6 sm:px-10 py-2 sm:py-4 rounded-2xl text-white text-sm sm:text-base">
          फॉलो
        </button>
      </div>
    </div>
  );
};

export default Photo;
