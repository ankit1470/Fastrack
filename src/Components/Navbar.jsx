import React from 'react'
import "../Styles/Navbar.css"
import fastrack from '../Images/fastrack.png'
import CartCounter from './CartCounter'
import {Box} from "@chakra-ui/react"
import {Link } from "react-router-dom"
function Navbar() {
  // {  // NavBar Sticky
  //   window.onscroll = function() {myFunction()};
  
  //   var navlist = document.getElementById("nav");
  //   var sticky = navlist.offsetTop;
  // console.log(navlist);
  //   /* Function to stick the nav bar */
  //   function myFunction() {
  //     console.log(1);
  //     if (window.pageYOffset >= sticky) {
  //       navlist.classList.add("sticky")
  //       console.log(navlist.classList);
  //     }
  //     else {
  //       navlist.classList.remove("sticky");
  //     }
  //   }}
  return (
    <div>
    
         {/* <hr className="divider"></hr> */}
      <div className="navbar-top " id="nav">
        <ul className="top-left nav-ul">
            <li className="nav-li brands-li">BRANDS</li>
            <li className="nav-li">CURRENCY SELECTOR</li>
        </ul>
        <ul className="top-right nav-ul">
            <li className="nav-li">LOGIN</li>
            <li className="nav-li">WHISHLIST</li>
            <li className="nav-li">BOOK MY APPOINTMENT</li>
            <Link to="/cart">
            
            <li className="nav-li car">CART <CartCounter/></li>
            
            </Link>
        </ul>
      </div>
       <hr className="divider"></hr>
<Link to="/">
       <div className="main-navbar">
         <ul className="main-ul main-left">
            <li className="main-li ">WATCHES</li>
            <li className="main-li">SMART & AUDIO</li>
            <li className="main-li">EYEWEAR</li>
         </ul>
        <img className="fastrack-logo" src={fastrack}></img>
           <ul className="main-ul main-right">
            <li className="main-li">BAGS & MORE</li>
            <li className="main-li">PERFUMES</li>
            <li className="main-li">OFFERS AND MORE</li>
         </ul>
       </div>
       </Link>
    </div>
    
  )
}

export default Navbar
