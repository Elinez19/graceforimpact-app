"use client";
import Slider from "react-slick";
import Image from "next/image";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// CAROUSEL DATA

const postData = [
  {
    heading: "Brand design for a computer brand.",
    description: "A comprehensive brand design project for a leading computer brand, focusing on modern aesthetics and user experience.",
    imgSrc: "/images/hero/banner-1.svg",
  },
  {
    heading: "Mobile app 3d wallpaper.",
    description: "Creative and interactive 3D wallpapers for a mobile application, enhancing visual appeal and user engagement.",
    imgSrc: "/images/hero/banner-2.svg",
  },
  {
    heading: "Brand design for a computer brand.",
    description: "A comprehensive brand design project for a leading computer brand, focusing on modern aesthetics and user experience.",
    imgSrc: "/images/hero/banner-3.svg",
  },
  {
    heading: "Mobile app 3d wallpaper.",
    description: "Creative and interactive 3D wallpapers for a mobile application, enhancing visual appeal and user engagement.",
    imgSrc: "/images/hero/banner-2.svg",
  },
];

// CAROUSEL SETTINGS

const SampleNextArrow = (props: { className: any; style: any; onClick: any; }) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(255, 255, 255, 0.3)",
        padding: "28px",
        borderRadius: "20px",
      }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props: { className: any; style: any; onClick: any; }) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(255, 255, 255, 0.3)",
        padding: "28px",
        borderRadius: "20px",
      }}
      onClick={onClick}
    />
  );
};

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    speed: 500,
    nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
    prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="bg-blue-950 py-20 marginFeature bg-featured">
      <div className="mx-auto max-w-7xl sm:py-4 lg:px-8">
        <div className="text-center pt-48 pb-10 md:pt-96">
          <h3 className="text-4xl sm:text-6xl font-bold text-white my-2">
            Featured works.
          </h3>
          <h3 className="text-4xl sm:text-6xl font-bold text-white text-opacity-50 lg:mr-48 my-2">
            Featured works.
          </h3>
          <h3 className="text-4xl sm:text-6xl font-bold text-white text-opacity-25 lg:-mr-32 my-2">
            Featured works.
          </h3>
        </div>

        <Slider {...settings}>
          {postData.map((item, i) => (
            <div key={i} className="bg-white m-3 pb-12 my-10 rounded-3xl shadow-lg">
              <Image
                src={item.imgSrc}
                alt={item.heading}
                width={636}
                height={620}
                className="rounded-t-3xl"
              />
              <div className="p-6">
                <h4 className="text-2xl font-bold text-center mt-4 text-gray-900">
                  {item.heading}
                </h4>
                <p className="text-base text-center mt-2 text-gray-700">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
