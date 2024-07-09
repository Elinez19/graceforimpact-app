import Image from "next/image";
import React from "react";

const ChairmanDetails = () => {
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
            <p className="text-gray-600 dark:text-gray-300">
              Tola Elewa has worked in the UK civil service for over 25 years.
              She joined the organisation in 2009, and later got it registered
              in the UK and became a UK trustee Prior to her involvement with
              GFI, she worked with Light of Hope International, a Sierra Leone
              based charity focusing on Women Empowerment and the establishment
              of schools in rural communities.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Tolas commitment to continuous learning is evident in her
              completion of Improving the Health of Women, Children and
              Adolescents: from Evidence to Action, from the London School of
              Hygiene & Tropical Medicine. This course has further fueled her
              determination to enhance access to quality health services for
              all. Tola has been active in fieldwork and fundraising GFI
              initiatives, showcasing versatility and dedication to GFIs
              mission.
            </p>
            <p className="text-gray-600">
              She served as voluntary mission coordinator from 2010 to 2018. She
              holds a Master of Science in Development studies , a Bachelor of
              Law degree from the University of London and a Legal Practice
              Certificate from the College of Law London.She is an Associate of
              the Chartered Institute of Personnel and Development (CIPD) and a
              certified Mental Health First Aider (MHFA). In recognition of her
              work with GFI, Tola was honored with the People Engagement Award
              by DWP in 2016. When not working or volunteering Tola finds joy in
              staying at home and exploring the culinary world, particularly
              experimenting with creative vegan recipes.
            </p>
            <div className="mt-6">
              <p className="text-gray-600 dark:text-gray-400">Dapo Oriola</p>
              <span className="block text-sm text-gray-500">Chairman-CEO</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChairmanDetails;
