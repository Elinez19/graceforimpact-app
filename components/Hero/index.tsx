"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { HeroData } from "./heroData";
import SingleHero from "./SingleHero";

const Hero = () => {
  return (
    <>
      <div className="max-w-c-1315 mx-auto px-4 pb-[-30] md:px-8 xl:px-0"></div>
      {/* <!-- Slider main container --> */}
      <div className="slides mb-[-30] h-full w-full pt-6 lg:pt-0 relative">
        {/* <!-- Additional required wrapper --> */}
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 7500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            // when window width is >= 640px
            0: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 1,
            },
          }}
        >
          {HeroData.map((banner) => (
            <SwiperSlide key={banner?.id}>
              <SingleHero banner={banner} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation buttons */}
        <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-black p-8 rounded-full cursor-pointer">
          <FaArrowLeft className="w-6 h-6 bg-teal-700" />
        </div>
        <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-black p-8 rounded-full cursor-pointer">
          <FaArrowRight className="w-6 h-6 bg-teal-700" />
        </div>
      </div>
    </>
  );
};

export default Hero;
