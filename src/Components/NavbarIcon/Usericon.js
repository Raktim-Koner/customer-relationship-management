import React, { useState } from "react";
import userIcon from "../../Assets/usericon.png";
import Closeicon from "../../Assets/Closeicon.png";
import signout from "../../Assets/signout.png.png"; 
import { useNavigate } from "react-router-dom";

const Usericon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleSignOut = () => {
    localStorage.removeItem("user");
    navigate("/signin");
  };

  return (
    <div className="relative">
      <img
        src={userIcon}
        alt="Usericon"
        className="h-9 w-9 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-3xl p-8 z-50">
          <div className="flex justify-between">
            <p className="text-base text-black ml-8">{user?.gmail}</p>
            <img
              src={Closeicon}
              alt="Close"
              className="h-4 w-4  cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </div>

          <div className="flex flex-col items-center mt-4">
            <div className="h-16 w-16 rounded-full bg-blue-300"></div>
            <h3 className="mt-2 text-xl font-semibold">Hi, {user?.name}!</h3>

            <button className="mt-4 border border-black px-6 py-2 rounded-full text-base hover:bg-gray-100">
              Your Account
            </button>

            <button className="mt-4 border border-black rounded-bl-2xl rounded-full rounded-br-2xl text-base px-5 h-[2.5rem] w-[14rem] hover:bg-gray-100 flex items-center gap-2">
              <span className="flex items-center justify-center w-5 h-5 bg-gray-300 rounded-full text-black font-bold">
                +
              </span>
              Add another account
            </button>


             <button
              className="mt-2 flex items-center gap-2 border border-black rounded-tl-2xl rounded-tr-2xl h-[2.5rem] w-[14rem] px-6 rounded-full hover:bg-gray-100 text-red-500 text-base hover:underline"
              onClick={handleSignOut}
            >
              <img src={signout} alt="Sign Out" className="h-4 w-4" />
              <p className="ml-5">Sign out</p>
            </button>

          </div>
        </div>
      )}
    </div>
  );
};

export default Usericon;
