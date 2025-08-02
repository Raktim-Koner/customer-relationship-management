import React from 'react'
import DocumentCard from './DocumentCard';


const DocumentParaOne = () => {
  return (
    <div>
        <DocumentCard>
          {/* write all text inside this*/ }
          <p className="text-gray-600">Help Documentation content.</p>
        </DocumentCard>
    </div>
  )
}

export default DocumentParaOne