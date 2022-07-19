import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
let imgs = [
 "https://www.fastrack.in/wps/wcm/connect/fastrack/52aed9e3-d620-49bb-8b8e-5fb80726e9dd/desktop/1920X600.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-52aed9e3-d620-49bb-8b8e-5fb80726e9dd-desktop-o3-koO5&impolicy=pqlow",
 "https://www.fastrack.in/wps/wcm/connect/fastrack/532d3d01-1405-4e0e-9194-571116e1b202/desktop/1920X600.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-532d3d01-1405-4e0e-9194-571116e1b202-desktop-o1RG1-8&impolicy=pqlow",
 "https://www.fastrack.in/wps/wcm/connect/fastrack/026b029b-a062-4e3b-b245-7f6b718bc368/desktop/banner_Desktop.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-026b029b-a062-4e3b-b245-7f6b718bc368-desktop-o1wfKJy&impolicy=pqlow",
 "https://www.fastrack.in/wps/wcm/connect/fastrack/93bc619d-5f75-4f3f-b3f2-175676b0c27c/desktop/1920x600.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-93bc619d-5f75-4f3f-b3f2-175676b0c27c-desktop-nZ0GpjO&impolicy=pqlow",
 "https://www.fastrack.in/wps/wcm/connect/fastrack/87dd3813-f189-408d-a8c2-d2efed89ec2e/desktop/1920x600.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-87dd3813-f189-408d-a8c2-d2efed89ec2e-desktop-nYI4n-.&impolicy=pqlow",
 "https://www.fastrack.in/wps/wcm/connect/fastrack/ad7bf060-f0a4-4542-bfb3-34fda82b4249/desktop/1920x600.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-ad7bf060-f0a4-4542-bfb3-34fda82b4249-desktop-n.PzChT&impolicy=pqlow"
];
function ImagesSlider() {
  return (
<Carousel fade>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={imgs[0]}
      alt="first slide"
    />
</Carousel.Item>

<Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={imgs[1]}
      alt="second slide"
    />
</Carousel.Item>

<Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={imgs[2]}
      alt="third slide"
/>
</Carousel.Item>

<Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={imgs[3]}
      alt="fourth slide"
/>
</Carousel.Item>

<Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={imgs[4]}
      alt="fifth slide"
/>
</Carousel.Item>

<Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={imgs[5]}
      alt="sixth slide"
/>
</Carousel.Item>
</Carousel>

  )
}

export default ImagesSlider


