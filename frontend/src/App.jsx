
import './App.css'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
//   import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import WorkSession from "./components/WorkSession"
import Gallery from "./components/Gallery"
import Pricing from "./components/Pricing"
import Contact from "./components/Contact"
import BMICalculator from "./components/BMICalculator"
import Footer from "./components/Footer"
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Login from "./auth/Login"
import SignUp from './auth/SignUp';



  function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Hero/> </>,
    },
    {
      path: "/contact",
      element:<><Navbar/><Contact/> </>,
    },
    {
      path: "/services",
      element: <><Navbar/><WorkSession/> </>,
    },
    {
      path: "/gallery",
      element: <><Navbar/><Gallery/> </>,
    },
    {
      path:"/login",
      element:<><Navbar/><Login/> </>,
      },
      {
        path:"/signup",
        element:<><Navbar/><SignUp/> </>,
        },
    {
      path: "/bmicalculator",
      element:<><Navbar/><BMICalculator/> </>,
    },
    {
      path: "/services",
      element:<><Navbar/><WorkSession/> </>,
    },
    {
      path: "/plans",
      element:   <><Navbar/><Pricing/> </>,
    },
  ]);
  return (
    <>
  <RouterProvider router={router} />
<Gallery/>
  <WorkSession/>
  <Pricing/>
  <BMICalculator/>
  <Footer/>
  <ToastContainer theme='dark' position='top-center'/>


    </>
  )
}

export default App
