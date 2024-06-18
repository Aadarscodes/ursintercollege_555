import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutUs from './Components/pages/aboutus.jsx';
import Teachers from './Components/pages/Teachers.jsx';
import Facilities from './Components/pages/Facilities.jsx';
import Admission from './Components/pages/Admission.jsx';
import Contact from './Components/pages/Contact.jsx';
import ManagerComponent from './Components/pages/ManagerComponent.jsx';
import MessagesComponent from './Components/pages/MessagesComponent.jsx';
import GalleryL from './Components/Gellery/gellery.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "aboutus",
    element: <AboutUs/>,
  },
  {
    path: "Admission",
    element: <Admission/>,
  },
  {
    path: "managing-committee",
    element: <ManagerComponent/>,
  },
  {
    path: "message",
    element: <MessagesComponent/>,
  },
  {
    path: "Contact",
    element: <Contact/>,
  },
  {
    path: "Teachers",
    element: <Teachers/>,
  },
  {
    path: "Facilities",
    element: <Facilities/>,
  },
  {
    path: "album",
    element: <GalleryL/>,
  },
  {
    path: "enquiry-button",
    element: <Contact/>,
    

    
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
