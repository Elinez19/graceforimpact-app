const WhatWeDoOne = () => {
  return (
    <section className="mx-auto mt-2 max-w-7xl px-4 sm:mt-6 sm:px-6 lg:mb-60 lg:px-4">
      <div className="rounded-xl bg-white py-16 shadow-lg">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-left text-2xl font-bold capitalize text-red-700 dark:text-white lg:text-4xl">
            What We Do
          </h1>
          <p className="text-base text-black mb-2">
          Grace ensures sustainability, scalability and lasting impact by collaborating with health professionals and partners on the ground in the countries we work. Through these collaborations, we are able to work effectively and efficiently delivering a strong value for money to our donors and partners.
          </p>
        </div>
        <div className="flex  justify-center mt-6 -ml-60">
          <span className="inline-block h-2 w-40 rounded-full bg-orange lg:hidden"></span>
          <span className="hidden lg:inline-block h-2 w-40 rounded-full bg-orange"></span>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoOne;
