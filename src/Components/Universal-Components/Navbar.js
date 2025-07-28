import React from 'react';
import Logo from '../NavbarIcon/Logo';
import Notification from '../NavbarIcon/Notification';
import Usericon from '../NavbarIcon/Usericon';
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <div
      className="flex items-center shadow-md"
      style={{ background: "linear-gradient(to right, #FDFDFD, #B0E0E6)" }}
    >
      <Link to="/"><Logo /></Link>
      <Notification/>
      <Usericon/>
    </div>
  );
};

export default Navbar;
