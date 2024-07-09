import Image from "next/image";

const Health = () => {
  return (
    <>
      <section className="relative w-full min-h-screen bg-cover bg-fixed bg-center bg-no-repeat bg-blend-multiply overflow-hidden mt-24 mb-40">
        <div className="area">
          <ul className="circles">
            {Array.from({ length: 10 }).map((_, index) => (
              <li key={index}></li>
            ))}
          </ul>
        </div>
        <div className="relative z-10 mx-auto px-4 py-24 text-center lg:py-16 lg:flex lg:items-center lg:justify-between">
          {/* <div className="lg:max-w-2xl">
            <h1 className="mt-14 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
              Health
            </h1>
            <p className="mt-10 text-lg font-normal text-white sm:px-16 lg:px-0 lg:text-xl">
              Compassionate Excellence Worldwide
            </p>
          </div> */}
        </div>
      </section>
      <div className="absolute top-30 right-0 left-0 mx-auto p-8 z-20 lg:left-[696px]">
        <Image
          loading="lazy"
          width={500}
          height={2500}
          className="rounded-lg shadow-lg border-4 border-white"
          src="/images/board/board-img-5.svg"
          alt="Vision Image"
        />
      </div>
    </>
  );
};

export default Health;
