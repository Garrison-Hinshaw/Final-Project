import React from "react";
import { Link } from "react-router-dom";
import login from "./login";


export default function SiteTitle () {
return ( 
    <div className="Head">
      GDQ
      <div className="AAA">
        <h3>The easiest way to sell, buy, and trade products online </h3>
      </div>  
<button className="button-logo">
<div className="btn-logo">
  GDQ
  </div>
</button>
 <div className='login'>
 <Link to={'/login'}>
    <button class="login-btn">
    Login
    
    </button> 
  </Link>  
    {/* <Link to={}> */}
    <button class="reg-btn" >
    Register
    </button>
    {/* </Link> */}
    </div>

    </div>  
)
}
