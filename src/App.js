import React, { Children } from "react";
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import DashboardPage from "./Pages/DashboardPage";
import './App.css';
import Navbar from "./Components/Universal-Components/Navbar";
import MainContainer from "./Components/Universal-Components/MainContainer";
import Deal from "./Pages/Deal"
import Project from "./Pages/Project"
import Task from "./Pages/Task"
import Accounts from "./Pages/Accounts"
import Report from "./Pages/Report"
import Service from "./Pages/Service"
import InnerContainer from "./Components/Universal-Components/InnerContainer";


function App() {
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:(
      <>
      <Navbar/>
      <MainContainer/>
      </>
      ),
      children:[

        {
          path:"/dashboard",
          element: <DashboardPage/>
        },
        {
          path:"/deal",
          element: <Deal/>
        },
        {
          path:"/project",
          element: <Project/>
        },
        {
          path:"/task",
          element:<Task/>
        },
        {
          path:"/accounts",
          element:<Accounts/>
        },
        {
          path:"/report",
          element:<Report/>
        },
        {
          path:"/services",
          element:<Service/>
        },
      ]
    }
  ]);
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
    
  );
}

export default App;
