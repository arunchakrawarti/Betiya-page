"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Apni = () => {
  return (
    <div className="flex flex-col lg:flex-row w-[90%] m-auto lg:mt-0 mt-10 gap-10">
      
     
      <div className="flex-shrink-0 lg:w-[600px] w-full">
        <Image
          src="/img/esk1.png"
          height={674}
          width={600}
          alt="esk1.png"
          className="w-full h-auto object-cover"
        />
      </div>

     
      <div className="lg:ml-20 mt-2 flex-1">
        <h1 className="text-4xl font-extrabold">अनकही मोहब्बत</h1>

       
        <div className="flex flex-wrap justify-start lg:w-[60%] mt-8 gap-3">
          <button className="bg-gray-200 rounded-2xl px-3 py-3">हॉरर</button>
          <button className="bg-gray-200 rounded-2xl px-3 py-3">सस्पेंस/थ्रिलर</button>
          <button className="bg-gray-200 rounded-2xl px-3 py-3">आपराधिक</button>
        </div>

      
        <p className="mt-8 text-base leading-7">
          मोहब्बत एक एहसास है, जो शब्दों में नहीं बयां हो सकता। <br />
          जब आप किसी से सच्चा प्यार करते हैं, तो उसकी खुशी आपकी खुशी <br /> बन
          जाती है। हर पल, हर लम्हा उसके बारे में सोचना, उसकी <br />
          छोटी-छोटी आदतों को महसूस करना—यही असली मोहब्बत है।
        </p>

       
        <div className="flex flex-col sm:flex-row justify-between mt-10 lg:mt-60 w-[90%] gap-5">
          <div className="flex flex-col items-start">
            <p className="text-yellow-400 text-xl font-bold">
              ★ <span className="text-black">4.4</span>
            </p>
            <p>Rating</p>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-xl text-black font-bold">49 मिनट</p>
            <p>पढ़ने का समय</p>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-black font-bold">83326+</p>
            <p>लोगों ने पढ़ा</p>
          </div>
        </div>

       
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-5">
          <Link href="/Ankahimohbaat">
            <button className="bg-blue-600 w-full sm:w-[400px] rounded-3xl text-white font-bold py-6">
              अभी पढ़े
            </button>
          </Link>

          <div className="flex gap-3">
            <Image
              src="/img/share.png"
              className="bg-gray-300"
              height={78}
              width={80}
              alt="share.png"
            />
            <Image
              src="/img/download.png"
              className="bg-gray-300"
              height={78}
              width={80}
              alt="download.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apni;
