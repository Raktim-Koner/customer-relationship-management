import react from 'react';
import AccountsName from '../Components/AccountsPage/AccountsName';
import AccountsSearch from '../Components/AccountsPage/AccountsSearch';
import AccountsFilter from '../Components/AccountsPage/AccountsFilter';
import AccountsEntry from '../Components/AccountsPage/AccountsEntry';
import AccountsTable from '../Components/AccountsPage/AccountsTable';
const Accounts=()=>{
    return(
        <div>
            <AccountsName/>
            <div className='flex ml-4 mt-8'>
                <AccountsSearch/>
                <AccountsFilter/>
                <AccountsEntry/>
            </div>
            <AccountsTable/>
        </div>
    )
};
 export default Accounts;
