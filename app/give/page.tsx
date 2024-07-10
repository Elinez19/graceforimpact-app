import Give from "@/components/Give/Give";
import GiveOne from "@/components/Give/GiveOne";
import WhoWeAre from "@/components/WhoWeAre";

const GetInvolvedPage = () => {
  return (
    <>
      <WhoWeAre title={"MAKE AN IMPACT TODAY!"} description={"GRACE CAN’T DO IT WITHOUT YOU- GIVE TODAY!. We need you! Individual, corporate, religious organizations—community fundraising and online fundraising kits available! See below."} />
      <GiveOne />
      <Give />
      {/* <GetInvolvedGallery /> */}
    </>
  );
};

export default GetInvolvedPage;
