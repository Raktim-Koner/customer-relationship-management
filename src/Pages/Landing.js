import React from 'react'
import LandingBg from "../Assets/LandingBg.png"
import LandingLogo from "../Components/LandingPage/LandingLogo"
import LandingSocialmedia from "../Components/LandingPage/LandingSocialmedia"
import LandingTagline from "../Components/LandingPage/LandingTagline"
import LandingButton from "../Components/LandingPage/LandingButton"
import LandingHandimage from '../Components/LandingPage/LandingHandimage'


const Landing = () => {
  return (
    <div className="h-full bg-no-repeat bg-cover bg-center"
       style={{backgroundImage: `url(${LandingBg})` }}>

       <div className='flex'>
           <LandingLogo/>
           <LandingSocialmedia/>
      </div>
      <div  class="flex ">
          <div className='px-6 -mt-[1rem] ml-6'>
             <LandingTagline/>
              <div className='ml-[17rem] mt-[5rem]'> 
                <LandingButton/> 
             </div>

           </div> 
             <LandingHandimage/>
      </div>
   </div>
  )
}

export default Landing