import Carousel from 'react-bootstrap/Carousel'
import "../Styles/Essential.css";
import React from 'react'
import {Link } from "react-router-dom"
let imgs = [
"https://www.fastrack.in/wps/wcm/connect/fastrack/3156c817-5671-4edf-b846-126830b1152a/7.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-3156c817-5671-4edf-b846-126830b1152a-nU9Vu95",
"https://www.fastrack.in/wps/wcm/connect/fastrack/e158ebd3-893b-40c3-a139-ef745cdfc26b/4.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-e158ebd3-893b-40c3-a139-ef745cdfc26b-nU9.9Sx",
"https://www.fastrack.in/wps/wcm/connect/fastrack/efc2dbd8-3e9d-4803-8c44-72c52b215fbc/smartwatch.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-efc2dbd8-3e9d-4803-8c44-72c52b215fbc-o4jJ8DA",
"https://www.fastrack.in/wps/wcm/connect/fastrack/967e27d1-b298-4a82-9932-c9cfcf720af2/tees.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-967e27d1-b298-4a82-9932-c9cfcf720af2-nUa07AF",
"https://www.fastrack.in/wps/wcm/connect/fastrack/f2757815-3e89-4a93-8efc-f01220bcb8d3/TWE.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-f2757815-3e89-4a93-8efc-f01220bcb8d3-nZTyj7-",
"https://www.fastrack.in/wps/wcm/connect/fastrack/0d22aebb-e343-405b-b358-17c5bd768532/1.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-0d22aebb-e343-405b-b358-17c5bd768532-nU9VH6B",

"https://www.fastrack.in/wps/wcm/connect/fastrack/f2757815-3e89-4a93-8efc-f01220bcb8d3/TWE.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-f2757815-3e89-4a93-8efc-f01220bcb8d3-nZTyj7-",
"https://www.fastrack.in/wps/wcm/connect/fastrack/0d22aebb-e343-405b-b358-17c5bd768532/1.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-0d22aebb-e343-405b-b358-17c5bd768532-nU9VH6B",
"https://www.fastrack.in/wps/wcm/connect/fastrack/07166d76-040d-466e-b776-c30f2c87b29b/mask.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-07166d76-040d-466e-b776-c30f2c87b29b-nUa2m4g",
"https://www.fastrack.in/wps/wcm/connect/fastrack/91a951ef-1105-4347-9478-36a231a678e7/essential_sunglasses2.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-91a951ef-1105-4347-9478-36a231a678e7-n3xtZUa",
"https://www.fastrack.in/wps/wcm/connect/fastrack/68296f46-ed24-4b8f-9150-2618a812f38f/B0398LBR02.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-68296f46-ed24-4b8f-9150-2618a812f38f-n33nXPd",
"https://www.fastrack.in/wps/wcm/connect/fastrack/c9360da4-a0a1-4bbb-b659-c55db079e3ff/essential_wallet.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-c9360da4-a0a1-4bbb-b659-c55db079e3ff-n33o772",
];

function Essential() {
  return (
  
    <div>
        <Link to="/AllProducts">
        <h1 className="title">FASTRACK ESSENTIALS</h1>
 </Link>
  <Carousel variant="dark">
  <Carousel.Item>
    <Link to="/AllProducts">
    <div >
    <div className='images'>
    <img
      className="product_image"
      src={imgs[0]}
      alt="first slide"
    />
    
    <img
      className="product_image"
      src={imgs[1]}
      alt="first slide"
    />
   
    <img
      className="product_image"
      src={imgs[2]}
      alt="first slide"
    />
 
      <img
      className="product_image"
      src={imgs[3]}
      alt="first slide"
    />
  
      <img
      className="product_image"
      src={imgs[4]}
      alt="first slide"
    />
  
      <img
      className="product_image"
      src={imgs[5]}
      alt="first slide"
    />
    </div>
       
  <div className="products_name">
    <p className="products_title products_title1">GIRL WATCHES</p>  
    <p className="products_title">GUY WATCHES</p> 
    <p className="products_title">SMART WATCH</p> 
    <p className="products_title">TEES WATCH</p> 
    <p className="products_title">EARPHONES</p> 
    <p className="products_title">BAGS</p> 
    </div>
 
    </div>
  </Link>
</Carousel.Item>



 <Carousel.Item >
   <Link to="/AllProducts">
  <div>
    <div className='images'>
    <img
      className="product_image"
      src={imgs[6]}
      alt="first slide"
    />
    <img
      className="product_image"
      src={imgs[7]}
      alt="first slide"
    />
    <img
      className="product_image"
      src={imgs[8]}
      alt="first slide"
    />
      <img
      className="product_image"
      src={imgs[9]}
      alt="first slide"
    />
      <img
      className="product_image"
      src={imgs[10]}
      alt="first slide"
    />
      <img
      className="product_image"
      src={imgs[11]}
      alt="first slide"
    />
    
    </div>
  <div className="products_name ">
    <p className="products_title products_title1">EARPHONES</p>  
    <p className="products_title">BAGS</p> 
    <p className="products_title">FACEMASK</p> 
    <p className="products_title">PERFUMES</p> 
    <p className="products_title">BELTS</p> 
    <p className="products_title">WALLETS</p> 
    </div>
    </div>
    </Link>
</Carousel.Item>
</Carousel>



    </div>
  )
}

export default Essential




