import Breadcrumb from "@/components/Common/Breadcrumb";
import OurMission from "@/components/Mission/Mission";
import MissionGallery from "@/components/Mission/MissionGallery";
import MissionOne from "@/components/Mission/MissionOne";
import MissionTwo from "@/components/Mission/MissionTwo";
import SectionTitleCard from "@/components/SectionTitleCard/SectionTitleCard";
import Team from "@/components/Team/Team";
import VisionTwo from "@/components/Vision/VisionThree";
import WhoWeAre from "@/components/WhoWeAre-Cards/WhoWeAre";

const Mission = () => {
  return (
    <>
      <div className="relative min-h-screen">
        {/* Breadcrumb */}
        <div className="absolute top-0 right-0 mt-10 mr-4 z-10">
          <Breadcrumb pageName="Mission" description="Our Mission" />
        </div>

        {/* Main content */}
        <div className="relative z-0">
          <OurMission />
        </div>

        {/* MissionOne component */}
        <div className="absolute -bottom-90 left-0  ml-8 z-10 w-full max-w-lg">
          <MissionOne />
        </div>
      </div>
      <MissionTwo />
      <MissionGallery />
      <WhoWeAre />
    </>
  );
};

export default Mission;
