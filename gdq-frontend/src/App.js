import "./style.css";
import 'bootstrap';
import React from "react";
import  Home  from "../src/pages/Home";
import NewProduct  from "./pages/NewProduct";
import  Contact  from "./pages/Contact";
import  AboutUs  from "./pages/AboutUs";
// import { login } from "./components/login";
import NavBar from "./components/navBar";
import SiteTitle from "./components/SiteTitle";
// import { createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Product from "../src/pages/Productt";
import  PRODUCTS  from "./pages/Product";
import { EditPro } from "./pages/EditPro";

import "bootstrap/dist/css/bootstrap.min.css"

import loginPage from "./components/login";
import Auth from "./components/login"

export default function App() {

  return (
    <>
      <div className="App">
        <Router> 
        <SiteTitle />
       <login/>
        <NavBar />
       <br/>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/newProduct" element={<NewProduct/>} />
            <Route path="/aboutUs" element={<AboutUs/>} />
            <Route path="/login" element={<Auth />} />
            <Route path="/loginPage" element={<loginPage />} />
          </Routes>
        </Router>
        {/* <RouterProvider router={router} /> */}
      </div>

      
      
    </>
  );
}
//  const Root = () => {

//   return <>
//     <div className="Nav">
//     <ul>
//     <li>  <Link to="/"> Home </Link> </li>
//      <li> <Link to="/newProduct"> Product </Link></li>
//      <li> <Link to="/aboutUs"> AboutUs </Link></li>
//      <li> <Link to="/contact"> Contact </Link></li>
//      {/* <li> <Link to="/newProduct"> Product </Link></li> */}

// </ul>
//   </div>

//   <div>
//     <Outlet/>
//   </div>
//   </>

//   }
