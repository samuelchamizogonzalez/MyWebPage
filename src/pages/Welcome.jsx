import React, {useEffect} from "react";
import './../assets/Styles/Welcome.scss';
import Linkedin_icon from "./../assets/Images/linkedin_icon.png"

function Welcome() {

  useEffect(() => {
    document.getElementById("name").style.opacity = "1";
 }, [])

  return (
    <div id="welcome">
      <div className="background"></div>  
      <div className="info">
        <h3>Hi !</h3>
        <h1 id="name" className="fade_in">I´m Samuel Chamizo González </h1>
        <h3>Software developer</h3>
        <div className="icons_container">
        <a href="https://www.linkedin.com/in/samuel-chamizo-gonz%C3%A1lez-04a844209/" target="_blank" rel="noreferrer"><img src={Linkedin_icon} alt="MDN"/></a>  
        </div>
      </div>
    </div>
  );
}

export default Welcome;
