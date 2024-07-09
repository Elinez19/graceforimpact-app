import Image from "next/image";

const ImpactStat = () => {
  return (
    <div className="bg-white relative" id="project">
      <div className="mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h3 className="text-4xl sm:text-6xl font-semibold text-center my-10 lh-81 text-black">
          Compassionate Excellence Worldwide
        </h3>

        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="flex-1 lg:w-2/3 lg:order-2">
            <Image
              src={"/images/network/grace-stats.svg"}
              alt={"map-image"}
              width={1400}
              height={800}
              layout="responsive"
            />
          </div>
          <div className="flex-1 relative lg:w-1/3 lg:order-1 lg:mr-10 mt-10 lg:mt-0">
            <div
              className="p-4 sm:p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg"
              style={{
                backgroundImage: "url('/images/hero/bg-img-2.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                paddingTop: "6.25%", // Aspect ratio (9:16)
              }}>
              <div className="bg-white dark:bg-gray-800 bg-opacity-70 p-4 sm:p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-semibold text-red-700 dark:text-white mb-4">
                Making a Difference in Dallas and Beyond
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                Based in Dallas, Texas, the Greater Dallas Coalition has been a beacon of hope and support for countless individuals and families. Their work is underpinned by a profound commitment to uplifting communities through various programs and initiatives. Whether it’s providing essential resources, educational opportunities, or emotional support, the Coalition is steadfast in its dedication to making a tangible difference.. The organization is also registered as a non governmental
                  organization in the United Kingdom, Ghana and Nigeria. Grace
                  organization in the United Kingdom, Ghana and Nigeria. Grace
                  Grace For Impact - GFI is a non profit health care
                  organization with their headquarter office in Dallas, Texas,
                  USA. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactStat;
