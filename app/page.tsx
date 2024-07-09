import Hero from "@/components/Hero";
import HomePage from "./home/page";
import ImpactStat from "@/components/Impact-Stat";
import Features from "@/components/Features/Features";
import CTA from "@/components/CTA";
import Companies from "@/components/Companies/Companies";
import Network from "@/components/Network";
import Stats from "@/components/Stats";
import Gallery from "@/components/Gallery";
import Blog from "@/components/Blog";
import Content from "@/components/Content-Section";
import { Metadata } from "next";
import Banner from "@/components/Banner";
import WhoWeAre from "@/components/WhoWeAre";

// const contentArray = [
//   {
//     title: "Grace believes that...",
//     text: "Access to quality health care and education are key and critical to breaking the vicious cycle of poverty and that every person should have the opportunity to maximize their potential",
//     image: "/images/Gallery/grace-gallery-4.svg",
//   },
//   {
//     title: "And we pursue this by...",
//     text: "providing demand driven, scalable and sustainable solutions by engaging and supporting the rural poor through cost-effective health and education solutions to create tangible and lasting impact",
//     image: "/images/Gallery/grace-gallery-5.svg",
//   },
//   {
//     title: "Grace is driven by...",
//     text: "compassion, dedication, and a sincere holistic concern for the people we serve. We believe that every person should have access to quality health care, education and the opportunity to achieve their full potential regardless of race, religion, age, gender, or origin.",
//     image: "/images/Gallery/grace-gallery-6.svg",
//   },
// ];

export const metadata: Metadata = {
  title: "GraceForImpact-Non-profit Health care organization",
  description: `Grace For Impact (GFI is a non-profit health care organization with their headquarter office in Dallas, Texas, USA.`,
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero/>
      {/* <HomePage /> */}
      <Banner/>
      <Companies />
      <ImpactStat />
      <Content />
      <CTA />
      <WhoWeAre />
      <Gallery />
      <Features />
      <Network />
    </main>
  );
}
