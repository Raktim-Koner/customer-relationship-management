import React from 'react';
import DocumentHead from '../Components/DocumentPage/DocumentHead';
import DocumentHelpLogo from '../Components/DocumentPage/DocumentHelpLogo';
import DocumentPopularTopics from '../Components/DocumentPage/DocumentPopularTopics';
import DocumentParaOne from '../Components/DocumentPage/DocumentParaOne';
import DocumentParaTwo from '../Components/DocumentPage/DocumentParaTwo';
import DocumentParaThree from '../Components/DocumentPage/DocumentParaThree';

const Document = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-7 px-[3rem]">
        <DocumentHead />
        <DocumentHelpLogo />
        <DocumentPopularTopics />
      </div>
      <div className="grid grid-cols-3 gap-6">
        <DocumentParaOne />
        <DocumentParaTwo />
        <DocumentParaThree />
      </div>
    </div>
  );
};

export default Document;
