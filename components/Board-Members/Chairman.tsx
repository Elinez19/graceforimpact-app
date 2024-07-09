import Image from "next/image";

const Chairman = () => {
  return (
    <>
      <section className=" relative w-full min-h-screen bg-cover bg-fixed bg-center bg-no-repeat bg-blend-multiply overflow-hidden mt-4 mb-40">
        <div className="area">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        {/* <div className="relative z-10 mx-auto px-4 py-24 text-center lg:py-16 lg:flex lg:items-center lg:justify-between">
        <div className="lg:max-w-2xl">
          <h1 className="mt-14 text-3xl font-bold leading-none tracking-tight text-white md:text-4xl lg:text-5xl text-left">
            Dapo Oriola
          </h1>
          <p className="mt-10 text-lg font-normal text-white sm:px-16 lg:px-0 lg:text-xl mr-60">
            Chairman and CEO
          </p>
        </div>
      </div> */}
      </section>
      <div className="absolute top-30 right-[70px] bottom-30 p-8 z-20">
        <Image
          loading="lazy"
          width={500}
          height={2500}
          className="rounded-lg shadow-lg border-4 border-white"
          src="/images/board/board-img-2.svg"
          alt="Vision Image"
        />
      </div>
    </>
  );
};

export default Chairman;
