import React from "react";
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function NavBar() { 
    return (

        <div className="navBar">
          <div className="links">
          <Link to="/"> 
          Home
          </Link>
          <Link to="/NewProduct"> 
           Clothes
          </Link>
          <Link to="/Contact"> 
           Contact
          </Link>
          <Link to="/AboutUs"> 
           AboutUs
          </Link>
          {/* <Link to="/"> 
           newProduct
          </Link> */}
          </div>
        </div>


//     <nav className="Nav">
//     <nav>
//    <ul>
//   <li className="active">Home</li>
//      <li>Product</li> 
//      <li>Contact</li>
//     <li>AboutUs</li>
// </ul>
//     </nav>
//       </nav>  
    )
}



