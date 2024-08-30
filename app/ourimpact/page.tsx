import ImpactStat from '@/components/Impact-Stat'
import SuccessStories from '@/components/SuccessStories'
import WhoWeAre from '@/components/WhoWeAre'
import React from 'react'

const ImpactPage = () => {
  return (
    <>
      <ImpactStat/>
     {/* <WhoWeAre title={'We Are All About Impact'} description={'Grace for Impact takes measuring our results and progress seriously because we know if you can’t measure it, it doesn’t count! Measuring our results allows us to track our progress against key indicators which have been prioritized and adopted as our Global Indicators. We invite you to take a look at our impressive impact numbers below and follow our progress on Facebook and Instagram!'}/> */}
      <SuccessStories/>
    </>
  )
}

export default ImpactPage
