import React, { useState } from "react";
import Navbar  from "../layout/navbar/Navbar";
import './../assets/Styles/AboutMe.css'


var offsetStart = 0;
var offsetEnd = 0;

window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll', ( window.pageYOffset - offsetStart ) / ( document.body.offsetHeight - offsetStart - offsetEnd - window.innerHeight ));
}, false);

function AboutMe() {
  return (
    <div id="AboutMe">
      <h1>About Me Page</h1>

      <div class="progress"></div>

      <div class="cube-wrap">
        <div class="cube">
          <div class="side top"></div>
          <div class="side bottom"></div>
          <div class="side front"></div>
          <div class="side back"></div>
          <div class="side left"></div>
          <div class="side right"></div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
