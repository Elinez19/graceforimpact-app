import BoardThree from "@/components/Board/BoardThree";
import SectionTitleCard from "@/components/SectionTitleCard/SectionTitleCard";
import Team from "@/components/Team/Team";
import WhoWeAre from "@/components/WhoWeAre";

const Board = () => {
  return (
    <>
      
      <WhoWeAre title={"Grace for Impact Board Members"} description={"Grace for Impact builds on more than 10 years of organizational experience and has a passionate and talented senior leadership team and board of directors comprised of industry leaders who are committed to long-term program excellence, in addition to transparency, accountability and efficiency."} />  
      <SectionTitleCard title={`MEET THE BOARD OF DIRECTORS`} description={`Grace for Impact builds on more than 10 years of organizational experience and has a passionate and talented senior leadership team and board of directors comprised of industry leaders who are committed to long-term program excellence, in addition to transparency, accountability and efficiency.`} />
      <Team />
      <BoardThree />
    </>
  );
};

export default Board;
