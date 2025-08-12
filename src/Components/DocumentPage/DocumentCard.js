import React from 'react';

const DocumentCard = ({ borderColor = 'border-blue-900',  children }) => {
  return (
    <div className={` border-black border-2 shadow-2xl rounded-lg  ml-2  h-[380px] flex flex-col overflow-y-auto i mt-2 px-1 bg-slate-50 font-serif`}>
      
      
      {children}
    </div>
  );
};

export default DocumentCard;
