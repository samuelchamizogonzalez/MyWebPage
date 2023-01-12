import React, { useState } from "react";
import Navbar  from "../layout/navbar/Navbar";
import './../assets/Styles/Home.css'

var offsetStart = 0;
var offsetEnd = 0;

window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll', ( window.pageYOffset - offsetStart ) / ( document.body.offsetHeight - offsetStart - offsetEnd - window.innerHeight ));
}, false);

function Home() {
  return (
    <div id="Home">
      <div id="section1"><Navbar/></div>
      <div id="section2">
        <h1>Contenedor 1</h1>
      </div>
      <div id="section3">
        <h1>Contenedor 2</h1>
      </div>
    </div>
  );
}

export default Home;
