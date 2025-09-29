"use client";
import React from "react";
import Head from "next/head";

const Prakash = () => {
  // Menu Bar
  const menuBar = (
    <div className="flex items-center text-xs sm:text-sm border-b border-gray-300 bg-gray-100/50 overflow-x-auto sm:overflow-visible">
      <div className="flex justify-evenly w-max sm:w-full p-2 pl-3 text-gray-700 text-xl font-bold  space-x-6 sm:space-x-0">
        <span className="cursor-pointer hover:text-blue-600">File</span>
        <span className="cursor-pointer hover:text-blue-600">Edit</span>
        <span className="cursor-pointer hover:text-blue-600">View</span>
        <span className="cursor-pointer hover:text-blue-600">Insert</span>
        <span className="cursor-pointer hover:text-blue-600">Format</span>
        <span className="cursor-pointer hover:text-blue-600">Tools</span>
        <span className="cursor-pointer hover:text-blue-600">Table</span>
        <span className="cursor-pointer hover:text-blue-600">Help</span>
      </div>
    </div>
  );

  // Toolbar
  const toolbar = (
    <div className="flex flex-wrap sm:flex-nowrap gap-4 sm:gap-12 justify-start items-center p-1 border-b border-gray-300  w-max sm:w-full overflow-x-auto font-bold sm:overflow-visible">
      {/* Undo/Redo */}
      <ToolbarButton icon="↩" />
      <ToolbarButton icon="↪" />
      <Divider />

      {/* Formatting */}
      <ToolbarButton icon="B" bold />
      <ToolbarButton icon="I" italic />
      <ToolbarButton icon="U" underline />
      <ToolbarButton icon="S" strikethrough />
      <Divider />

      {/* Alignment */}
      <ToolbarButton icon="≡" />
      <ToolbarButton icon="—" />
      <ToolbarButton icon="≡" />
      <ToolbarButton icon="≡" />
      <Divider />

      {/* List/Indent */}
      <ToolbarButton icon="•≡" />
      <ToolbarButton icon="1≡" />
      <ToolbarButton icon=">" />
      <Divider />

      {/* More */}
      <ToolbarButton icon="•••" />
    </div>
  );

  return (
    <>
      <Head>
        <title>नया ड्राफ्ट - 22/02/2025</title>
      </Head>

      <div className="flex flex-col h-screen w-[calc(100%-40px)] mx-[20px] border border-blue-400 overflow-hidden">
        {/* 1. Header */}
        <div className="flex flex-wrap justify-between items-center p-2 sm:p-3 bg-blue-500 text-white font-semibold flex-shrink-0">
          <h1 className="text-sm sm:text-base md:text-lg">
            नया ड्राफ्ट - 22/02/2025
          </h1>
          <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-3 text-xs sm:text-sm mt-2 sm:mt-0">
            <button className="px-2 sm:px-3 py-1 rounded-sm bg-blue-700 hover:bg-blue-800">
              प्रकाशित करे
            </button>
            <button className="px-2 sm:px-3 py-1 rounded-sm bg-white text-blue-500 font-normal hover:bg-gray-100">
              सहेजें
            </button>
            <button className="px-2 sm:px-3 py-1 rounded-sm bg-white text-blue-500 font-normal hover:bg-gray-100">
              प्रिंट
            </button>
          </div>
        </div>

        {/* 2. Editor Area */}
        <div className="flex flex-col flex-grow overflow-hidden border-t border-gray-300">
          {/* Menu Bar */}
          <div className="overflow-x-auto sm:overflow-hidden">{menuBar}</div>
          {/* Toolbar */}
          <div className="overflow-x-auto sm:overflow-hidden">{toolbar}</div>

          {/* Main Content */}
          <div className="flex-grow p-2 sm:p-4 bg-white overflow-y-auto">
            <textarea
              className="w-full h-full resize-none border-none focus:outline-none text-sm sm:text-base"
              placeholder="यहाँ लिखें..."
            ></textarea>
          </div>
        </div>

        {/* 3. Footer */}
        <div className="flex flex-wrap justify-between items-center px-2 sm:px-3 py-1 text-[10px] sm:text-xs text-gray-600 border-t border-gray-300 bg-gray-100 flex-shrink-0">
          <p>P</p>
          <div className="flex flex-wrap space-x-2 sm:space-x-4 mt-1 sm:mt-0">
            <p>0 WORDS</p>
            <p className="font-bold">POWERED BY TINY</p>
          </div>
        </div>
      </div>
    </>
  );
};

// Divider line
const Divider = () => (
  <div className="border-l border-gray-300 h-6 mx-1 hidden sm:block"></div>
);

// Toolbar button
const ToolbarButton = ({ icon, bold, italic, underline, strikethrough }) => (
  <button
    className={`px-2 py-1 sm:py-1.5 rounded hover:bg-gray-300 text-sm sm:text-lg text-gray-700
      ${bold ? "font-bold" : ""}
      ${italic ? "italic" : ""}
      ${underline ? "underline" : ""}
      ${strikethrough ? "line-through" : ""}`}
    title={icon}
  >
    {icon}
  </button>
);

export default Prakash;
