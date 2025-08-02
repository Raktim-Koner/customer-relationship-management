import React from 'react';
import DocumentCard from '../Components/DocumentPage/DocumentCard';
import DocumentHead from '../Components/DocumentPage/DocumentHead';
import DocumentHelpLogo from '../Components/DocumentPage/DocumentHelpLogo';
import DocumentPopularTopics from '../Components/DocumentPage/DocumentPopularTopics';
import DocumentParaOne from '../Components/DocumentPage/DocumentParaOne';
import DocumentParaTwo from '../Components/DocumentPage/DocumentParaTwo';
import DocumentParaThree from '../Components/DocumentPage/DocumentParaThree';

const Document = () => {
  return (
    <div className="p-4">
      {/* Top Section: 3 items in a row */}
      <div className="flex  mb-6">
        <DocumentHead />
        <DocumentHelpLogo />
        <DocumentPopularTopics />
      </div>

      {/* Bottom Section: 3 cards in a row */}
      <div className="grid grid-cols-3 gap-6 ">
        <DocumentParaOne />
        <DocumentParaTwo/>
        <DocumentParaThree />
      </div>
    </div>
  );
};

export default Document;

