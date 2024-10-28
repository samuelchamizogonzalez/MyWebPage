import React, {useEffect} from "react";
import './../assets/Styles/Okey.scss'
import Instagram_icon from "./../assets/Images/Logo_insta_f1f1f1.png"
import Isotipo from "./../assets/Images/LOGO OKEY 11.png"

function Okey() {

  useEffect(() => {
    document.getElementById("name").style.opacity = "1";
 }, [])

  return (
    <div id="welcome">
      <div className="background"></div>  
      <div className="info">
        <div className="Isotipo">
          <img className="isotipo" src={Isotipo} alt="MDN"/>
        </div>
        <h1 id="name" className="fade_in">okeyeventos</h1>
        <h3>¿Bailamos?</h3>
      </div>
      <div className="icons_container">
        <div className="div_insta">
          <a href="https://www.instagram.com/okeyeventos/" target="_blank" rel="noreferrer"><img src={Instagram_icon} alt="MDN"/></a>  
        </div> 
      </div>
    </div>
  );
}

export default Okey;
