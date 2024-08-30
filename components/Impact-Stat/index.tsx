import Image from "next/image";

const ImpactStat = () => {
  return (
    <div className="bg-white relative w-full" id="project">
      <div className="w-full py-20">
        <h2 className="text-4xl sm:text-6xl font-semibold text-center my-10 text-purple w-full">
          Our Impact Statistics
        </h2>
        <div className="relative h-96 lg:h-[600px] w-full">
          <Image
            src={"/images/network/impact-data.png"}
            alt={"map-image"}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ImpactStat;
