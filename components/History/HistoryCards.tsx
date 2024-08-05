"use client";

import { useState } from "react";
import ModalVideo from "react-modal-video";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

interface HistoryCardsData {
  imgSrc: string;
  videoId: string;
  title: string;
  description: string;
  memberId: string;
  gallery: string[];
}

const sections: HistoryCardsData[] = [
  {
    imgSrc: "/images/Gallery/grace-2008-3.jpg",
    videoId: "L61p2uyiMSo",
    title: "2006-Founding of Grace for Impact",
    description:
      "Grace for Impact was founded as a non-profit international organization in the United States. Active implementation began in the areas of health and education.",
    memberId: "1",
    gallery: [
      "/images/Gallery/grace-2008.jpg",
      "/images/Gallery/grace-2008-1.jpg",
      "/images/Gallery/grace-2008-2.jpg",
    ],
  },
  {
    imgSrc:  "/images/Gallery/grace-dental-care.jpg",
    videoId: "L61p2uyiMSo",
    title: "2007-Introducing Dental Care",
    description:
      "GFI introduced Dental Care and began collaborating with the Nigerian Government and Ministry of Health.",
    memberId: "2",
    gallery: [
      // "/images/Gallery/grace-dental.jpg",
      "/images/Gallery/grace-dental-care.jpg",
      "/images/Gallery/grace-dental-care-1.jpg",
    ],
  },
  {
    imgSrc: "/images/Gallery/grace-2008-3.jpg",
    videoId: "L61p2uyiMSo",
    title: "2009-International Medical Volunteers",
    description:
      "International Medical Volunteers from the United States and the United Kingdom joined the team. Ophthalmology was introduced as a service.",
    memberId: "3",
    gallery: [
      "/images/Gallery/grace-2008-1.jpg",
      "/images/Gallery/grace-2008-2.jpg",
      "/images/Gallery/grace-2008-3.jpg",
    ],
  },
  {
    imgSrc: "/images/Gallery/graceforimpact-img13.jpg",
    videoId: "L61p2uyiMSo",
    title: "2012-New Training Program",
    description:
      "Grace For Impact began providing training to in–country volunteers and medical professionals for enhanced sustainability and local impact.",
    memberId: "4",
    gallery: [
      "/images/Gallery/graceforimpact-img14.jpg",
      "/images/Gallery/graceforimpact-img15.jpg",
      "/images/Gallery/grace-2008-5.jpg",
    ],
  },
  {
    imgSrc: "/images/Gallery/graceforimpact-img4.jpg",
    videoId: "L61p2uyiMSo",
    title: "2013-Introducing Cataract Surgery",
    description:
      "Cataract Surgery was introduced as a service. Partnerships were made with Christian Medical Dental Associations (CMDA).",
    memberId: "5",
    gallery: [
      "/images/Gallery/graceforimpact-img12.jpg",
      "/images/Gallery/grace-eye.jpg",
      "/images/Gallery/graceforimpact-img8.jpg",
    ],
  },
  {
    imgSrc: "/images/Gallery/grace-partners.jpg",
    videoId: "L61p2uyiMSo",
    title: "2014-Working with partners",
    description:
      "Catholic Charities donated $1.5 million worth of medical supplies and pharmaceuticals. Grace For Impact formed partnerships with Springtime Foundation.",
    memberId: "6",
    gallery: [
      "/images/Gallery/grace-catholic.jpg",
      "/images/Gallery/grace-distribution-1.jpg",
      "/images/Gallery/grace-distribution-2.jpg",
    ],
  },
  {
    imgSrc: "/images/Gallery/graceforimpact-img13.jpg",
    videoId: "L61p2uyiMSo",
    title: "2016-Expand the volunteer base",
    description:
      "Grace For Impact Collaborated with National Youth Core to expand the volunteer base by more than double. Our CEO was recruited.",
    memberId: "6",
    gallery: [
      "/images/Gallery/graceforimpact-img14.jpg",
      "/images/Gallery/graceforimpact-img15.jpg",
      "/images/Gallery/graceforimpact-img20.jpg",
    ],
  },
  {
    imgSrc: "/images/Gallery/grace-ghana.jpg",
    videoId: "L61p2uyiMSo",
    title: "2017-Ghana added",
    description: "Prioritization of Eye Health and Cataract surgery",
    memberId: "7",
    gallery: [
      "/images/Gallery/grace-ghana1.jpg",
      "/images/Gallery/grace-ghana2.jpg",
      "/images/Gallery/grace-ghana.jpg",
    ],
  },
  // {
  //   imgSrc: "/images/Gallery/grace-gallery-4.svg",
  //   videoId: "L61p2uyiMSo",
  //   title: "2018-Madagascar, Kenya and Vietnam added",
  //   description: "Prioritization of Eye Health and Cataract surgery",
  //   memberId: "8",
  //   gallery: [
  //     "/images/Gallery/grace-gallery-1.svg",
  //     "/images/Gallery/grace-gallery-2.svg",
  //     "/images/Gallery/grace-gallery-3.svg",
  //   ],
  // },
  // {
  //   imgSrc: "/images/Gallery/grace-gallery-6.svg",
  //   videoId: "L61p2uyiMSo",
  //   title: "2019-Tanzania and Burkina Faso.",
  //   description: "Prioritization of Eye Health and Cataract surgery",
  //   memberId: "9",
  //   gallery: [
  //     "/images/Gallery/grace-gallery-4.svg",
  //     "/images/Gallery/grace-gallery-5.svg",
  //     "/images/Gallery/grace-gallery-6.svg",
  //   ],
  // },
  // {
  //   imgSrc: "/images/Gallery/grace-gallery-7.svg",
  //   videoId: "L61p2uyiMSo",
  //   title: "2019-Inaugural Night for Sight Event",
  //   description: "Prioritization of Eye Health and Cataract surgery",
  //   memberId: "9",
  //   gallery: [
  //     "/images/Gallery/grace-gallery-1.svg",
  //     "/images/Gallery/grace-gallery-2.svg",
  //     "/images/Gallery/grace-gallery-3.svg",
  //   ],
  // },
  // {
  //   imgSrc: "/images/Gallery/grace-gallery-7.svg",
  //   videoId: "L61p2uyiMSo",
  //   title: "2020-Grace Vision Center preparations underway in Lagos, Nigeria",
  //   description: "Prioritization of Eye Health and Cataract surgery",
  //   memberId: "9",
  //   gallery: [
  //     "/images/Gallery/grace-gallery-4.svg",
  //     "/images/Gallery/grace-gallery-5.svg",
  //     "/images/Gallery/grace-gallery-6.svg",
  //   ],
  // },
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
              </div>
            </div>
          </div>
          <div className="mt-12 px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {section.gallery.map((imgSrc, imgIndex) => (
                <div key={imgIndex} className="relative group">
                  <div className="overflow-hidden rounded-3xl transform transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={imgSrc}
                      alt={`Gallery image ${imgIndex + 1}`}
                      width={700}
                      height={900}
                      className="object-cover h-full w-full"
                    />
                    <div className="absolute inset-0 bg-gray-800 opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
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
