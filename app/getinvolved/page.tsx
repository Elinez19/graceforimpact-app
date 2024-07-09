import Breadcrumb from "@/components/Common/Breadcrumb";
import GetInvolvedGallery from "@/components/GetInvolved/GetInvolvedGallery";
import GetInvolvedThree from "@/components/GetInvolved/GetInvolvedThree";
import GetInvolvedTwo from "@/components/GetInvolved/GetInvolvedTwo";
import WhoWeAre from "@/components/WhoWeAre";

const GetInvolvedPage = () => {
  return (
    <>
      <WhoWeAre />
      <GetInvolvedThree />
      <GetInvolvedTwo />
      <GetInvolvedGallery />
    </>
  );
};

export default GetInvolvedPage;
