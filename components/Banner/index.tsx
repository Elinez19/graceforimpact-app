"use client"
import Image from 'next/image';
import { Fade } from "react-awesome-reveal";
import Link from 'next/link';

const Banner = () => {
    const sections = [
        {
            title: "Grace is Committed to ...",
            description: "Delivering strong value for money to our donors and partners by leveraging donated goods, supplies and equipment as needs are identified. Creating measurable results and lasting impact, providing access to high quality health, education and related services.",
            imageSrc: "/images/Gallery/grace-partners.jpg",
            imageAlt: "Image 1",
        },
        {
            title: "Grace is passionate about our work ...",
            description:"providing demand driven, scalable and sustainable solutions by engaging and supporting the rural poor through cost-effective health and education solutions to create tangible and lasting impact",
            imageSrc: "/images/Gallery/grace-rural.jpg",
            imageAlt: "Image 2",
        },
        {
            title: "Grace is dedicated to ...",
            description: "compassionate, sincere, and holistic concern for the people we serve. We believe that every person should have access to quality health care, education and the opportunity to achieve their full potential regardless of race, religion, age, gender, or origin.",
            imageSrc: "/images/Gallery/grace-distribution-1.jpg",
            imageAlt: "Image 3",
        },
        {
            title: "The organization is uniquely positioned as it ...",
            description: "collaborates with a large network of dedicated health professionals and partners locally and on the ground in the countries we work  to effectively and efficiently deliver measurable results and a solid value for money to our donors and partners.",
            imageSrc: "/images/Gallery/grace-distribution-2.jpg",
            imageAlt: "Image 3",
        },
        {
            title: "We are passionate about the work we do because ...",
            description: "our activities and services can be life-changing– restoring sight with a cataract surgery, providing a wheelchair for someone who previously had to scoot around on the floor and providing access to education for the rural poor. Service to others is a rewarding and meaningful opportunity to make the world a better place- one person at a time.",
            imageSrc: "/images/Gallery/graceforimpact-img8.jpg",
            imageAlt: "Image 3",
        },
    ];

    return (
        <div id="home-section" className='bg-white/20'>
            <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-16">
                {sections.map((section, index) => (
                    <div key={index} className='mb-10'>
                        <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1 bg-white rounded-lg p-6 shadow-lg'>
                            {index % 2 === 0 ? (
                                <>
                                    <div className='col-span-6 flex flex-col justify-center'>
                                        <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                                            <h1 className="text-2xl lg:text-4xl font-semibold mb-5 text-purple md:4px lg:text-start text-center">
                                                {section.title}
                                            </h1>
                                        </Fade>
                                        <Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
                                            <p className='text-grey lg:text-lg font-normal mb-10 lg:text-start text-center'>
                                                {section.description}
                                            </p>
                                        </Fade>
                                    </div>
                                    <div className='col-span-6 flex justify-center relative'>
                                        <Image src={section.imageSrc} alt={section.imageAlt} width={800} height={105} className='object-cover rounded-lg'/>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className='col-span-6 flex justify-center relative'>
                                        <Image src={section.imageSrc} alt={section.imageAlt} width={1000} height={105} className='object-cover rounded-lg'/>
                                    </div>
                                    <div className='col-span-6 flex flex-col justify-center'>
                                        <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                                        <h1 className="text-2xl lg:text-4xl font-semibold mb-5 text-purple md:4px lg:text-start text-center">
                                                {section.title}
                                            </h1>
                                        </Fade>
                                        <Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
                                            <p className='text-grey lg:text-lg font-normal mb-10 lg:text-start text-center'>
                                                {section.description}
                                            </p>
                                        </Fade>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                ))}
                <div className='md:flex align-middle justify-center lg:justify-start'>
                    <button className='text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-purple lg:px-14 mr-6'>
                        <Link href='#cook-section'>Lets make impact</Link>
                    </button>
                    <button className='flex border w-full md:w-auto mt-5 md:mt-0 border-purple justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-pink hover:text-white hover:bg-purple'>
                        <Link href='#about-section'>Partner with us</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Banner;
