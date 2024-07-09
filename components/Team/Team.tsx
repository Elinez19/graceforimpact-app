// const sections = [
//   {
//     imgSrc: "/images/board/board-img-1.svg",
//     title: "PRESIDENT AND CEO",
//     description: "Suzanne McCormick",
//   },
//   {
//     imgSrc: "/images/board/board-img-2.svg",
//     title: "EXECUTIVE V.P./CHIEF NETWORK EXPERIENCE OFFICER",
//     description: "Shawn Borzelleri",
//   },
//   {
//     imgSrc: "/images/board/board-img-3.svg",
//     title: "SENIOR V.P./CHIEF GOVERNMENT AFFAIRS OFFICER",
//     description: "Jeff Britt",
//   },
//   {
//     imgSrc: "/images/board/board-img-4.svg",
//     title: "SENIOR V.P./CHIEF INFORMATION OFFICER",
//     description: "Tom Gardner",
//   },
//   {
//     imgSrc: "/images/board/board-img-5.svg",
//     title: "SENIOR V.P./CHIEF DIVERSITY, INCLUSION AND GLOBAL OFFICER",
//     description: "Lynda Gonzales-Chavez",
//   },
// ];

import Image from "next/image";
import Link from "next/link";

interface BoardMember {
  imgSrc: string;
  title: string;
  name: string;
  description: string;
  memberId: string; // 
}

