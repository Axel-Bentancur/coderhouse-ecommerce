import { useState } from "react";
import { tabsData } from '../utilities/Data';

export function Tabs() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="p-8 min-h-[30vh]">
      <div className="flex justify-around">
        {tabsData.map((tab, idx) => {
          return (
            <button
              key={idx}
              className={`py-2 mx-2 text-sm md:text-base transition duration-300 ${
                idx === activeTabIndex
                  ? 'text-gray-900 border-b-2 border-gray-900'
                  : 'text-gray-300 border-transparent '
              }`}
              onClick={() => setActiveTabIndex(idx)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="flex justify-center my-16">
        <p className="text-center md:w-3/5 noto">{tabsData[activeTabIndex].content}</p>
      </div>
    </div>
  );
}