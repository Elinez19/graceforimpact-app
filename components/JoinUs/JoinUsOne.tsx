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
    title: "JOIN US IN THE FIELD",
    description: `Embark on a journey of incredible personal and professional growth working side-by-side with our team and other key stakeholders in the field. Every year, hundreds of volunteer professionals make the decision to join us in the field and we hope you will too!
 `,
    memberId: "1",
  },
  {
    imgSrc: "/images/board/board-img-5.svg",
    videoId: "L61p2uyiMSo",
    title: "WE NEED YOU!",
    description: `That’s right, YOU! Grace is in need of a diverse pool of volunteers to join us in the field including medical doctors, nurses, physician’s assistant’s, dentists, ophthalmologists, counselors, surgeons, administrators, operations managers, logisticians and more!
 `,
    memberId: "1",
  },
  {
    imgSrc: "/images/board/board-img-5.svg",
    videoId: "L61p2uyiMSo",
    title: "WHY VOLUNTEER WITH GRACE?",
    description: `That’s right, YOU! Grace is in need of a diverse pool of volunteers to join us in the field including medical doctors, nurses, physician’s assistant’s, dentists, ophthalmologists, counselors, surgeons, administrators, operations managers, logisticians and more!
 `,
    memberId: "3",
  },
  {
    imgSrc: "/images/board/board-img-5.svg",
    videoId: "L61p2uyiMSo",
    title: "Doing good is good for you!",
    description: `Volunteering with Grace for Impact will be an amazing and rewarding experience to give back and help those in need. Volunteering abroad is a mind-opening experience that exposes one to other cultures, languages and ways of life. By experiencing day-to-day existence in an area of great need you will leave a better person- feeling humbled, grateful and appreciated!
 `,
    memberId: "4",
  },
  {
    imgSrc: "/images/board/board-img-5.svg",
    videoId: "L61p2uyiMSo",
    title: "WHAT TO EXPECT?",
    description: `As a Grace for Impact Volunteer, you can expect your time in the field to be one of the most rewarding and challenging experiences of your career! You will be provided with meaningful work and the opportunity to make a difference in the lives of the poorest of the poor and underserved.  You will be treated as a professional and we’ll be sure we capitalize on your areas of expertise and interest.

    The length of your service as a volunteer depends on your availability and can be as little as 2 weeks or as long as 2 years! Grace will work in a participatory manner with you to establish your personalized volunteer service plan which includes your scope while in the field.

 `,
    memberId: "5",
  },
  {
    imgSrc: "/images/board/board-img-5.svg",
    videoId: "L61p2uyiMSo",
    title: "WHAT TO EXPECT?",
    description: `Once in the field, you will work in mostly remote areas with limited conveniences and creature comforts but that will be offset by the grateful smiles of our patients and beneficiaries. If it’s your first trip to a developing country you will be provided an orientation to help you prepare.
 

If you need just one more reason, volunteering is also good for your health! Don’t believe us? Well, there was actually a study conducted by United Healthcare, see their info-graph below that helps you count the ways!

 `,
    memberId: "6",
  },
];

const JoinUsOne = () => {
  const [isOpen, setOpen] = useState(false);
  const [videoId, setVideoId] = useState("");

  const handleOpenModal = (videoId: string) => {
    setVideoId(videoId);
    setOpen(true);
  };

  return (
    <div className="relative overflow-hidden bg-white py-16 space-y-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-purple ">
        MAKE AN IMPACT TODAY!
        </h1>
        <p className="mt-2 text-lg text-purple">
        GRACE CAN’T DO IT WITHOUT YOU- GIVE TODAY!
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
                Apply Now
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

export default JoinUsOne;
