import Image from "next/image";
import { FaUser, FaDollarSign, FaMoneyBillWave, FaClock } from "react-icons/fa"; // Importing icons from React Icons

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

        {/* New Content Section */}
        <div className="mt-10 w-full bg-gray-100 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl sm:text-5xl font-semibold text-center text-black mb-8">
              Impact Across the Globe
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
                <FaUser className="text-purple text-4xl mr-4" /> {/* Beneficiaries Icon */}
                <div>
                  <h4 className="text-3xl font-bold text-purple mb-2">
                    678,000
                  </h4>
                  <p className="text-gray-700">
                    Total number of beneficiaries provided healthcare, treatment, training, and other support.
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
                <FaDollarSign className="text-purple text-4xl mr-4" /> {/* Donated Supplies Icon */}
                <div>
                  <h4 className="text-3xl font-bold text-purple mb-2">
                    $26M
                  </h4>
                  <p className="text-gray-700">
                    Value of donated medical supplies, equipment, and material.
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
                <FaMoneyBillWave className="text-purple text-4xl mr-4" /> {/* Cash Cost Icon */}
                <div>
                  <h4 className="text-3xl font-bold text-purple mb-2">
                    $4.97
                  </h4>
                  <p className="text-gray-700">
                    GFI average cash cost per beneficiary.
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
                <FaDollarSign className="text-purple text-4xl mr-4" /> {/* Market Value Icon */}
                <div>
                  <h4 className="text-3xl font-bold text-purple mb-2">
                    $64M
                  </h4>
                  <p className="text-gray-700">
                    Total market value of donated goods and cost of services.
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
                <FaClock className="text-purple text-4xl mr-4" /> {/* Volunteer Hours Icon */}
                <div>
                  <h4 className="text-3xl font-bold text-purple mb-2">
                    504,000
                  </h4>
                  <p className="text-gray-700">
                    Volunteer hours logged to date.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of New Content Section */}
      </div>
    </div>
  );
};

export default ImpactStat;
