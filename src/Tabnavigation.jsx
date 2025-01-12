import React, { useState } from "react";

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = [
    "Overview",
    "Fundamentals",
    "News Insights",
    "Sentiments",
    "Team",
    "Technicals",
    "Tokenomics",
  ];

  return (
    <div className='bg-[#EFF2F5] overflow-hidden'>
      <div className='border-b border-gray-200 py-4 '>
        <div className='flex '>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-8 text-sm font-medium border-b-2 ${
                activeTab === tab
                  ? "text-blue-600 border-blue-600"
                  : "text-gray-600 border-gray-300 hover:text-blue-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    
    </div>
  );
};

export default TabNavigation;
