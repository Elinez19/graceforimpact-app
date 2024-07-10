"use client";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import Image from "next/image";
import Link from "next/link";

interface HealthData {
  imgSrc: string;
  videoId: string;
  title: string;
  description: string;
  memberId: string;
}

const sections: HealthData[] = [
  {
    imgSrc: "/images/Banner/success-stories.png",
    videoId: "L61p2uyiMSo",
    title: "Aishat’s New Set of Wheels",
    description: `Aishat is a lively and energetic 7-year-old girl who lost the ability to walk after contracting polio at an early age. 
    Her father couldn’t handle the negative social stigma in his community around having a disabled child so he abandoned her, leaving her under the care of her mother.  
    Aishat’s mother worked tirelessly to make a living while battling through the hardships of poverty and the lack of opportunity for women in her village. She passed away while struggling to make ends meet, leaving Aishat in the care of her grandmother.
    Her grandmother began renting out her only canopy to local villagers to generate a small income so that Aishat could get an education. 
    She walked long distances, carrying Aishat on her back to make sure Aishat made it to school daily. During school hours, Aishat would carry the weight of her body by crawling on her hands and pulling herself forward. 
 She built enough strength to able to move with tremendous speed. She built a tough exterior after being bullied and teased for years.
 Aishat’s grandmother, after hearing via a radio announcement that there would be free medical attention given by Grace for Impact, carried Aishat to Mapo Hall in Ibadan, Nigeria. 
 Grace  provided Aishat with a free wheelchair which overjoyed Aishat and her Grandmother.  Special thanks to Free Wheelchair Mission for donating the wheelchairs that changed the lives of many, to Grace for Impact.  You too can get involved with helping a child in need like Aishat.
`,
    memberId: "2",
  },
  {
    imgSrc: "/images/Banner/success-stories1.png",
    videoId: "L61p2uyiMSo",
    title: "It Takes a Village",
    description: `While working in a rural village in Ipoti, Nigeria, Grace for Impact came across this dilapidated, but functional, maternity clinic. Precious newborn babies were entering the world on unclean torn mattresses, rusty beds and in unsanitary conditions. The maternity clinic needed to be renovated immediately, however, such a project at the time was outside of the scope and budget of the country team. Grace for Impact knew they couldn’t leave the clinic without doing something. With a few phone calls and emails, the Grace  team managed to pull together the funds and resources needed to renovate the maternity clinic. Through the help of our donors and partners, and in collaboration with the local leadership, the clinic was successfully renovated. In addition, the community contributed labor and materials to ensure sustainability and ownership.  Pregnant women in Ipoti can now confidently give birth in a clean and safe environment .
.
`,
    memberId: "2",
  },
  {
    imgSrc:  "/images/Banner/success-stories.png",
    videoId: "L61p2uyiMSo",
    title: "Meet Salewa",
    description: `Meet Salewa, a young, shy and timid girl, who struggled with a tumor in her mouth for most her life. Grace for Impact met her in 2012 in Erunmu, Ibadan. 
    Her condition was something that we had never encountered before and was out of scope at the time. She showed up at the clinic hopeful and optimistic that the tumor in her mouth could be removed but we were concerned that preforming the surgery could be a life-threatening situation for Salewa. 
    After our surgical doctors confirmed that the surgery could be accomplished, Grace for Impact proceeded in working with partners to immediately raise funds for the removal of the tumor. Determined to change her life, Salewa walked miles to make it to every hospital appointment.
    
    Because the unique procedure lasted for several months, the hospital fees piled up. The entire Grace team was committed to the success of the surgical procedure. Her surgeon was touched by her story that he even paid the hospital bill himself. You too can get involved with helping someone in need like Salewa.
      `,
    memberId: "1",
  },
];

const SuccessStories = () => {
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
        Grace’s Success Stories
        </h1>
        <p className="mt-2 text-lg text-purple">
          Empowering young people to reach their full potential.
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

export default SuccessStories
