import Agriculture from "@/components/Agriculture/Agriculture";
import AgricultureOne from "@/components/Agriculture/AgricultureOne";
import AgricultureThree from "@/components/Agriculture/AgricultureThree";
import AgricultureTwo from "@/components/Agriculture/AgricultureTwo";
import WhoWeAre from "@/components/WhoWeAre";

const AgriculturePage = () => {
  return (
    <>
      <WhoWeAre title={"GFI Small Scale Farmer Empowerment."} description={"GFI Small Scale Farmer Empowerment. Small-scale farmers are the backbone of global agriculture, yet they often lack access to resources and support."} />
      <AgricultureThree />
      <AgricultureTwo />
      {/* <AgricultureVidGallery /> */}
    </>
  );
};

export default AgriculturePage;
