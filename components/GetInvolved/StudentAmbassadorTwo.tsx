import Image from 'next/image';
import Link from 'next/link';

const links = [
  {
    href: "#",
    imgSrc: "/images/logo/art-for-grace.png",
    label: " An opportunity to do something big and make an IMPACT."
  },
  {
    href: "#",
    imgSrc: "/images/logo/bake-for-grace.png",
    label: " Looks great on your college/grad school/job applications."
  },
  {
    href: "#",
    imgSrc: "/images/logo/bike-for-grace.png",
    label: "Receive graduation chords for your leadership"
  },
  {
    href: "#",
    imgSrc: "/images/logo/dance-for-grace.png",
    label: "Gain valuable knowledge and leaderships skills useful for life after graduation."
  },
];

const StudentAmbassadorTwo = () => {
  return (
    <div className="container relative z-40 mx-auto mt-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">WHY BECOME A STUDENT AMBASSADOR? 
        </h2>
        
      </div>
      <div className="flex flex-wrap justify-center mx-auto lg:w-full md:w-5/6 xl:shadow-small-blue">
        {links.map((link, index) => (
          <Link href={link.href} key={index} className="block w-full sm:w-1/2 md:w-1/3 lg:w-1/4 py-10 text-center border">
            <div>
              <Image src={link.imgSrc} alt={link.label} width={64} height={64} className="block mx-auto" />
              <p className="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                {link.label}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StudentAmbassadorTwo;
