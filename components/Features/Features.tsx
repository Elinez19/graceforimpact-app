import Image from "next/image";

const Features = () => {
  return (
    <section className="bg-gray-200 dark:bg-gray-900">
      <div className="max-w-full md:max-w-7xl mx-auto px-6 py-10">
        <p className="text-xl font-medium text-orange text-center md:text-center">
          As our Name Implies.
        </p>
        <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize text-center md:text-center lg:text-3xl dark:text-white">
          We are All About Impact
        </h1>
        <div className="mx-auto mt-6 flex justify-center">
          <span className="inline-block h-2 w-20 md:w-40 rounded-full bg-orange"></span>
        </div>
        <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
          <div className="absolute w-full bg-purple -z-10 md:h-96 rounded-2xl"></div>
          <div className="w-full p-6 bg-purple md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
            <div className="md:mx-6 md:w-[40%] lg:w-[50%]">
              <Image
                src="images/hero/banner-2.svg"
                alt="client photo"
                width={400}
                height={400}
                className="w-full h-auto md:h-[32rem] lg:h-[26rem] object-cover shadow-md rounded-2xl"
              />
            </div>
            <div className="mt-8 md:mt-0 md:mx-6 md:w-[60%] lg:w-[50%]">
              <div>
                <p className="text-xl font-medium tracking-tight text-white">
                  Grace For Impact
                </p>
                <p className="text-white"> We are All About Impact</p>
              </div>
              <p className="mt-4 text-lg leading-relaxed text-white md:text-xl">
                GFI has been providing health care to the underserved annually
                in different parts of Nigeria since 2005.
              </p>
              <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                <button className="bg-orange hover:bg-orange/70 inline-flex items-center justify-center rounded-lg px-6 py-4 text-center text-base font-medium text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                  Join Us Make Impact
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Features;
