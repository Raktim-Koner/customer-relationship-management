import React from 'react'
import Facebook from "../../Assets/Facebook.png";
import Twitter from "../../Assets/Twitter.png";
import Instagram from "../../Assets/Instagram.png";
const LandingSocialmedia = () => {
  return (
    <div className="flex ml-[82rem]">
      <img src={Facebook} alt="Facebook" className="h-8 w-8 my-2"/>
      <img src={Twitter} alt="Twitter" className="h-6 w-6 my-3"/>
      <img src={Instagram} alt="Instagram" className="h-9 w-9 my-2"/>
    
 </div>
  )
}

export default LandingSocialmedia;