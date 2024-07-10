import Link from "next/link";

const HealthCard = () => {
  return (
    <div className="py-12">
      <div className="xl:container mx-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="mb-12 space-y-2">
          <h2 className="text-xl text-purple dark:text-white">
            Our HEALTH activities include:
          </h2>
          <p className="lg:w-6/12 text-gray-600 dark:text-gray-300 text-left">
            Empowering young people to reach their full potential.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="mt-6 relative">
              <h3 className="text-2xl font-semibold text-orange dark:text-white">
                General Health
              </h3>
              <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                General screening and referral services for the rural poor
                including malaria, HIV, Vision, Blood Pressure, Diabetes and
                more
              </p>
              <Link href="/blog/blog-details">
                <span className="text-red-700 cursor-pointer">Read more</span>
              </Link>
            </div>
          </div>
          <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="mt-6 relative">
              <h3 className="text-2xl font-semibold text-orange dark:text-white">
                Eye Health
              </h3>
              <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                Vision services with optometrists and ophthalmologists including
                glasses, cataract screening and cataract surgery
              </p>
              <Link href="/blog/blog-details">
                <span className="text-red-700 cursor-pointer">Read more</span>
              </Link>
            </div>
          </div>
          <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="mt-6 relative">
              <h3 className="text-2xl font-semibold text-orange dark:text-white">
                Dental Health
              </h3>
              <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                Dental screening and treatment including cavities, extractions,
                abscesses, surgery and other oral health maladies
              </p>
              <Link href="/blog/blog-details">
                <span className="text-red-700 cursor-pointer">Read more</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthCard;
