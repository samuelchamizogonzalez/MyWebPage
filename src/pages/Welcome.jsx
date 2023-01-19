import React, {useEffect} from "react";
import './../assets/Styles/Welcome.scss'
import Github_icon from "./../assets/Images/github_icon.png"
import Linkedin_icon from "./../assets/Images/linkedin_icon.png"
import { wait } from "@testing-library/user-event/dist/utils";

function Welcome() {

  useEffect(() => {
    document.getElementById("name").style.opacity = "1";
 }, [])

  return (
    <div id="Welcome">
      <div className="background"></div>  
      <div className="info">
        <h3>Hi !</h3>
        <h1 id="name" className="fade_in">I´m Samuel Chamizo </h1>
        <h3>Software developer</h3>

        <div className="icons_container">
          <a href="https://github.com/samuelchamizogonzalez" target="_blank"><img src={Github_icon} alt="MDN"/></a>  
          <a href="https://www.linkedin.com/in/samuel-chamizo-gonz%C3%A1lez-04a844209/" target="_blank"><img src={Linkedin_icon} alt="MDN"/></a>  
        </div>

        <a href='/TaskManager'>Entrar</a>
      </div>
    </div>
  );
}

export default Welcome;
