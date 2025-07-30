import React from 'react';
import Image from "../../Assets/HandImage.png";

const LandingHandimage = () => {
  return (
    <img
      src={Image}
      alt="Handimage"
      className="w-full h-auto mt-[2.7rem] sm:w-[30rem] sm:h-[28rem] lg:w-[42rem] lg:h-[38.46rem] mx-auto"
    />
  );
};

export default LandingHandimage;
