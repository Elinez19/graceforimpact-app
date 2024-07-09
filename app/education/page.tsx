import Breadcrumb from "@/components/Common/Breadcrumb";
import EducationVidGallery from "@/components/Education/EducationGallery";
import EducationThree from "@/components/Education/EducationThree";
import EducationTwo from "@/components/Education/EducationTwo";
import WhoWeAre from "@/components/WhoWeAre";

const EducationPage = () => {
  return (
    <>
      <WhoWeAre title={""} description={""} />
      <EducationTwo />
      <EducationThree />
      <EducationVidGallery />
    </>
  );
};

export default EducationPage;
