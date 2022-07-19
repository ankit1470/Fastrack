import React from 'react'
import "../Styles/HoverImage.css"
function HoverImage(props) {
  return (
    <div>
      <div className="main">
        <div className="first">
        <div className="color_div ">
            <div className="text_div">
            <h1 className="text">Get yourself a watch that reflects your style! Introducing Fastrack Reflex Vox! Now available </h1>
            </div>
        </div>
        <img className="first_image" src="https://www.fastrack.in/wps/wcm/connect/fastrack/abf94aff-6638-4d2b-9d93-fd5e1ab47d23/800x488.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-abf94aff-6638-4d2b-9d93-fd5e1ab47d23-nXzdHEo"></img>
        </div>

         <div className="second">
        <img className="second_image" src="https://www.fastrack.in/wps/wcm/connect/fastrack/edf26fdb-502e-4253-8a74-67fe6f5e29d1/Youdoyou.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-edf26fdb-502e-4253-8a74-67fe6f5e29d1-nXzdHEo"></img>
      <div className="text2_div">
        <h2 className="text2" >You do you and come as you are! Dive into the world of limitless style and expression with Fastrack.</h2>
        </div>
        </div>

      </div>
    </div>
  )
}

export default HoverImage
