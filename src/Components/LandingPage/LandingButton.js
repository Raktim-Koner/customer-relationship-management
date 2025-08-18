import React from 'react';
import { Link } from 'react-router-dom';

const LandingButton = () => {
  return (
    <Link to="/signin">
      <button
        style={{ backgroundColor: "#022B66" }}
        className="text-white px-8 py-3 text-lg font-semibold rounded-full shadow-md hover:opacity-90 transition ml-[17rem]"
      >
        GET STARTED 
      </button>
    </Link>
  );
};

export default LandingButton;
