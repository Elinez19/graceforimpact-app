import FundRaise from "@/components/FundRaise/FundRaise";
import FundRaiseOne from "@/components/FundRaise/FundRaiseOne";
import WhoWeAre from "@/components/WhoWeAre";

const FundRaisePage = () => {
  return (
    <>
      <WhoWeAre title={"We are passionate about the work we do and you should be too!"} description={"Our activities and services can be life changing– restoring sight with a cataract surgery, providing a wheelchair for someone who previously had to scoot around on the floor and providing access to education for the rural poor. Service to others is a rewarding and meaningful opportunity to make the world a better place- one person at a time."} />
      <FundRaiseOne />
      {/* <FundRaise /> */}
      {/* <GetInvolvedGallery /> */}
    </>
  );
};

export default FundRaisePage;
