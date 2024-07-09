import WhatWeDoTwo from "@/components/WhatWeDo/WhatWeDoTwo";
import Health from "@/components/WhatWeDo/Health";
import SectionTitleCard from "@/components/SectionTitleCard/SectionTitleCard";
import Education from "@/components/WhatWeDo/Education";
import Agriculture from "@/components/WhatWeDo/Agriculture";
import WhoWeAre from "@/components/WhoWeAre";

const WhatWeDoPage = () => {
  return (
    <>
      <WhoWeAre title={"WHAT WE DO"} description={"Grace for Impact provides high quality healthcare and education to the rural poor, where it is needed most, in Sub-Saharan Africa and Southeast Asia."} />
      <WhatWeDoTwo />
      <Health />
      <SectionTitleCard title={"WHAT WE DO"} description={"Grace for Impact provides high quality healthcare and education to the rural poor, where it is needed most, in Sub-Saharan Africa and Southeast Asia"} />
      <Education />
      <Agriculture />
    </>
  );
};

export default WhatWeDoPage;
