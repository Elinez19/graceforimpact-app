import Image from "next/image";
import React from "react";

const VisionTwo = () => {
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
              Our Vision for the Future
            </h2>

            <p className="text-gray-600 dark:text-gray-300">
              GFI is committed to partnering with young people to create
              stronger communities and a more equitable society for all of us.
              We envision a future in which all people – no matter who they are
              or where they come from – get the support they need, when they
              need it, to reach their full potential.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionTwo;
