import Link from "next/link";

const moreTools = [
  {
    href: "/",
    title: "General Health",
    description: "Comprehensive general health screenings and treatment.",
  },
  {
    href: "",
    title: "Ophthalmological",
    description: "Ophthalmological screenings and treatment.",
  },
  {
    href: "",
    title: "Surgery",
    description: "Sight restoring cataract surgery.",
  },
  {
    href: "",
    title: "Dental",
    description: "Dental care and treatment.",
  },
  {
    href: "",
    title: "General surgery",
    description: "General surgery (hernia, tumors etc.)",
  },
];

const healthActivities = [
  {
    imgSrc: "/images/Gallery/graceforimpact-img.jpg",
    title: "General Health",
    description:
      "General screening and referral services for the rural poor including malaria, HIV, Vision, Blood Pressure, Diabetes and more",
    link: "/blog/blog-details",
  },
  {
    imgSrc: "/images/Gallery/grace-eye.jpg",
    title: "Eye Health",
    description:
      "Vision services with optometrists and ophthalmologists including glasses, cataract screening and cataract surgery",
    link: "/blog/blog-details",
  },
  {
    imgSrc: "/images/Gallery/grace-dental.jpg",
    title: "Dental Health",
    description:
      "Dental screening and treatment including cavities, extractions, abscesses, surgery and other oral health maladies",
    link: "/blog/blog-details",
  },
];

const HealthCards = () => {
  return (
    <div>
      {/* More Tools Section */}
      <section className="container p-6 mx-auto space-y-3 dark:bg-gray-800 dark:text-white">
        <h4 className="text-xl font-bold text-gray-700 capitalize dark:text-gray-300 md:text-3xl text-center">
        Our Health Activities include:
        </h4>
        <div className="flex items-center justify-center">
          <div className="grid gap-8 my-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {moreTools.map((tool, index) => (
              <div key={index} className="w-full max-w-xs text-center">
                <a href={tool.href}>
                  <div className="object-cover object-center w-full h-48 mx-auto rounded-lg bg-red-600 border-4 border-red-400 text-white">
                    <div className="py-16 px-4">
                      <h5 className="text-lg font-bold dark:text-white">
                        {tool.title}
                      </h5>
                      <span className="mt-1 font-medium dark:text-gray-400">
                        {tool.description}
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Cards Section */}
      <div className="py-12">
        <div className="xl:container mx-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="mb-12 space-y-2 text-center">
            <h2 className="text-3xl text-purple dark:text-white">
              Our Health activities include:
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {healthActivities.map((activity, index) => (
              <div
                key={index}
                className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={activity.imgSrc}
                    alt="art cover"
                    loading="lazy"
                    className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-6 relative">
                  <h3 className="text-2xl font-semibold text-orange dark:text-white">
                    {activity.title}
                  </h3>
                  <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                    {activity.description}
                  </p>
                  <Link href={activity.link}>
                    <span className="text-red-700 cursor-pointer">
                      Read more
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthCards;
