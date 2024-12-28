import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from 'react';
import Root from './Root';
import Home from './components/Home';
import { ToastContainer } from 'react-toastify';
import { HelmetProvider } from 'react-helmet-async';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import AddCourse from './components/AddCourse/AddCourse';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register/>,
      },
      {
        path: '/addCourse',
        element: <AddCourse/>,
      },
    ],
  },
]);



createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
  <RouterProvider router={router} />
    </HelmetProvider>
  <ToastContainer/>
 </React.StrictMode>,
)
