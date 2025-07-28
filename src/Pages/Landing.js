import React from 'react';
import LandingBg from "../Assets/LandingBg.png";
import LandingLogo from "../Components/LandingPage/LandingLogo";
import LandingSocialmedia from "../Components/LandingPage/LandingSocialmedia";
import LandingTagline from "../Components/LandingPage/LandingTagline";
import LandingButton from "../Components/LandingPage/LandingButton";
import LandingHandimage from '../Components/LandingPage/LandingHandimage';

const Landing = () => {
  return (
    <div
      className="min-h-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${LandingBg})` }}
    >
      <div className="flex justify-between items-center px-6 py-2">
        <LandingLogo />
        <LandingSocialmedia />
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-20">
        <div className="text-center lg:text-left mt-10 lg:mt-0 w-full lg:w-1/2">
          <LandingTagline />
          <div className="mt-9 flex justify-center lg:justify-start">
            <LandingButton />
          </div>
        </div>
        <div className="w-full lg:w-1/2 ml-20 flex justify-center">
          <LandingHandimage />
        </div>
      </div>
    </div>
  );
};

export default Landing;
