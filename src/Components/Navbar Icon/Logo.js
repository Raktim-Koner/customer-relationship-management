import React from "react";
import logo from "../../Assets/LOGO.png"; // Correct import from src folder

const Logo = () => {
  return (
    <div className="h-full flex items-center px-4 py-1">
      <img src={logo} alt="Logo" className="h-11 w-auto" />
    </div>
  );
};

export default Logo;
