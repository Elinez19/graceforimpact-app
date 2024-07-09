import React from "react";
import Image from "next/image";

const BoardThree = () => {
  return (
    <div className="py-5 relative mt-10 md:mt-20 mb-10 md:mb-20">
      <Image
        src="/images/hero/bg-img.svg"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 lg:w-1/2 relative">
              <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                <Image
                  src="/images/board/gfi-ceo-amanda-childress.svg"
                  alt="Leader"
                  width={500}
                  height={700}
                  className="object-cover w-full h-full absolute bottom-0 left-0 z-10"
                />
              </div>
            </div>
            <div className="p-6 md:w-1/3 lg:w-1/2">
              <h2 className="mb-4 text-2xl font-bold text-orange dark:text-white md:text-2xl">
                Grace Chief Executive Officer (CEO)
              </h2>
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white md:text-4xl">
              AMANDA J. CHILDRESS</h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
              Ms. Childress is an international development and public administration professional with US, international, non-profit and institutional experience and over 15 years of senior leadership experience in the field managing large, complex multi-sectorial portfolio’s and development programs in sub-Saharan Africa. <br/>
              She has served as Country Director, Country Representative, Regional Director, Senior Advisor and in other positions with the Netherlands Development Organization, the United States Agency for International Development, United Nations Development Program, Africare, Pact and the University of Illinois based in Ghana, Mali, Burkina Faso, Angola, Tanzania, Madagascar and others in a regional capacity. <br/>
               Amanda specializes in organizational leadership and development, resource mobilization and managing high profile and complex programs in difficult contexts. <br/>
                She has experience with a diverse set of donors and partners including DfID, USAID, DGIS, World Bank, United Nations, Bill and Melinda Gates Foundation and the private sector. <br/>
Ms. Childress holds a Master of Public Administration and is completing her Doctorate. She has several professional certifications and is fluent in French. <br/> Amanda is passionate about her work and committed to finding smart and scalable solutions to advance the plight of the poor and marginalized worldwide.
Amanda enjoys the arts, including classical dance, coaching basketball and she’s a huge fan of Formula 1!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardThree;
