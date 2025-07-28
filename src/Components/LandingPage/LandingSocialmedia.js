import React from 'react';
import Facebook from "../../Assets/Facebook.png";
import Twitter from "../../Assets/Twitter.png";
import Instagram from "../../Assets/Instagram.png";

const LandingSocialmedia = () => {
  return (
    <div className="flex gap-3">
      <img src={Facebook} alt="Facebook" className="h-9 w-9" />
      <img src={Twitter} alt="Twitter" className="h-7 w-7 mt-1" />
      <img src={Instagram} alt="Instagram" className="h-9 w-9" />
    </div>
  );
};

export default LandingSocialmedia;
