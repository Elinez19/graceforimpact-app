import Image from "next/image";

interface WhatWeDoProps{
  title: string;
  description: string;

}
const WhatWeDo: React.FC<WhatWeDoProps> = ({title, description}) => {
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

export default WhatWeDo;
