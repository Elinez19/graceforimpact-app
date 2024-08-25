import Hero from "@/components/Hero";
import ImpactStat from "@/components/Impact-Stat";
import Features from "@/components/Features/Features";
import CTA from "@/components/CTA";
import Companies from "@/components/Companies/Companies";
import Network from "@/components/Network";
import Stats from "@/components/ValueStats";
import Gallery from "@/components/Gallery";
import Blog from "@/components/Blog";
import Content from "@/components/OurImpact";
import { Metadata } from "next";
import Banner from "@/components/Banner";
import WhoWeArePage from "./whoweare/page";



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
      {/* <WhoWeArePage /> */}
      <Gallery />
      {/* <Features /> */}
      <Network />
    </main>
  );
}
