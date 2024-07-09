import Image from "next/image";
import Link from "next/link";

interface BoardMember {
  imgSrc: string;
  title: string;
  description: string;
  memberId: string; // Add memberId property
}

const sections: BoardMember[] = [
  {
    imgSrc: "/images/board/board-img-5.svg",
    title: "Our Commitment to Support Changemakers",
    description:
      "GFI has made a commitment to empower and support new generations of leaders who will shape the communities we all want to live in – young leaders who grow into thriving adults and will influence systems change, bridge social divides and give back.Through this collective effort, we can engage more young people and deepen their impact based on the needs and opportunities in their individual communities.",
    memberId: "1",
  },
  {
    imgSrc: "/images/board/board-img-5.svg",
    title: "EXECUTIVE V.P./CHIEF NETWORK EXPERIENCE OFFICER",
    description: "Shawn Borzelleri",
    memberId: "2",
  },
  // Add more sections with memberId for each board member
];

const VisionThree = () => {
  return (
    <div className="relative overflow-hidden bg-white py-16">
      {sections.map((section, index) => (
        <div key={index} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-24">
            <div className="order-2 md:order-1">
              <div className="p-6">
                <h2 className="text-3xl font-bold tracking-tight text-red-700 mb-4">
                  {section.title}
                </h2>
                <div className="flex justify-start mb-4">
                  <span className="inline-block h-2 w-30 rounded-full bg-orange"></span>
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  {section.description}
                </p>
                <div>
                  <Link
                    href={`board/${section.memberId}`}
                    className="inline-block rounded-lg bg-red-700 px-6 py-3 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-red-700 hover:bg-red-800 hover:ring-red-800">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="border border-gray-300 rounded-lg overflow-hidden">
                <Image
                  src={section.imgSrc}
                  alt={section.title}
                  width={847}
                  height={786}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VisionThree;
