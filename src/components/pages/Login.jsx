"use client";
import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-[90vw]">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white px-6 py-10 overflow-y-auto">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-center">
          SIGN IN
        </h1>
        <p className="text-gray-600 mb-4 md:mb-6 text-center text-lg md:text-2xl font-bold">
          Continue to your account
        </p>

        {/* Email Input */}
        <div className="flex w-full max-w-sm items-center bg-[#eff3ff] rounded-lg px-4 py-3 gap-2 mb-4">
          <Image
            src="/img/emaillogo.png"
            height={24}
            width={24}
            alt="emaillogo"
            className="mr-2"
          />
          <input
            type="email"
            placeholder="Email"
            className="flex-1 text-base md:text-xl bg-transparent outline-none"
          />
        </div>

        {/* Password Input */}
        <div className="flex w-full max-w-sm items-center bg-[#eff3ff] rounded-lg px-4 py-3 gap-2 mb-4">
          <Image
            src="/img/passwordlogo.png"
            height={24}
            width={24}
            alt="passwordlogo"
            className="mr-2"
          />
          <input
            type="password"
            placeholder="Password"
            className="flex-1 text-base md:text-xl bg-transparent outline-none"
          />
        </div>

        {/* Remember me & Forgot password */}
        <div className="flex w-full max-w-sm justify-between items-center mb-4 text-sm md:text-base">
          <label className="flex items-center text-gray-600">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <a href="#" className="text-blue-500 hover:underline">
            Forgot Password?
          </a>
        </div>

        {/* Sign In Button */}
        <button className="w-[200px] md:w-[230px] bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 md:py-4 rounded-lg text-lg md:text-xl font-semibold mb-6 hover:opacity-90">
          SIGN IN
        </button>

        {/* Divider */}
        <div className="flex items-center gap-4 w-full max-w-xs mb-6">
          <hr className="flex-1 border-gray-300" />
          <span className="text-gray-700 text-sm md:text-base">
            Login with Others
          </span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Google Login */}
        <button className="w-full max-w-sm flex items-center justify-center text-gray-400 border border-gray-200 gap-3 rounded-2xl py-3 md:py-4 mb-4 hover:bg-gray-50">
          <Image
            src="/img/googlelogo.png"
            height={28}
            width={28}
            alt="googlelogo"
            className="mr-2"
          />
          Login with <span className="text-gray-600 font-bold">Google</span>
        </button>

        {/* Facebook Login */}
        <button className="w-full max-w-sm flex items-center justify-center text-gray-400 border border-gray-200 gap-3 rounded-2xl py-3 md:py-4 hover:bg-gray-50">
          <Image
            src="/img/facebooklogo.png"
            height={28}
            width={28}
            alt="facebooklogo"
            className="mr-2"
          />
          Login with <span className="text-gray-600 font-bold">Facebook</span>
        </button>

        {/* Signup Link */}
        <p className="text-center mt-6 text-base md:text-xl">
          No Account yet?{" "}
          <span className="text-blue-500 font-semibold cursor-pointer underline underline-offset-2">
            SIGN UP
          </span>
        </p>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex w-1/2 min-h-screen bg-gradient-to-r from-indigo-300 to-blue-600 flex-col items-center justify-center relative text-white">
        <Image
          src="/img/Women.png"
          height={613}
          width={545}
          alt="Women"
          className="mb-8 ml-8"
        />
        <Image
          src="/img/betiyalogo.png"
          alt="betiyalogo"
          className="absolute bottom-40 left-25"
          height={80}
          width={160}
        />
      </div>
    </div>
  );
};

export default Login;
