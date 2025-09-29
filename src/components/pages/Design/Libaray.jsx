"use client"
import React, { useState } from 'react'

const Libaray = () => {
  const tabs = [
    { label: "पुस्तकालय", content: "यहाँ लेखक की पुस्तकालय की जानकारी दिखाई जाएगी।" },
    { label: "प्रकाशित रचनाएँ", content: "यहाँ लेखक की प्रकाशित रचनाओं की सूची दिखाई जाएगी।" },
    { label: "फॉलोअर्स", content: "यहाँ लेखक के अनुयायियों की संख्या दिखाई जाएगी।" },
    { label: "फॉलो", content: "यहाँ लेखक किन लोगों का अनुसरण कर रहे हैं, यह दिखेगा।" },
  ]

  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="w-[90%] h-[200px] mx-auto mt-15">
     
      <div className="flex justify-between border-b border-gray-300">
        {tabs.map((tab, index) => (
          <div
            key={index}
            onClick={() => setActiveTab(index)}
            className={`cursor-pointer py-2 px-4 text-center relative ${
              activeTab === index ? 'font-bold text-blue-600' : 'text-gray-600'
            }`}
          >
            {tab.label}
            {activeTab === index && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600"></span>
            )}
          </div>
        ))}
      </div>

     
      <div className="mt-4 p-4 bg-gray-50 rounded">
        <p>{tabs[activeTab].content}</p>
      </div>
    </div>
  )
}

export default Libaray
