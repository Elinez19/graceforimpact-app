"use client"
import { useState } from "react";

interface CarouselItem {
  title: string;
  text: string;
  image: string;
}

interface CarouselProps {
  content: CarouselItem[];
}

const Hero: React.FC<CarouselProps> = ({ content }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? content.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === content.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="w-full mx-auto p-4">
      <div className="relative rounded-lg overflow-hidden shadow-lg my-8" data-carousel="static">
        <div className="relative h-[500px] md:h-[700px]" data-carousel-inner>
          {content.map((item: CarouselItem, index: number) => (
            <div
              key={index}
              className={`${
                index === activeIndex ? "block" : "hidden"
              } duration-700 ease-in-out relative`}
              data-carousel-item
            >
              <img src={item.image} className="object-cover w-full h-full" alt={`Slide ${index + 1}`} />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-4">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="mt-2 text-center">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex absolute bottom-5 left-1/2 z-30 -translate-x-1/2 space-x-2" data-carousel-indicators>
          {content.map((_, index: number) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                index === activeIndex ? "bg-gray-400" : "bg-gray-300"
              } hover:bg-gray-400 focus:outline-none transition`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
        <button
          type="button"
          className="flex absolute top-1/2 left-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
          onClick={handlePrev}
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          className="flex absolute top-1/2 right-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
          onClick={handleNext}
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Hero;
