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
    imgSrc: "/images/Gallery/graceforimpact-img13.jpg",
    videoId: "L61p2uyiMSo",
    title: "VOLUNTEER",
    description: `Grace for Impact believes that access to quality healthcare and education are key and critical to breaking the vicious cycle of poverty and that every person should have the opportunity to maximize their potential.`,
    memberId: "1",
  },
  {
    imgSrc: "/images/Gallery/graceforimpact-img9.jpg",
    videoId: "L61p2uyiMSo",
    title: "VOLUNTEER",
    description: `And that’s where YOU come in! Grace is able to change lives thanks to the valuable contributions from our volunteer professionals, who are dedicated to doing good and using their skills, experience, and expertise to make an impact. Grace offers meaningful opportunities for volunteer medical professionals, administrators, educators and more- see the below listing of our most urgently needed areas of expertise!
Apply now or reach out to us today to learn about more ways you can get involved!`,
    memberId: "1",
  },
];

const VolunteerOne = () => {
  const [isOpen, setOpen] = useState(false);
  const [videoId, setVideoId] = useState("");

  const handleOpenModal = (videoId: string) => {
    setVideoId(videoId);
    setOpen(true);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    expertise: "",
    availability: "",
    comments: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert('Email sent successfully!');
        setFormData({
          name: "",
          email: "",
          phone: "",
          expertise: "",
          availability: "",
          comments: "",
        });
      } else {
        alert('Failed to send email');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send email');
    }
  };
  

  return (
    <div className="relative overflow-hidden bg-white py-16 space-y-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-purple">
          MAKE AN IMPACT TODAY!
        </h1>
        <p className="mt-2 text-lg text-purple">
          GRACE CAN’T DO IT WITHOUT YOU- GIVE TODAY!
        </p>
      </div>
      {sections.map((section, index) => (
        <div
          key={index}
          className="relative flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:space-x-6 bg-gray-100 border border-gray-300 rounded-lg py-6 px-6"
        >
          <div
            className={`flex-1 ${
              index % 2 === 0 ? "order-1 lg:order-2" : "order-1 lg:order-1"
            }`}
          >
            <Image
              src={section.imgSrc}
              alt={section.title}
              width={847}
              height={786}
              className="object-cover rounded-lg"
            />
          </div>
          <div
            className={`flex-1 ${
              index % 2 === 0 ? "order-2 lg:order-1" : "order-2 lg:order-2"
            }`}
          >
            <h2 className="text-3xl font-bold tracking-tight text-purple">
              {section.title}
            </h2>
            <p className="mt-4 text-lg text-gray-700 whitespace-pre-line">
              {section.description}
            </p>
            <div className="mt-6">
              <Link
                href="#volunteer-form"
                className="inline-block bg-purple px-6 py-2 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-purple hover:bg-purple/95 hover:ring-purple"
                passHref
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      ))}
      <div id="volunteer-form" className="max-w-3xl mx-auto mt-16">
        <h2 className="text-3xl font-bold text-center text-purple">
          Volunteer Application Form
        </h2>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone(WhatsApp Number) 
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="expertise"
                className="block text-sm font-medium text-gray-700"
              >
                Profession
              </label>
              <select
                name="expertise"
                id="expertise"
                value={formData.expertise}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
              >
                <option value="">Select your expertise</option>
                <option value="Medical Doctor">Medical Doctor
                </option>
                <option value="Optometrist">Optometrist</option>
                <option value="Nurse">Nurse</option>
                <option value="Dentist">Dentist</option>
                <option value="Pharmacist">Pharmacist</option>
                <option value="Medical Lab Scientist">Medical Lab Scientist</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div>
            <label
              htmlFor="availability"
              className="block text-sm font-medium text-gray-700"
            >
              Availability
            </label>
            <input
              type="text"
              name="availability"
              id="availability"
              value={formData.availability}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="comments"
              className="block text-sm font-medium text-gray-700"
            >
              Additional Comments
            </label>
            <textarea
              name="comments"
              id="comments"
              value={formData.comments}
              onChange={handleChange}
              rows={4}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="inline-block bg-purple px-6 py-2 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-purple hover:bg-purple/95 hover:ring-purple"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export default VolunteerOne;
