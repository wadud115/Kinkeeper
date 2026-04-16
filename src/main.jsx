import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'



import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Mainlayout from './component/Layout/Mainlayout';
import Homepage from './component/pages/Homepage/Homepage';
import Timeline from './component/pages/Timeline/Timeline';
import Status from './component/pages/Status/Status';

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
        path:"/Status",
        Component:Status
      }
      


     

    ]
    
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
