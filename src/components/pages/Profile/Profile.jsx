"use client";
import React, { useState } from "react";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const FormInput = ({ placeholder, type = "text", isSelect = false }) => (
    <div  className="relative">
      {!isSelect && (
        <>
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500 font-bold text-lg">
            #
          </span>
          <input
            type={type}
            className="border p-2 pl-8 w-full rounded mt-1 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500"
            placeholder={placeholder}
          />
        </>
      )}
      {isSelect && (
        <>
          <span className="absolute  left-3 top-[55%] transform -translate-y-1/2 text-purple-500 font-bold text-lg pointer-events-none">
            #
          </span>
          <select className="border p-2 pl-8 w-full rounded mt-1 appearance-none bg-white focus:ring-blue-500 focus:border-blue-500 cursor-pointer">
            <option>{placeholder}</option>
            <option>English</option>
            <option>Hindi</option>
          </select>
          <span className="absolute right-3 top-[55%] transform -translate-y-1/2 text-gray-500 pointer-events-none">
            &#9662;
          </span>
        </>
      )}
    </div>
  );

  return (
    <div className="w-full min-h-[70vh]">
      
      <div className="flex w-full border-b text-lg sm:text-base mb-6">
        <button
          onClick={() => setActiveTab("profile")}
          className={`flex-1 text-center py-3 font-medium ${
            activeTab === "profile"
              ? "border-b-2 border-blue-500 text-blue-600"
              : "text-gray-700"
          }`}
        >
          <i className="ri-user-line"></i> प्रोफाइल
        </button>
        <button
          onClick={() => setActiveTab("suchnaye")}
          className={`flex-1 text-center py-3 font-medium ${
            activeTab === "suchnaye"
              ? "border-b-2 border-blue-500 text-blue-600"
              : "text-gray-700"
          }`}
        >
          <i className="ri-notification-3-line"></i> Suchnaye
        </button>
        <button
          onClick={() => setActiveTab("password")}
          className={`flex-1 text-center py-3 font-medium ${
            activeTab === "password"
              ? "border-b-2 border-blue-500 text-blue-600"
              : "text-gray-700"
          }`}
        >
          <i className="ri-lock-password-line"></i> Update Password
        </button>
      </div>

     
      <div className="w-[90vw]">
        {activeTab === "profile" && (
         
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full px-4"> 
            <FormInput placeholder="First Name" />
            <FormInput placeholder="Last Name" />
            <FormInput placeholder="User Name" />
            <FormInput placeholder="Language" isSelect={true} />
            <FormInput placeholder="Email Id" type="email" />
            <FormInput placeholder="Mobile Number" type="text" />

            <div className="sm:col-span-2 relative w-full">
              <span className="absolute left-3 top-3 text-purple-500 font-bold text-lg">
                #
              </span>
              <textarea
                className="border p-2 pl-8 w-full rounded mt-1 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500"
                rows="3"
                placeholder="Description"
              ></textarea>
            </div>
          </div>
        )}

        {activeTab === "suchnaye" && (
         
          <div className="w-full px-4">
            <div className="p-6 border rounded bg-gray-50 text-gray-700 w-full">
              🎵 Suchnaye content yahan aayega
            </div>
          </div>
        )}

        {activeTab === "password" && (
         
          <div className="w-full px-4">
            <div className="p-6 border rounded bg-gray-50 space-y-4 w-full">
              <FormInput placeholder="New Password" type="password" />
              <FormInput placeholder="Confirm Password" type="password" />
            </div>
          </div>
        )}
      </div>
     <div className="text-center mt-10">
       <button className="w-[200px] bg-blue-600 py-3 rounded-md text-white">Update Profile</button>
     </div>
    </div>
  );
};

export default Profile;
