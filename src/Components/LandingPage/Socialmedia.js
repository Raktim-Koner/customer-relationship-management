import React from 'react'
import Facebook from "../../Assets/Facebook.png";
import Twitter from "../../Assets/Twitter.png";
import Instagram from "../../Assets/Instagram.png";
const Socialmedia = () => {
  return (
    <div className="absolute top-4 right-12 flex space-x-3">
      <img src={Facebook} alt="Facebook" className="h-7 w-7"/>
      <img src={Twitter} alt="Twitter" className="h-6 w-6"/>
      <img src={Instagram} alt="Instagram" className="h-8 w-8"/>
    
 </div>
  )
}

export default Socialmedia;