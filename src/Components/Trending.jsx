import React from 'react'
import "../Styles/Trending.css"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
function Trending(props) {
  return (
    <div>
       <Link to="/AllProducts">
        <h1 className="title">TRENDING</h1>
         <div>
            <div className="color1">
       
            </div>
            <div className="trending_image_div">
            <img src={props.img1} className="trending_image"></img>
            <img src={props.img2} className="trending_image"></img>
            <img src={props.img3} className="trending_image"></img>
            </div>
            <div className="color2">

            </div>
         </div>
          </Link>  
    </div>
   
  )
}

export default Trending
