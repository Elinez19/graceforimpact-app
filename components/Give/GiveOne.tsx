"use client";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import Image from "next/image";
import Link from "next/link";

interface GetInvolvedData {
  imgSrc: string;
  videoId: string;
  title: string;
  description: string;
  memberId: string;
}

const sections: GetInvolvedData[] = [
  {
    imgSrc: "/images/board/board-img-5.svg",
    videoId: "L61p2uyiMSo",
    title: "EVERY DOLLAR COUNTS!",
    description: `Grace delivers a strong value for money to our donors and partners by leveraging donated goods, supplies, and equipment increasing the value of every $1 donated to more than $10.
    
    Grace provides demand driven, scalable and sustainable solutions by engaging and supporting the rural poor through cost effective, health and education solutions, to create a tangible and lasting impact.
    Our team is committed to creating measurable results and lasting impact.
 `,
    memberId: "1",
  }
];

const GiveOne = () => {
  const [isOpen, setOpen] = useState(false);
  const [videoId, setVideoId] = useState("");

  const handleOpenModal = (videoId: string) => {
    setVideoId(videoId);
    setOpen(true);
  };

  return (
    <div className="relative overflow-hidden bg-white py-16 space-y-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-purple ">
        MAKE AN IMPACT TODAY!
        </h1>
        <p className="mt-2 text-lg text-purple">
        GRACE CAN’T DO IT WITHOUT YOU- GIVE TODAY!
        </p>
      </div>
      {sections.map((section, index) => (
        <div key={index} className="relative flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:space-x-6 bg-gray-100 border border-gray-300 rounded-lg py-6 px-6">
          <div className={`flex-1 ${index % 2 === 0 ? 'order-1 lg:order-2' : 'order-1 lg:order-1'}`}>
            <Image
              src={section.imgSrc}
              alt={section.title}
              width={847}
              height={786}
              className="object-cover rounded-lg"
            />
          </div>
          <div className={`flex-1 ${index % 2 === 0 ? 'order-2 lg:order-1' : 'order-2 lg:order-2'}`}>
            <h2 className="text-3xl font-bold tracking-tight text-purple">
              {section.title}
            </h2>
            <p className="mt-4 text-lg text-gray-700 whitespace-pre-line">
              {section.description}
            </p>
            <div className="mt-6">
              <Link
                href="/blog/blog-details"
                className="inline-block bg-purple px-6 py-2 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-purple hover:bg-purple/95 hover:ring-purple"
                passHref>
                Learn More
              </Link>
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

export default GiveOne;