const sections: BoardMember[] = [
  {
    imgSrc: "/images/board/gfi-ceo-amanda-childress.svg",
    title: "BOARD CHAIRMAN",
    name: "DAPO ORIOLA",
    description: `Mr. Dapo Oriola, a native of Nigeria, is the founder and Chairman of Grace for Impact. Mr. Oriola is a passionate and effective philanthropist who brings over 20 years of executive leadership experience to the organization.
    
    He has served in a variety of roles over the years including non-profit healthcare, education, active ministry, journalism and the private sector. Mr. Oriola is currently a partner with a leading healthcare technology company based in Dallas, Texas. 

    Mr. Oriola holds multiple degrees including a bachelors in Theology, a Masters in Journalism and a degree in Philanthropy. A committed life learner, he also earned a Master of Science degree in Information Systems Management.
    `,
    memberId: "1",
  },
  {
    imgSrc: "/images/board/board-img-2.svg",
    title: "DIRECTOR",
    name: "ELIJAH STONE",
    description: `Mr. Stone is a native-born, first-generation Texan and is currently an attorney with Jones Day in Dallas, TX.
Before law school, Mr. Stone worked for four years in real estate and then six years as a paralegal at a bankruptcy law firm. This law firm experience contributed to his desire to attend law school. Because of this work experience, he began law school at SMU as a slightly older, “non-traditional law student.” He selected a path of study that reflected an expanded view of his interests gained during his work experience: corporate transactions; creditor’s rights and bankruptcy; advanced contract drafting and legal writing; accounting and finance; mergers and acquisitions; dealmaking; and entrepreneurship. After passing the Texas bar exam, he began at the international law firm Jones Day. At Jones Day he works on a variety of matters including high stakes cross-border litigation and large transactions involving multinational parties.
Now that he has started his legal career, he wants to give back by sharing of his time and talents. Mr. Stone is married to his lovely wife, Cara and they have two children.
`,
    memberId: "2",

  },
  {
    imgSrc: "/images/board/board-img-2.svg",
    title: "",
    name: "ANDREW AWONIYI",
    description: `Dr .Andrew Awoniyi is an experienced healthcare professional, based in the Dallas-Fort Worth area in Texas. Dr. Awoniyi currently works in healthcare technology as the Director of Research and Education with Axxess. Andrew has experience in chronic disease management and the utilization of health informational technology as a tool for improving the delivery of healthcare.
When not at the office, Dr .Awoniyi can be found playing racquetball, hiking, gardening and cooking. He and his family reside in the Dallas area.
`,
  memberId: "3",
  },
  {
    imgSrc: "/images/board/board-img-2.svg",
    title: "BOARD TREASURER",
    name: "CHARLOTTE LEWIS",
    description: `Ms. Charlotte Lewis brings extensive experience and expertise in education and has more recently decided to pursue her juris doctorate. She is currently studying for the Texas bar exam and looks forward to serving the DFW metroplex with their family law needs. She has a Bachelor of Science degree in Criminal Justice, a Master of Biblical Studies and Theology and her Juris Doctorate from the Dallas College of Law, University of North Texas.Ms. Lewis is passionate about giving back and serves aa variety of pro-poor initiatives. She has served on missions in East Africa including rural Uganda.In her free time she enjoys travel and volunteering.`,
    memberId: "4",

  },
  {
    imgSrc: "/images/board/board-img-2.svg",
    title: "DIRECTOR",
    name: "MOHAMMED ABDULWAHHAB",
    description: `Mr. Jermaine Ofori is a healthcare professional and leader with over 18 years of diverse, progressive experience. Jermaine is the Clinical Manager of Cardiovascular Ultrasound at University of Maryland Upper Chesapeake Health. A native of Yonkers, NY, he was born to first generation immigrant parents, mother from Jamaica, West Indies and father from Ghana, West Africa.
Jermaine holds a Bachelor of Science degree in Health Sciences and Healthcare Management from Stony Brook University and a Master of Science degree in Clinical Practice Management from Texas Tech University Health Sciences Center. Board certified in healthcare management as a fellow of the American College of Healthcare Executives (FACHE), and a LEAN Six Sigma Greenbelt, Jermaine demonstrates excellence in leadership service to his community and a commitment to life-long learning. He actively participates on a number of organizational committees and local chapters in the Maryland Area and Delaware Valley and he also provides cardiovascular imaging screenings throughout the year to at risk and forgotten populations in the community.

In addition to his work in healthcare, Jermaine was ordained into ministry 10 years ago and currently serves as an associate pastor for a bilingual Hispanic congregation in Paterson, New Jersey.
He is happily married for 11 years to his wife Kikelomo, they have two beautiful daughters. During leisure time, Jermaine enjoys swimming, reading and spending time with his family.

 `,
    memberId: "7",

  },
  
  {
    imgSrc: "/images/board/board-img-2.svg",
    title: "DIRECTOR",
    name: "JERMAINE OFORI",
    description: `Dr. Peace Jessa is a practicing physician board certified in occupational medicine and Preventive Medicine.   She has worked in various healthcare arenas including, academic and industrial medicine and hospital medicine.  Following years as onsite physician at the Toyota Manufacturing Plant in Georgetown, Kentucky, and assistant professorship teaching position at the University of Kentucky Colleges of Medicine, Pharmacy and Public Health, Dr. Jessa joined Southern Ohio Medical Center, Portsmouth Ohio as the Medical director for the Center for Occupational Health Services.
Currently, she is employed as a full-time physician with University of North Carolina High Point Regional Hospital in High Point, NC where she serves as the medical director for the Occupational Medicine and Work Health Department.  Dr. Jessa’s focus is on work related acute and chronic injuries, illness, and preventive health services.  Dr. Jessa also holds a pharmacy degree as well master’s degree in public health.  Dr. Jessa is passionate about global health initiatives and fostering preventive health programs in developing nations.  Dr. Jessa serves as member board of other three nonprofit organizations.`,
    memberId: "7",
  },
  
  {
    imgSrc: "/images/board/board-img-2.svg",
    title: "SECRETARY",
    name: "LESLIE M. LAWRENCE",
    description: `Dr. Lawrence received her dental degree from Tufts University in Boston, MA and earned a specialty certificate and Master’s degree in Pediatric Dentistry at the University of Michigan, School of Dentistry in Ann Arbor, MI.  She is a Diplomate of the American Board of Pediatric Dentistry and a Fellow of the Royal College of Dental Surgeons of Canada. Dr. Lawrence has worked in private practice (Ohio, Pennsylvania, DC), for a non-profit dental clinic (Mott Children’s Health Center, Flint, MI) and in academia (Adjunct Assistant Professor at the University of Michigan; Associate Professor at Howard University College of Dentistry).  Dr. Lawrence has also served in the realm of organized dentistry with the American Dental Association, American Academy of Pediatric Dentistry and is a board examiner for the American Board of Pediatric Dentistry and the Royal College of Dental Surgeons of Canada.  Dr. Lawrence believes that all children should have access to excellent oral health care.
In addition, Dr. Lawrence holds membership or affiliations with the-American Academy of Pediatric Dentistry (AAPD), the College of Diplomates, American Board of Pediatric Dentistry (CoD-ABPD). The Royal College of Dentists of Canada (RCDC), the District of Columbia Academy of Pediatric Dentistry (DCAPD), the Maryland Academy of Pediatric Dentistry (MAPD) and the American Dental Education Association (ADEA).
When not working or volunteering, Leslie enjoys sewing and photography.`,
    memberId: "6",
  },
  {
    imgSrc: "/images/board/board-img-2.svg",
    title: "DIRECTOR",
    name: "ERIC AIGBEDION",
    description: `Dr. Eric Oseikhuemen Aigbedion MD, MBBS, and BS. He has 22 years of experience and practices in Internal Medicine and Emergency Medicine. Dr. Aigbedion attended medical school at University of Lagos College of Medicine and graduated in 1987 having 26 years experience. Additional Internal Medicine training was conducted at Brookdale University Hospital and Medical Center. He is licensed to practice in Virginia and Maryland.
Eric is passionate about giving back and has been involved in a variety of humanitarian and philanthropic initiatives focused on healthcare and poverty alleviation.`,
    memberId: "6",
  },
  {
    imgSrc: "/images/board/board-img-2.svg",
    title: "DIRECTOR",
    name: "ADESOLA MICHAEL DADA",
    description: `Mr. Adesola Dada  has served as a Board Member of Grace for Impact since 2008. He is a Registered Nurse and has over 35 years of experience in the medical field.
Adesola is affiliated with the Florida Board of Nursing and owns 2 companies in the US and Nigeria. He is a member of the Review Panel for the US National Board of Nursing. He has received an award for Outstanding BSN, Nursing Preceptor for Orlando Healthcare.
In his free time he enjoys spending time with his lovely wife, Rachel as well as traveling and reading.`,
    memberId: "6",
  },
  {
    imgSrc: "/images/board/board-img-2.svg",
    title: "DIRECTOR",
    name: "EDDY EFEURHOBO",
    description: `Mr. Eddy Efeurhobo has more than 20 years of healthcare experience. He and his wife, Anne, own a home healthcare agency in Ohio. The Efeurhobo family are passionate about giving back and are involved in a variety of philanthropic and humanitarian initiatives here in the states and abroad.
In his free time, Mr. Efeurhobo enjoys spending time with his family, traveling and volunteering.`,
    memberId: "6",
  },
  {
    imgSrc: "/images/board/board-img-2.svg",
    title: "DIRECTOR",
    name: "ADETOLA ELEWA",
    description: `Tola Elewa resides in London and has worked for the British civil service for over 20 years. She joined Grace for Impact in 2009 and became a UK trustee for the organization when it became a UK registered charity. Prior to working with GFI Tola worked for a Sierra Leone based charity, Light of Hope International, a charity that focused on Women Empowerment and the established of schools in rural Sierra Leone.
Tola holds a Bachelor of Law degree from the University of London and a Legal Practice certificate from the College of Law London. She recently completed Improving the Health of Women, Children and Adolescents: from Evidence to Action from the London school of hygiene & tropical medicine a course which she says makes her hungry! to do more in the areas of providing access to quality health services for those who live in rural improvised communities!
Since she joined GFI in 2009 she has attended all 8 medical missions up to date and participated as mission coordinator since 2010. She is currently doing a Master’s Program in Development Studies.
In 2016, Tola was the proud recipient of the, “Grace Engagement Award” for her contributions to the organization.
Tola enjoys travelling and cooking- she also has an impressive mug collection!`,
    memberId: "6",
  },
  
  // Add more sections with memberId for each board member
];

