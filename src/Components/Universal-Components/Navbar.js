import React from 'react';
import Logo from '../Navbar Icon/Logo';

const Navbar = () => {
  return (
    <div
      className="flex items-center shadow-md"
      style={{ background: "linear-gradient(to right, #FDFDFD, #B0E0E6)" }}
    >
      <Logo />
    </div>
  );
};

export default Navbar;
