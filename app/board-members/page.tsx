import Breadcrumb from "@/components/Common/Breadcrumb";
import OurBoard from "@/components/Board/Board";
import BoardOne from "@/components/Board/BoardOne";
import BoardThree from "@/components/Board/BoardThree";
import SectionTitleCard from "@/components/SectionTitleCard/SectionTitleCard";
import ChairmanDetails from "@/components/Board-Members/Chairman-details";
import BoardTitle from "@/components/Board-Members";
import VisionThree from "@/components/Vision/VisionThree";
import WhoWeAre from "@/components/WhoWeAre";

const BoardMember = () => {
  return (
    <>
      <WhoWeAre title={"What We Do"} description={"Grace for Impact builds on more than 10 years of organizational experience and has a passionate and talented senior leadership team and board of directors comprised of industry leaders who are committed to long-term program excellence, in addition to transparency, accountability and efficiency."} />
      <ChairmanDetails />
      <SectionTitleCard title={`Grace for Impact`} description={`Grace for Impact builds on more than 10 years of organizational experience and has a passionate and talented senior leadership team and board of directors comprised of industry leaders who are committed to long-term program excellence, in addition to transparency, accountability and efficiency.`} />      <VisionThree />
    </>
  );
};

export default BoardMember;
