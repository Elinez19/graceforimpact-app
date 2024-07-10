import JoinUs from '@/components/JoinUs/JoinUs'
import JoinUsOne from '@/components/JoinUs/JoinUsOne'
import WhoWeAre from '@/components/WhoWeAre'
import React from 'react'

const JoinUsPage = () => {
  return (
    <>
      <WhoWeAre title={'JOIN US IN THE FIELD'} description={'Embark on a journey of incredible personal and professional growth working side-by-side with our team and other key stakeholders in the field. Every year, hundreds of volunteer professionals make the decision to join us in the field and we hope you will too!'} />
      <JoinUs/>
      <JoinUsOne/>
    </>
  )
}

export default JoinUsPage
