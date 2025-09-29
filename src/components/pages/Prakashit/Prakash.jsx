"use client";
import React from "react";
import Head from "next/head";

const Prakash = () => {
  const menuItems = ["File","Edit","View","Insert","Format","Tools","Table","Help"];
  const toolbarItems = [
    { icon: "↩" }, { icon: "↪" }, "divider",
    { icon: "B", bold: true }, { icon: "I", italic: true }, { icon: "U", underline: true }, { icon: "S", strikethrough: true }, "divider",
    { icon: "≡" }, { icon: "—" }, { icon: "≡" }, { icon: "≡" }, "divider",
    { icon: "•≡" }, { icon: "1≡" }, { icon: ">" }, "divider",
    { icon: "•••" }
  ];

  return (
    <>
      <Head>
        <title>नया ड्राफ्ट - 22/02/2025</title>
      </Head>

      <div className="flex flex-col h-screen w-[80vw] border border-blue-400 overflow-hidden">

        {/* Header */}
        <div className="flex w-[80vw] flex-col sm:flex-row justify-between items-start sm:items-center p-2 sm:p-3 bg-blue-500 text-white font-semibold gap-2">
          <h1 className="text-sm sm:text-base md:text-lg break-words w-full sm:w-auto">
            नया ड्राफ्ट - 22/02/2025
          </h1>
          <div className="flex flex-wrap justify-start sm:flex-nowrap gap-1 sm:gap-3 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none px-2 sm:px-3 py-1 rounded-sm bg-blue-700 hover:bg-blue-800 text-[10px] sm:text-xs text-center">
              प्रकाशित करे
            </button>
            <button className="flex-1 sm:flex-none px-2 sm:px-3 py-1 rounded-sm bg-white text-blue-500 font-normal hover:bg-gray-100 text-[10px] sm:text-xs text-center">
              सहेजें
            </button>
            <button className="flex-1 sm:flex-none px-2 sm:px-3 py-1 rounded-sm bg-white text-blue-500 font-normal hover:bg-gray-100 text-[10px] sm:text-xs text-center">
              प्रिंट
            </button>
          </div>
        </div>

        {/* Editor Area */}
        <div className="flex flex-col flex-grow overflow-hidden border-t border-gray-300">

          {/* Menu Bar */}
          <div className="overflow-x-auto bg-gray-100/50">
            <div className="flex flex-wrap sm:flex-nowrap p-2 justify-between gap-2 text-gray-700 font-bold">
              {menuItems.map((item) => (
                <span key={item} className="cursor-pointer hover:text-blue-600 whitespace-nowrap text-sm sm:text-base">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Toolbar */}
          <div className="overflow-x-auto bg-gray-50 p-1">
            <div className="flex justify-between flex-wrap sm:flex-nowrap gap-1 sm:gap-3">
              {toolbarItems.map((item, index) => {
                if (item === "divider") return <Divider key={index} />;
                return <ToolbarButton key={index} {...item} />;
              })}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-grow p-2 sm:p-4 bg-white overflow-y-auto">
            <textarea
              className="w-full h-full resize-none border-none focus:outline-none text-sm sm:text-base"
              placeholder="यहाँ लिखें..."
            ></textarea>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-wrap justify-between items-center px-2 sm:px-3 py-1 text-[10px] sm:text-xs text-gray-600 border-t border-gray-300 bg-gray-100 gap-1">
          <p>P</p>
          <div className="flex flex-wrap gap-2 sm:gap-4 items-center">
            <p>0 WORDS</p>
            <p className="font-bold">POWERED BY TINY</p>
          </div>
        </div>
      </div>
    </>
  );
};

// Divider line
const Divider = () => <div className="border-l border-gray-300 h-6 mx-1 hidden sm:block"></div>;

// Toolbar button
const ToolbarButton = ({ icon, bold, italic, underline, strikethrough }) => (
  <button
    className={`px-2 py-1 sm:py-1.5 rounded hover:bg-gray-300 text-sm sm:text-lg text-gray-700
      ${bold ? "font-bold" : ""} ${italic ? "italic" : ""} ${underline ? "underline" : ""} ${
      strikethrough ? "line-through" : ""
    }`}
    title={icon}
  >
    {icon}
  </button>
);

export default Prakash;



