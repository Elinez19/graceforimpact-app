"use client";

import { useState } from "react";
import ModalVideo from "react-modal-video";
import Image from "next/image";
import Link from "next/link";

interface HistoryCardsData {
  imgSrc: string;
  videoId: string;
  title: string;
  description: string;
  memberId: string;
}

const sections: HistoryCardsData[] = [
  {
    imgSrc: "/images/Gallery/grace-gallery-2.svg",
    videoId: "L61p2uyiMSo",
    title: "2006-Founding of Grace for Impact",
    description:
      "Grace for Impact was founded as a 501(c)3 non-profit international organization in the United States. Active implementation began in the areas of health and education.",
    memberId: "1",
  },
  {
    imgSrc: "/images/Gallery/grace-gallery-5.svg",
    videoId: "L61p2uyiMSo",
    title: "2007-Introducing Dental Care",
    description:
      "GFI introduced Dental Care and began collaborating with the Nigerian Government and Ministry of Health.",
    memberId: "2",
  },
  {
    imgSrc: "/images/Gallery/grace-gallery-4.svg",
    videoId: "L61p2uyiMSo",
    title: "2009-International Medical Volunteers",
    description:
      "International Medical Volunteers from the United States and the United Kingdom joined the team. Ophthalmology was introduced as a service.",
    memberId: "3",
  },
  {
    imgSrc: "/images/Gallery/grace-gallery-7.svg",
    videoId: "L61p2uyiMSo",
    title: "2012-New Training Program",
    description:
      "Grace For Impact began providing training to in–country volunteers and medical professionals for enhanced sustainability and local impact.",
    memberId: "4",
  },
  {
    imgSrc: "/images/Gallery/grace-gallery-7.svg",
    videoId: "L61p2uyiMSo",
    title: "2013-Introducing Cataract Surgery",
    description:
      "Cataract Surgery was introduced as a service. Partnerships were made with Christian Medical Dental Associations (CMDA).",
    memberId: "5",
  },
  {
    imgSrc: "/images/Gallery/grace-gallery-1.svg",
    videoId: "L61p2uyiMSo",
    title: "2014-Working with partners",
    description:
      "Catholic Charities donated $1.5 million worth of medical supplies and pharmaceuticals. GFI formed partnerships with Springtime Foundation.",
    memberId: "6",
  },
  {
    imgSrc: "/images/Gallery/grace-gallery-2.svg",
    videoId: "L61p2uyiMSo",
    title: "2016-Expand the volunteer base",
    description:
      "GFI Collaborated with National Youth Core to expand the volunteer base by more than double. Our CEO was recruited.",
    memberId: "6",
  },
  {
    imgSrc: "/images/Gallery/grace-gallery-3.svg",
    videoId: "L61p2uyiMSo",
    title: "2017-Ghana added",
    description: "Prioritization of Eye Health and Cataract surgery",
    memberId: "7",
  },
  {
    imgSrc: "/images/Gallery/grace-gallery-4.svg",
    videoId: "L61p2uyiMSo",
    title: "2018-Madagascar, Kenya and Vietnam added",
    description: "Prioritization of Eye Health and Cataract surgery",
    memberId: "8",
  },
  {
    imgSrc: "/images/Gallery/grace-gallery-6.svg",
    videoId: "L61p2uyiMSo",
    title: "2019-Tanzania and Burkina Faso, Inaugural “Night for Sight Event",
    description: "Prioritization of Eye Health and Cataract surgery",
    memberId: "9",
  },
  {
    imgSrc: "/images/Gallery/grace-gallery-7.svg",
    videoId: "L61p2uyiMSo",
    title: "2020-Grace Vision Center preparations underway in Lagos, Nigeria",
    description: "Prioritization of Eye Health and Cataract surgery",
    memberId: "9",
  },
];

const HistoryCards = () => {
  const [isOpen, setOpen] = useState(false);
  const [videoId, setVideoId] = useState("");

  const handleOpenModal = (videoId: string) => {
    setVideoId(videoId);
    setOpen(true);
  };

  return (
    <div className="relative overflow-hidden bg-white py-16 space-y-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-purple">HISTORY IN TIMELINE</h1>
        <p className="mt-2 text-lg text-purple">Our HISTORY IN TIMELINE</p>
      </div>
      {sections.map((section, index) => (
        <div key={index} className="relative">
          <div
            className={`max-w-7xl mx-auto px-6 lg:px-8 lg:grid lg:gap-24 bg-gray-100 border border-gray-300 rounded-lg ${
              index % 2 === 0 ? "lg:grid-cols-2" : "lg:grid-cols-2 lg:grid-cols-reverse"
            }`}
          >
            <div className={`lg:order-${index % 2 === 0 ? 1 : 2}`}>
              <div className="px-6 lg:py-16 lg:px-0">
                <div className="p-6">
                  <h2 className="text-3xl font-bold tracking-tight text-purple">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-lg text-gray-700">
                    {section.description}
                  </p>
                  <div className="mt-6">
                    <Link
                      href="/blog/blog-details"
                      className="inline-block bg-purple px-6 py-2 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-purple hover:bg-purple/95 hover:ring-purple"
                      passHref
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={`lg:order-${index % 2 === 0 ? 2 : 1} mt-12 sm:mt-16 lg:mt-0`}>
              <div className="relative border border-gray-300 rounded-lg overflow-hidden">
                <Image
                  src={section.imgSrc}
                  alt={section.title}
                  width={500}
                  height={400}
                  className="object-cover"
                />
                {/* <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    aria-label="video play button"
                    onClick={() => handleOpenModal(section.videoId)}
                    className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white bg-opacity-75 text-purple transition hover:bg-opacity-100"
                  >
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      className="fill-current"
                    >
                      <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                    </svg>
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      ))}
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export default HistoryCards;
