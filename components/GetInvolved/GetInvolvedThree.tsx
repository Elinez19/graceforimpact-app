import Image from "next/image";

const GetInvolvedThree = () => {
  return (
    <div className="bg-white relative w-full" id="project">
      <div className="w-full py-20">
        <h2 className="text-4xl sm:text-6xl font-semibold text-center my-10 text-purple w-full">
          Our Impact Statistics
        </h2>
        <div className="relative h-96 lg:h-[600px] w-full">
          <Image
            src={"/images/board/gfi-give.png"}
            alt={"map-image"}
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* New Content Section */}
        <div className="mt-10 w-full bg-gray-100 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl sm:text-5xl font-semibold text-center text-black mb-8">
              Impact Across the Globe
            </h3>
            <p className="text-lg sm:text-xl text-gray-700 text-center mb-6">
              The impact of our initiatives is evident across multiple regions, showcasing our commitment to making a difference. From health care services to community development programs, our efforts have reached countless lives, bringing positive changes in various sectors. The statistics below highlight the breadth of our impact:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-2xl font-bold text-red-700 mb-4">
                  10,000+
                </h4>
                <p className="text-gray-700">
                  Individuals reached through our health care programs, improving access to essential medical services.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-2xl font-bold text-red-700 mb-4">
                  25+
                </h4>
                <p className="text-gray-700">
                  Communities empowered with sustainable development initiatives, fostering long-term growth.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-2xl font-bold text-red-700 mb-4">
                  5,000+
                </h4>
                <p className="text-gray-700">
                  Children provided with educational resources and support, ensuring a brighter future for the next generation.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* End of New Content Section */}
      </div>
    </div>
  );
};

export default GetInvolvedThree;
