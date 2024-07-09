import Image from "next/image";
import React from "react";

const WhatWeDoTwo = () => {
  return (
    <div className="py-10 relative">
      <Image
        src="/images/hero/bg-img-2.svg"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
      />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="bg-white rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="mb-4  text-2xl font-bold text-red-700 md:text-4xl">
            One Mission. Many Strengths.
            </h2>

            <p className="text-gray-600 dark:text-gray-300">
              The GFI welcomes everyone, which is why our programs, services and
              initiatives are so wide ranging. We inspire kids to realize their
              potential, prepare teens for college and career, provide
              opportunities for families to bond and support people of all ages
              and backgrounds to be healthier in spirit, mind and body. And
              that’s just the beginning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoTwo;
