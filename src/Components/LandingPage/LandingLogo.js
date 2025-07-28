import React from 'react';
import Logo from "../../Assets/LOGO.png";

const LandingLogo = () => {
  return (
    <div className="flex items-center">
      <img 
        src={Logo} 
        alt="Logo" 
        className="h-12 w-auto sm:h-14 md:h-16"
      />
    </div>
  );
};

export default LandingLogo;
