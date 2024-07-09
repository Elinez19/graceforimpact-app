"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

// Array of descriptions for each image
const descriptions = [
  "Our day and overnight camps empowered kids by building lifelong skills, confidence and friendships.",
  "Our day and overnight camps empowered kids by building lifelong skills, confidence and friendships.",
  "Our day and overnight camps empowered kids by building lifelong skills, confidence and friendships.",
  "Our day and overnight camps empowered kids by building lifelong skills, confidence and friendships.",
];

const GetInvolvedGallery = () => {
  return (
    <div id="GetInvolvedGallery-section">
      <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 mt-20 md:pt-24">
        <div className="text-center">
          <Fade
            direction={"up"}
            delay={400}
            cascade
            damping={1e-1}
            triggerOnce={true}>
            <h2 className="text-pink-700 text-lg font-normal mb-3 tracking-widest uppercase ls-51">
              How to Get Involved
            </h2>
          </Fade>
          <Fade
            direction={"up"}
            delay={800}
            cascade
            damping={1e-1}
            triggerOnce={true}>
            <h3 className="text-3xl lg:text-5xl font-semibold text-black">
              Gallery of our Impact.
            </h3>
          </Fade>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16 px-6">
          <div className="col-span-1">
            <div className="grid grid-cols-1 gap-6">
              {Array.from(Array(2).keys()).map((index) => (
                <div key={index} className="relative group">
                  <div className="overflow-hidden rounded-3xl transform transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={`/images/Gallery/gfi-gallery-${index + 1}.svg`}
                      alt={`image-${index + 1}`}
                      width={700}
                      height={600} // Increased height
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 w-full flex flex-col items-center py-4 bg-purple/65 bg-opacity-50 rounded-b-lg transition-opacity duration-300 group-hover:opacity-0">
                    <h3 className="text-xl lg:text-2xl font-bold text-white">{`Image ${
                      index + 1
                    }`}</h3>
                    <p className="text-sm lg:text-base font-medium text-white text-center">
                      {descriptions[index]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-1">
            <div className="grid grid-cols-1 gap-6">
              {Array.from(Array(2).keys()).map((index) => (
                <div key={index} className="relative group">
                  <div className="overflow-hidden rounded-3xl transform transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={`/images/Gallery/gfi-gallery-${index + 3}.svg`}
                      alt={`image-${index + 3}`}
                      width={700}
                      height={600} // Increased height
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 w-full flex flex-col items-center py-4 bg-purple/65 bg-opacity-50 rounded-b-lg transition-opacity duration-300 group-hover:opacity-0">
                    <h3 className="text-xl lg:text-2xl font-bold text-white">{`Image ${
                      index + 3
                    }`}</h3>
                    <p className="text-sm lg:text-base font-medium text-white text-center">
                      {descriptions[index + 2]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolvedGallery;
