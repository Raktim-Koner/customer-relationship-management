import React from 'react'
import Logoicon from '../Components/LandingPage/Logoicon';
import Socialmedia from '../Components/LandingPage/Socialmedia';
import Tagline from '../Components/LandingPage/Tagline';
import Handimage from '../Components/LandingPage/Handimage';
import Button from '../Components/LandingPage/Button';

const Landing = () => {
  return (
    <div
     className="min-h-screen flex flex-col items-center justify-center"
      style={{ background: 'linear-gradient(to bottom, #FDFDFD, #B1E0E6)' }}>

      <Logoicon/> 
      <Socialmedia/>  
      <Tagline/>
      <Handimage/>
      <Button/>
     </div>
  )
}
export default Landing;