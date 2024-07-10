import React from "react";
import Image from "next/image";

const WhatWeDoStats = () => {
  const WhatWeDoStatsItems = [
    {
      title: "Flowbite Library v1.0.0",
      date: "Released on December 2, 2021",
      description: "Get started with dozens of web components and interactive elements.",
    },
    {
      title: "Flowbite Library v1.2.0",
      date: "Released on December 23, 2021",
      description: "Get started with dozens of web components and interactive elements.",
    },
    {
      title: "Flowbite Library v1.3.0",
      date: "Released on January 5, 2022",
      description: "Get started with dozens of web components and interactive elements.",
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center text-purple mb-12">What We Do Stats</h2>
      <ol className="items-center sm:flex">
        {WhatWeDoStatsItems.map((item, index) => (
          <li key={index} className="relative mb-12 sm:mb-0 sm:flex-1 sm:flex sm:items-center">
            <div className="flex items-center sm:flex-col sm:items-start sm:w-full">
              <div className="z-10 flex items-center justify-center w-10 h-10 bg-orange-200 rounded-full sm:mb-4">
                <svg
                  className="w-4 h-4 text-orange-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              {index !== WhatWeDoStatsItems.length - 1 && (
                <div className="hidden sm:block sm:w-full bg-gray-200 h-0.5"></div>
              )}
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-8">
              <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
              <time className="block mb-2 text-sm text-gray-400">{item.date}</time>
              <p className="text-base text-gray-500">{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default WhatWeDoStats;
