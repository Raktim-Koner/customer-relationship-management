import React from 'react';

const DocumentCard = ({ borderColor = 'border-blue-900', className="",  children }) => {
  return (
    <div className={` border-black border shadow-2xl rounded-lg h-[380px] flex flex-col overflow-y-auto i mt-2 px-1 ${className}`}>
      
      
      {children}
    </div>
  );
};

export default DocumentCard;
