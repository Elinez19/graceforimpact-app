import EducationThree from "@/components/Education/EducationThree";
import EducationTwo from "@/components/Education/EducationTwo";
import WhoWeAre from "@/components/WhoWeAre";

const EducationPage = () => {
  return (
    <>
      <WhoWeAre title={"Education"} description={"25 million children leave school before completing their primary education in sub-Saharan Africa and South Asia"} />
      <EducationThree />
      <EducationTwo />
      {/* <EducationVidGallery /> */}
    </>
  );
};

export default EducationPage;
