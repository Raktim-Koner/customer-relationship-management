import React from 'react'
import LandingLogo from '../Components/LandingPage/LandingLogo';
import LandingSocialmedia from '../Components/LandingPage/LandingSocialmedia';
import LandingTagline from '../Components/LandingPage/LandingTagline';
import LandingHandimage from '../Components/LandingPage/LandingHandimage';
import LandingButton from '../Components/LandingPage/LandingButton';

const Landing = () => {
  return (
    <div
     className="h-[45.3rem] "
      style={{ background: 'linear-gradient(to bottom, #FDFDFD, #B1E0E6)' }}>

      <div className="flex mt-3">
        <LandingLogo/> 
        <LandingSocialmedia/> 
      </div> 
      <div className='flex mt-4 ml-4'>
      <LandingTagline/>
      <LandingHandimage/>
      </div>

      <LandingButton/>
   </div>
  )
}
export default Landing;