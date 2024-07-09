import Banner from '@/components/Banner';
import Featured from '@/components/Featured';
import SectionTitleCard from '@/components/SectionTitleCard/SectionTitleCard';
import WhoWeAre from '@/components/WhoWeAre';
import WhoWeAreCards from '@/components/WhoWeAre-Cards/WhoWeAre-Cards';
import React from 'react'

const WhoWeArePage = () => {
  return (
    <div>
    <WhoWeAre title={''} description={''}/>
    <Banner/>
    <SectionTitleCard title={`Grace For Impact`} description={`Grace for Impact builds on more than 10 years of organizational experience and has a passionate and talented senior leadership team and board of directors comprised of industry leaders who are committed to long-term program excellence, in addition to transparency, accountability and efficiency.`} />
    <WhoWeAreCards/>
    {/* <Featured/> */}
    </div>
  )
}

export default WhoWeArePage;