const Team = () => {
  return (
    <div className="relative overflow-hidden bg-white pt-16 pb-32 space-y-24">
      {sections.map((section, index) => (
        <div key={index} className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 bg-gray-100 border border-gray-300 rounded-lg">
            <div
              className={` mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ${
                index % 2 === 1 ? "lg:col-start-2" : ""
              }`}>
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                
                <h2 className="mt-4 text-lg text-gray-700">
                    {section.description}
                  </h2>
                  
                  <div className="mt-6">
                    <Link href="/board-members">
                      <div className="inline-flex rounded-lg bg-orange px-18 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-orange hover:bg-orange hover:ring-orange">
                        Learn More
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:block mt-12 sm:mt-16 lg:mt-0 flex justify-center items-center">
              <div
                className={`border border-gray-300 rounded-lg overflow-hidden`}
                style={{
                  width: "100%",
                  maxWidth: "847px",
                  maxHeight: "786px",
                  marginTop: "20px",
                }}>
                <Image
                  src={section.imgSrc}
                  alt={section.title}
                  width={847}
                  height={786}
                  className="object-cover"
                />
              </div>
              <h2 className="mt-4 text-lg text-gray-700">
                    {section.name}
                  </h2>
                  <h3 className="text-3xl font-bold tracking-tight text-orange">
                    {section.title}
                  </h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
