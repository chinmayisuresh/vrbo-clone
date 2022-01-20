import React from 'react'
import"./NavBar.css"
import logo from "./Images/logo.svg";

export default function NavBar() {
   const uncheck = ()=>{
       document.getElementById("checker").checked = false
     
   }
    return (
        <nav className='container'>
           <div className="logo">
               <img src={logo} alt="" />
           </div>
           <input type="checkbox" name="" id="checker" />
           <label htmlFor="checker">
           <i className="fas fa-bars"></i>
           </label>
           <ul className='navul'>
               <li onClick={uncheck}> <i class="far fa-address-card"></i> <a href="#"> Trip Boards </a></li>
               <li onClick={uncheck}> <i class="far fa-address-card"></i> <a href="#"> Log in </a></li>
               <li onClick={uncheck}> <i class="fas fa-sitemap"></i> <a href="#"> Sign up </a></li>
               <li onClick={uncheck}> <i class="fas fa-laptop"></i> <a href="#"> Help </a></li>
               <li onClick={uncheck}> <i class="fas fa-laptop"></i> <a href="#"> USD </a></li>
               <li onClick={uncheck}> <i class="fas fa-laptop"></i> <a href="#"> EN </a></li>
               <li onClick={uncheck}>  <a href="#"> <button>List Your Property</button></a></li>
          
           </ul>
        </nav>
    )
}
