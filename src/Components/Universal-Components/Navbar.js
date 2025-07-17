import React from 'react';
import Logo from '../NavbarIcon/Logo';
import Notification from '../NavbarIcon/Notification';
import Usericon from '../NavbarIcon/Usericon';



const Navbar = () => {
  return (
    <div
      className="flex items-center shadow-md"
      style={{ background: "linear-gradient(to right, #FDFDFD, #B0E0E6)" }}
    >
      <Logo />
      <Notification/>
      <Usericon/>
    </div>
  );
};

export default Navbar;
