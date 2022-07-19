import React from 'react'
import Essential from './Essential'
import Footer from './Footer'
import HoverImage from './HoverImage'
import ImagesSlider from './ImagesSlider'
import Navbar from './Navbar'
import Sellers from './Sellers'
import Trending from './Trending'
import Video from './Video'

function Combined() {
  return (
    <div>
             <Navbar/>
     <ImagesSlider/>
     <Essential/>
     <Video/>
        <Trending img1="https://www.fastrack.in/wps/wcm/connect/fastrack/3be2ce43-768f-4a12-83c6-b1a008759b6a/1X1.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-3be2ce43-768f-4a12-83c6-b1a008759b6a-nWy3Nko"
     img2="https://www.fastrack.in/wps/wcm/connect/fastrack/fa9b2a68-1f85-4f2a-8bcf-19202c2ea8ef/1080x1080_tunes.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-fa9b2a68-1f85-4f2a-8bcf-19202c2ea8ef-nZ1av9V"
     img3="https://www.fastrack.in/wps/wcm/connect/fastrack/e40d8727-afa2-4175-942f-7954d778dc4b/720x720_ftbags.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-e40d8727-afa2-4175-942f-7954d778dc4b-n.ewVSY"/>
     <Sellers/>
     <HoverImage/>
 
      <Trending img1="https://www.fastrack.in/wps/wcm/connect/fastrack/fa6e6aba-8cf6-47b2-aa0c-744955a1ec87/AllNighters.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-fa6e6aba-8cf6-47b2-aa0c-744955a1ec87-nvA7hNV"
     img2="https://www.fastrack.in/wps/wcm/connect/fastrack/87a1dfd7-d02c-4c30-a49c-e972ad195600/1000x1000.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-87a1dfd7-d02c-4c30-a49c-e972ad195600-n-MzHXh"
     img3="https://www.fastrack.in/wps/wcm/connect/fastrack/cdf686d2-1a27-4fb0-a8fc-a39f8d4ff446/Tees+Arcade.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-cdf686d2-1a27-4fb0-a8fc-a39f8d4ff446-np3p1lm"/>
      <Sellers/>
      <Footer/>
    </div>
  )
}

export default Combined