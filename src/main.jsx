
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
    path: "Teachers",
    element: <Teachers/>,
  },
  {
    path: "Facilities",
    element: <Facilities/>,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
