import Breadcrumb from "@/components/Common/Breadcrumb";
import Health from "@/components/Health/Health";
import HealthVidGallery from "@/components/Health/HealthGallery";
import HealthOne from "@/components/Health/HealthOne";
import HealthThree from "@/components/Health/HealthThree";
import HealthTwo from "@/components/Health/HealthTwo";
import Team from "@/components/Team/Team";
import OurVision from "@/components/Vision/Vision";
import VisionOne from "@/components/Vision/VisionOne";
import VisionStats from "@/components/Vision/VisionStats";
import VisionThree from "@/components/Vision/VisionThree";
import VisionTwo from "@/components/Vision/VisionTwo";
import WhoWeAre from "@/components/WhoWeAre";


const Vision = () => {
  return (
    <>
      <WhoWeAre title={""} description={""} />
      <HealthThree />
      <HealthTwo />
      <HealthVidGallery />
    </>
  );
};

export default Vision;
