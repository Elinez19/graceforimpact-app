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
    imgSrc: "/images/board/grace-dental.jpg",
    videoId: "L61p2uyiMSo",
    title: "GENERAL HEALTH",
    description: `Over 400 million people globally lack access to essential health services, and in at least 37 low- and middle-income countries, this deprivation pushes people further into extreme poverty, living on less than $1.25 per day. The world's most disadvantaged populations are consistently excluded from even the most basic healthcare services, posing a significant obstacle to eradicating extreme poverty.

This dire situation contributes to the alarming statistic that over 13 million children under the age of five die each year from preventable or treatable illnesses. The poorest communities are particularly vulnerable to food shortages, lack of clean drinking water, and inadequate sanitation systems, with Sub-Saharan Africa and South Asia being the most affected regions. Just five countries—India, Nigeria, the Democratic Republic of Congo, Pakistan, and Ethiopia—account for more than half of all child deaths worldwide, totaling over 6 million deaths annually.

Grace for Impact is dedicated to reducing these heartbreaking numbers, emphasizing that even one child death is one too many. They urge support for their critical mission to save lives and ask for donations to continue their essential work.
      `,
    memberId: "1",
  },
  {
    imgSrc: "/images/board/grace-eye-2.jpg",
    videoId: "L61p2uyiMSo",
    title: "EYE HEALTH",
    description: `39 million people in the world are blind, and a further 191 million are visually impaired. Blindness is most prevalent in developing countries where malnutrition, inadequate health and education services, poor water quality, and a lack of sanitation lead to a high incidence of eye disease.
Cataracts remain the leading cause of blindness in middle and low-income countries. A cataract occurs when clumping of cells or protein causes a cloudy or opaque area in the transparent lens which obstructs light as it thickens. Cataracts are easily reversible; the surgical procedure costing between $25 and $250, taking as little as 10 minutes.
Collectively, blindness and visual impairment costs developing countries around $49 billion per year in lost economic activity. Completely ending avoidable blindness is expected to inject $517.1 billion into the poorest economies over a decade. Following eye surgery, a large amount of people are able to return to the workforce to be a productive part of society. Those who are not working are able to perform essential tasks for daily living on their own, freeing their caretakers- often children- to return to work or school. In the developing world, for every dollar invested, there is a $4 economic gain.
Grace for Impact’s life-changing eye health program is made possible by our generous donors and partners- please make a generous gift TODAY!
`,
    memberId: "2",
  },
  {
    imgSrc: "/images/board/grace-dental-3.jpg",
    videoId: "L61p2uyiMSo",
    title: "DENTAL HEALTH",
    description: `Did you know that poor dental health could further cause problems such as heart disease, strokes, and diabetes? According to the World Health Organization, 60–90% of school children and nearly 100% of adults worldwide have dental cavities. About 30% of people aged 65-74 have no natural teeth.
 
Oral disease in children and adults is higher among poor and disadvantaged population groups. Risk factors for oral diseases include an unhealthy diet, tobacco use, harmful alcohol use and poor oral hygiene, and social determinants. 

Globally, most children have signs of gingivitis and, among adults, the initial stages of periodontal diseases are prevalent.In many developing countries, access to oral health services is limited and teeth are often left untreated or are extracted because of pain or discomfort. Throughout the world, losing teeth is still seen as a natural consequence of ageing.
 
The greatest burden of all diseases is on the disadvantaged and socially marginalized. A major benefit of the common risk factor approach is the focus on improving health conditions for the whole population as well as for high risk groups; thereby reducing inequities.

It’s our goal to educate adults and children in schools about the causes of oral diseases and encourage people to maintain consistent dental hygiene by providing them with the necessary tools.
 
Grace for Impact’s important dental health work is made possible by our generous donors and partners- please make a generous gift TODAY!

`,
    memberId: "3",
  },
  // Add more sections with memberId and videoId for each board member
];

const HealthThree = () => {
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
          Health Outreach Programs
        </h1>
        <p className="mt-2 text-lg text-purple">
          Empowering young people to reach their full potential.
        </p>
      </div>
      {sections.map((section, index) => (
        <div key={index} className="relative flex flex-col lg:flex-row items-stretch justify-between space-y-6 lg:space-y-0 lg:space-x-6 bg-gray-100 border border-gray-300 rounded-lg py-6 px-6">
          <div className={`flex-1 ${index % 2 === 0 ? 'order-1 lg:order-2' : 'order-1 lg:order-1'} flex items-stretch`}>
            <Image
              src={section.imgSrc}
              alt={section.title}
              width={847}
              height={786}
              className="object-cover rounded-lg"
            />
          </div>
          <div className={`flex-1 ${index % 2 === 0 ? 'order-2 lg:order-1' : 'order-2 lg:order-2'} flex flex-col justify-between`}>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-purple">
                {section.title}
              </h2>
              <p className="mt-4 text-lg text-gray-700 whitespace-pre-line">
                {section.description}
              </p>
            </div>
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

export default HealthThree;
