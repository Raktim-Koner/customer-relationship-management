
import React, { useState } from 'react';
import AccountsName from '../Components/AccountsPage/AccountsName';
import AccountsSearch from '../Components/AccountsPage/AccountsSearch';
import AccountsFilter from '../Components/AccountsPage/AccountsFilter';
import AccountsTable from '../Components/AccountsPage/AccountsTable';
import AccountsForm from '../Components/AccountsPage/AccountsForm';
const Accounts=()=>{
    const [isModelFlag,setIsModelFlag]=useState(false);

    const handleAddProject=(formData)=>{
        console.log("New Account Data: ",formData);
        setIsModelFlag(false);
    };
    const handleFormClose = () =>{
        setIsModelFlag(false);
    };
    return(
        <div>
            <AccountsName/>
            <div className='flex ml-4 mt-8'>
                <AccountsSearch/>
                <AccountsFilter/>
            <button className="w-32 px-4 py-2 ml-3 bg-blue-950 text-white rounded-xl  font-sans font-bold         items-center "//chnaged the button color and design
            onClick={() => setIsModelFlag(true)}>
                + New Entry
            </button>
      </div>

      {isModelFlag && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50">
        <AccountsForm onSubmit={handleAddProject} onClose={handleFormClose} />
        </div>
    )}
                
            <AccountsTable/>
        </div>
    );
};
 export default Accounts;
