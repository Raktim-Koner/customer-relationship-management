import React from 'react';

const DocumentCard = ({ borderColor = 'border-blue-900',  children }) => {
  return (
    <div className={` border-black border shadow-2xl rounded-lg  ml-2  h-[380px] flex flex-col overflow-y-auto i mt-2 px-1`}>
      
      
      {children}
    </div>
  );
};

export default DocumentCard;
