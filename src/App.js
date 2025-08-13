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
import Sidebar from "./Components/Universal-Components/Sidebar";
import Analytics from "./Subpages/Analytics";
import Chat from "./Subpages/Chat";
import Document from "./Subpages/Document";
import SubMainContainer from "./Components/Universal-Components/SubMainContainer";
import Landing from "./Pages/Landing";
import SingnIn from "./Pages/SingnIn";
import SignUp from "./Pages/SignUp";
import SignSubMainContainer from "./Components/Universal-Components/SignSubMainContainer";

const AppLayout = () => (
  <>
    <Navbar />
    <MainContainer />
  </>
);
const AppSubLayout = () => (
  <>
    <Navbar />
    <SubMainContainer/>
  </>
);

function App() {
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Landing/>,
    },
    {
      path:"/",
      element:<AppLayout/>,
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
    },
    {
      path:"/",
      element:<AppSubLayout/>,
      children:[
        {
          path:"/report/analytics",
          element: <Analytics/>
        },
        {
          path:"/services/chat",
          element: <Chat/>
        },
        {
          path:"/services/documents",
          element: <Document/>
        },
        
      ]
    },
    {
      path:"/",
      element:<SignSubMainContainer/>,
      children:[
        {
          path:"/signin",
          element: <SingnIn/>
        },
        {
          path:"/signup",
          element: <SignUp/>
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
