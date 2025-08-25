import React from 'react';
import documentation from '../../Assets/documentation.png.png'
 // Assuming you have a Document.png in Assets
const DocumentLogo= () => {
    return(
        <div className="items-center mr-2 ">
            <img src={documentation} alt="Document Logo" className=" items-center h-16 w-14 ml-6" />
            
        </div>
    );
}
export default DocumentLogo;