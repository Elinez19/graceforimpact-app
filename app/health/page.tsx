import HealthVidGallery from "@/components/Health/HealthGallery";
import HealthThree from "@/components/Health/HealthThree";
import HealthTwo from "@/components/Health/HealthTwo";
import WhoWeAre from "@/components/WhoWeAre";


const HealthPage = () => {
  return (
    <>
      <WhoWeAre title={"GENERAL HEALTH"} description={"Over 400 million people do not have access to essential health services and people across at least 37 low- and middle-income countries are pushed further into extreme poverty (earning less than $1.25/day) because of the lack of healthcare. The world’s most disadvantaged people are consistently missing out on even the most basic services which poses as a major threat to the goal of eliminating extreme poverty."} />
      <HealthThree />
      <HealthTwo />
      {/* <HealthVidGallery /> */}
    </>
  );
};

export default HealthPage;
