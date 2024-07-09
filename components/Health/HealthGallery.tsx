"use client";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import Image from "next/image";
import { FaPlayCircle } from "react-icons/fa";

const HealthVidGallery = () => {
  const [isOpen, setOpen] = useState(false);
  const [videoId, setVideoId] = useState("");

  const openModal = (id: string) => {
    setOpen(true);
    setVideoId(id);
  };

  const cardData = [
    {
      title: "General Health",
      imageSrc: "/images/board/board-img-5.svg",
      videoId: "your-video-id-1",
    },
    {
      title: "Eye Health",
      imageSrc: "/images/board/board-img-5.svg",
      videoId: "your-video-id-2",
    },
    {
      title: "Eye Health",
      imageSrc: "/images/board/board-img-5.svg",
      videoId: "your-video-id-2",
    },
    // Add more card data here
    {
      title: "General Health",
      imageSrc: "/images/board/board-img-5.svg",
      videoId: "your-video-id-1",
    },
    {
      title: "Eye Health",
      imageSrc: "/images/board/board-img-5.svg",
      videoId: "your-video-id-2",
    },
    {
      title: "Eye Health",
      imageSrc: "/images/board/board-img-5.svg",
      videoId: "your-video-id-2",
    },
    // Add more card data here
  ];

  return (
    <div className="py-12">
      <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="mb-12 space-y-2 ml-15">
          <h2 className="text-3xl text-purple font-bold dark:text-white">
            Our Health Outreach <br />
            <span className="text-3xl font-bold text-purple md:text-4xl">
              Programs
            </span>
          </h2>
          <div className="flex mb-6 -ml-0">
            <span className="inline-block h-2 w-40 rounded-full bg-orange lg:hidden"></span>
            <span className="hidden lg:inline-block h-2 w-40 rounded-full bg-gradient-to-r from-orange via-red-700 to-orange"></span>
          </div>
          <p className="lg:w-6/12 text-gray-600 dark:text-gray-300 text-left">
            Empowering young people to reach their full potential.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="group p-6 sm:p-8 rounded-3xl border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 shadow-2xl shadow-gray-600/10 relative overflow-hidden hover:bg-purple hover:bg-opacity-50 transition duration-300">
              <Image
                src={card.imageSrc}
                alt={`${card.title} cover`}
                loading="lazy"
                width={1000}
                height={667}
                className="h-64 w-full object-cover object-top transition duration-500 cursor-pointer"
                onClick={() => openModal(card.videoId)}
              />
              <button
                className="absolute inset-0 flex items-center justify-center w-full h-full bg-purple bg-opacity-50 transition-opacity duration-300 opacity-100"
                onClick={() => openModal(card.videoId)}>
                <FaPlayCircle className="w-12 h-12 text-white" />
              </button>
              <div className="mt-6">
                <h3 className="text-2xl font-semibold text-orange dark:text-white cursor-pointer">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export default HealthVidGallery;
