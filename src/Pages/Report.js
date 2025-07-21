import React from 'react';
import ReportName from '../Components/ReportPage/ReportName';
import ReportSearch from '../Components/ReportPage/ReportSearch';
import ReportEntry from '../Components/ReportPage/ReportEntry';
import ReportDone from '../Components/ReportPage/ReportDone';
import ReportFilter from '../Components/ReportPage/ReportFilter';
import ReportTable from '../Components/ReportPage/ReportTable';

const Report = ()=>{
    return(
        <div>
            <ReportName/>
            <div className='flex ml-4 mt-8'>
                <ReportSearch/>
                <ReportFilter/>
                <ReportEntry/>
            </div>
            <ReportTable/>
        </div>
    )

};
export default Report;