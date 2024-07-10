import Image from 'next/image';

const contentArray = [
  {
    title: "Grace believes that...",
    text: "Access to quality health care and education are key and critical to breaking the vicious cycle of poverty and that every person should have the opportunity to maximize their potential",
    image: "/images/Gallery/grace-gallery-4.svg"
  },
  {
    title: "And we pursue this by...",
    text: "providing demand driven, scalable and sustainable solutions by engaging and supporting the rural poor through cost-effective health and education solutions to create tangible and lasting impact",
    image: "/images/Gallery/grace-gallery-5.svg"
  },
  {
    title: "Grace is driven by...",
    text: "compassion, dedication, and a sincere holistic concern for the people we serve. We believe that every person should have access to quality health care, education and the opportunity to achieve their full potential regardless of race, religion, age, gender, or origin.",
    image: "/images/Gallery/grace-gallery-6.svg"
  }
];

const OurImpact = () => {
  return (
    <div className="px-4 py-16 mx-auto bg-gray-200 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      {contentArray.map((content, index) => (
        <div key={index} className={`flex flex-col gap-12 lg:gap-8 lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} mb-12`}>
          <div className="flex flex-col justify-center lg:w-1/2">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-orange sm:text-4xl sm:leading-none">
                {content.title}
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                {content.text}
              </p>
            </div>
          </div>
          <div className="relative w-full h-56 rounded shadow-lg lg:w-1/2 sm:h-96">
            <Image
              className="object-cover rounded-lg"
              src={content.image}
              alt={content.title}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurImpact;
