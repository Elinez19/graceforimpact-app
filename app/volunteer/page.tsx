import JoinUs from '@/components/JoinUs/JoinUs'
import JoinUsOne from '@/components/JoinUs/JoinUsOne'
import Volunteer from '@/components/JoinUs/Volunteer'
import VolunteerOne from '@/components/JoinUs/VolunteerOne'
import WhoWeAre from '@/components/WhoWeAre'
import React from 'react'

const volunteerPage = () => {
  return (
    <>
      <WhoWeAre title={'VOLUNTEER'} description={'Grace for Impact believes that access to quality healthcare and education are key and critical to breaking the vicious cycle of poverty and that every person should have the opportunity to maximize their potential.'} />
      <Volunteer/>
      <VolunteerOne/>
    </>
  )
}

export default volunteerPage
