"use client";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import Image from "next/image";
import Link from "next/link";

interface GetInvolvedData {
  imgSrc: string;
  videoId: string;
  title: string;
  description: string;
  memberId: string;
}

const sections: GetInvolvedData[] = [
  {
    imgSrc: "/images/board/board-img-5.svg",
    videoId: "L61p2uyiMSo",
    title: "Become A Student Ambassador",
    description: `Our Student Ambassador program is designed to provide students with the opportunity to gain and utilize valuable leadership skills. Grace for Impact will provide you with all the necessary tools to fulfill your role as a student ambassador. You will receive an ambassador kit that includes, t-shirts, brochures, event guides, marketing materials, and support to get you started.
 `,
    memberId: "1",
  },
  {
    imgSrc: "/images/board/board-img-5.svg",
    videoId: "L61p2uyiMSo",
    title: "Become A Student Ambassador",
    description: `As a Student Ambassador, you can work as an individual and collaborate with organizations that you’re already a part of to host fundraising events and educate others about the needs surrounding Health, Education, and Capacity Development.
 

Or you can also start your own Grace for Impact Campus Chapter. As the Chapter Head – you take the lead! You decide whether you would like to recruit and elect additional leaders, host meetings, form committees, and invite members to attend.  Annual elections and will allow the chapter that you started, to continue on at your campus, after you graduate. We have plenty of ideas to get you started and of course- we’re always here to help!

 `,
    memberId: "2",
  },
];

const StudentAmbassadorOne = () => {
  const [isOpen, setOpen] = useState(false);
  const [videoId, setVideoId] = useState("");

  const handleOpenModal = (videoId: string) => {
    setVideoId(videoId);
    setOpen(true);
  };

  return (
    <div className="relative overflow-hidden bg-white py-16 space-y-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-purple">
        Discover Ways you can help at GraceForImpact
        </h1>
        <p className="mt-2 text-lg text-purple">
        GFI has so much to offer. Whether it is becoming a member, partnership, joining a team or volunteering as a board member, everyone can find a way to be involved.
      </p>
      </div>
      {sections.map((section, index) => (
        <div key={index} className="relative flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:space-x-6 bg-gray-100 border border-gray-300 rounded-lg py-6 px-6">
          <div className={`flex-1 ${index % 2 === 0 ? 'order-1 lg:order-2' : 'order-1 lg:order-1'}`}>
            <Image
              src={section.imgSrc}
              alt={section.title}
              width={847}
              height={786}
              className="object-cover rounded-lg"
            />
          </div>
          <div className={`flex-1 ${index % 2 === 0 ? 'order-2 lg:order-1' : 'order-2 lg:order-2'}`}>
            <h2 className="text-3xl font-bold tracking-tight text-purple">
              {section.title}
            </h2>
            <p className="mt-4 text-lg text-gray-700 whitespace-pre-line">
              {section.description}
            </p>
            <div className="mt-6">
              <Link
                href="/blog/blog-details"
                className="inline-block bg-purple px-6 py-2 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-purple hover:bg-purple/95 hover:ring-purple"
                passHref>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      ))}
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export default StudentAmbassadorOne;
