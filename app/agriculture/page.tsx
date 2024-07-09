import Agriculture from "@/components/Agriculture/Agriculture";
import AgricultureVidGallery from "@/components/Agriculture/AgricultureGallery";
import AgricultureOne from "@/components/Agriculture/AgricultureOne";
import AgricultureThree from "@/components/Agriculture/AgricultureThree";
import AgricultureTwo from "@/components/Agriculture/AgricultureTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import WhoWeAre from "@/components/WhoWeAre";

const AgriculturePage = () => {
  return (
    <>
      <WhoWeAre />
      <AgricultureThree />
      <AgricultureTwo />
      <AgricultureVidGallery />
    </>
  );
};

export default AgriculturePage;
