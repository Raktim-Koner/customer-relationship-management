import React from "react";
import Navbar from "../Components/Universal-Components/Navbar";
import MainContainer from "../Components/Universal-Components/MainContainer";
import LineGraph from "../Components/DashboardPage/LineGraph";
import BarGraph from "../Components/DashboardPage/BarGraph";
import PieChart from "../Components/DashboardPage/PieChart";
import RecentInfo from "../Components/DashboardPage/RecentInfo";
import Rating from "../Components/DashboardPage/Rating";
import TotalProject from "../Components/DashboardPage/TotalProject";
import TotalAmount from "../Components/DashboardPage/TotalAmount";
import TotalTask from "../Components/DashboardPage/TotalTask";
const DashboardPage = () => {
  return (
    <div>
      <div className="flex mt-8 ">
        <Rating/>
        <TotalProject/>
        <TotalAmount/>
        <TotalTask/>
      </div>
  <div className='flex mt-12'>
    <LineGraph/>
    <BarGraph/>
  </div>
  <div className="flex mt-10">
    <PieChart/>
    <RecentInfo/>
  </div>
  </div>
  )
};

export default DashboardPage;

