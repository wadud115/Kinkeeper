import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'



import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";


import Timeline from './Pages/Timeline/Timeline';
import Status from './Pages/Status/Status';
import Mainlayout from './Layout/Mainlayout';
import Homepage from './Pages/Homepage/Homepage';
import Frienddetails from './Pages/FriendsDetails/Frienddetails';
import TimelineProvider from './context/TimelineContext';
import PieChartPage from './Pages/Analytics/PieChartPage';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

// import Frendprovider from './context/frendprovider';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [

      {
        index:true,
        Component: Homepage
      }
      ,
      {
        path: "/Timeline",
        Component: Timeline
      },
      {
        path: "/Status",
        Component: Status
      }

      ,
      {
        path: "/friendDetails/:id",
        Component:Frienddetails ,
        loader: () => fetch("/data.json")

      },

      {
  path: "/analytics",
  element: <PieChartPage />,
}

    
      


     

    ],

    errorElement:<Error></Error>
    
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
  <TimelineProvider>


      <RouterProvider router={router} />
      , 
      <ToastContainer></ToastContainer>
      
      
      </TimelineProvider>
    
   
    
  </StrictMode>,
)
