import Image from "next/image";

const GetInvolvedThree = () => {
  return (
    <div className="bg-white relative w-full" id="project">
      <div className="w-full py-20">
        <h2 className="text-4xl sm:text-6xl font-semibold text-center my-10 text-purple w-full">
          Discover Ways You Can Help at Grace for Impact
        </h2>
        <div className="w-full flex justify-center">
          <div className="relative w-full lg:w-3/4 h-96 lg:h-[400px]">
            <Image
              src={"/images/Gallery/gfi-impact-banner.png"}
              alt={"map-image"}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Info Boxes Section */}
        <div className="mt-12 bg-gray-100 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-2xl font-semibold text-purple-700">
                YOUR GIFT IS 100% TAX DEDUCTIBLE. GIVE TODAY!
              </p>
              <p className="text-lg mt-2">
                <a
                  href="https://www.graceforimpact.org/getinvolved"
                  className="text-blue-600 underline hover:text-blue-800 transition-colors"
                >
                  www.graceforimpact.org/getinvolved
                </a>
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-2xl font-bold text-purple mb-4">DID YOU KNOW?</h4>
                <p className="text-gray-700">
                  39 MILLION people in the world are blind.
                </p>
                <p className="text-gray-700 mt-2">
                  CATARACTS remain the leading cause of blindness in middle and low-income countries.
                </p>
                <p className="text-gray-700 mt-2">
                  80% of all visual impairment is REVERSIBLE or can be prevented.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-2xl font-bold text-purple mb-4">EVERY MINUTE</h4>
                <p className="text-gray-700">
                  A child in Africa dies from malaria.
                </p>
                <p className="text-gray-700 mt-2">
                  61 MILLION primary school-aged teens are currently not enrolled in school.
                </p>
                <p className="text-gray-700 mt-2">
                  1/3 of young women in developing countries can’t read.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-2xl font-bold text-purple mb-4">NOW YOU KNOW</h4>
                <p className="text-gray-700">
                  GET INVOLVED!
                </p>
                <p className="text-lg mt-4">
                  <a
                    href="https://graceforimpact.org"
                    className="text-blue-600 underline hover:text-blue-800 transition-colors"
                  >
                    graceforimpact.org
                  </a>
                </p>
                <p className="text-lg mt-2">
                  <span className="font-semibold text-purple">CONNECT:</span>{" "}
                  <a
                    href="https://twitter.com/_graceforimpact"
                    className="text-blue-600 underline hover:text-blue-800 transition-colors"
                  >
                    @_graceforimpact
                  </a>
                </p>
                <p className="text-lg mt-2">
                  <span className="font-semibold text-purple">CALL:</span> 214.646.8055
                </p>
                <p className="text-lg mt-2">
                  <span className="font-semibold text-purple">Interested in partnering? Contact us at:</span>{" "}
                  <a
                    href="mailto:info@graceforimpact.org"
                    className="text-blue-600 underline hover:text-blue-800 transition-colors"
                  >
                    info@graceforimpact.org
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* End of Info Boxes Section */}
      </div>
    </div>
  );
};

export default GetInvolvedThree;
