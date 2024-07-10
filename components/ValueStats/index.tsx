interface CardDataType {
  heading: string;
  percent: string;
  subheading: string;
}

const cardData: CardDataType[] = [
  {
    percent: "255,000",
    heading: "Hours of voluntary services",
    subheading:
      "255,000 hours of volunteer time.The dollar value of volunteer time is $6,007,800 equivalent to $23.56 per hour (Board Effect, 2014).",
  },
  {
    percent: "85,000 hours",
    heading: "Beneficiaries Served",
    subheading:
      "85,000 beneficiaries served to date (2006-2016).",
  },
  {
    percent: "$7M",
    heading: "Donated Supplies and materials",
    subheading:
      "$7M in donated supplies, equipment and materials",
  },
];

const ValueStats = () => {
  return (
    <div className="mx-auto max-w-7xl py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">Impact Calculations</h2>
        <p className="mt-2 text-lg text-gray-600">
          Each year, we strive to transform lives and strengthen communities worldwide.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-10">
        {cardData.map((item, index) => (
          <div key={index} className="flex flex-col justify-center items-center text-center">
            <div className="text-3xl sm:text-4xl lg:text-5xl text-purple font-semibold bg-gray-200 p-4 rounded-lg w-full">
              {item.percent}
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl text-black font-semibold mt-4">
              {item.heading}
            </h3>
            <p className="text-base sm:text-lg text-black text-opacity-50 mt-2">
              {item.subheading}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValueStats;
