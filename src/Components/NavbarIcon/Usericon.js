import React, { useState } from "react";
import userIcon from "../../Assets/usericon.png";
import Closeicon from "../../Assets/Closeicon.png";
import signout from "../../Assets/signout.png.png"; 

const Usericon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* User Icon */}
      <img
        src={userIcon}
        alt="Usericon"
        className="h-9 w-9 cursor-pointer"
        onClick={toggleMenu}
      />

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2  w-80 bg-white shadow-lg rounded-3xl p-8 z-50">

          {/* Top Row: Email + Close */}
          <div className="flex justify-between -mt-5">
            <p className="text-base text-black ml-[4rem]">abc@gmail.com</p>             
            <img
              src={Closeicon}
              alt="Close"
              className="h-4 w-4 cursor-pointer hover:opacity-85 ml-[3rem] mt-2"
              onClick={() => setIsOpen(false)}
            />
          </div>

          <div className="flex flex-col items-center mt-4">
            <div className="h-16 w-16 rounded-full bg-blue-300"></div>
            <h3 className="mt-2 text-xl font-semibold">Hi, Ab!</h3>

            <button className="mt-4 border border-black px-6 py-2 rounded-full text-base hover:bg-gray-100">
              Your Account
            </button>
            <button className="mt-4 border border-black rounded-bl-2xl rounded-full rounded-br-2xl text-base px-5 h-[2.5rem] w-[14rem] hover:bg-gray-100 flex items-center gap-2">
              <span className="flex items-center justify-center w-5 h-5 bg-gray-300 rounded-full text-black font-bold">
                +
              </span>
              Add another account
            </button>

            {/* Sign out with Icon */}
            <button className="mt-2 flex items-center gap-2 border border-black rounded-tl-2xl rounded-tr-2xl h-[2.5rem] w-[14rem] px-6 rounded-full hover:bg-gray-100 text-red-500 text-base hover:underline">
              <img src={signout} alt="Sign Out" className="h-4 w-4" />
              <p className="ml-5">Sign out </p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Usericon;
