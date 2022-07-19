import React from 'react'
import store from "../Images/store.png"
import footer from "../Images/footer.png"
import "../Styles/Footer.css"
function Footer() {
  return (
    <div>
        <img  className="store"src={store}></img>
          <img className="footer" src={footer}></img>
    </div>
  )
}

export default Footer