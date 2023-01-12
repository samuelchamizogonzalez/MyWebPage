import React, { useState } from "react";
import './Navbar.css';

function Navbar() {
  return (
    <div className="body">
      <nav id="Navbar">
        <a href="/UserPage/">Usuarios</a> 
        <a href="/TaskPage/">Tareas</a>
      </nav>
    </div>
  );
}

export default Navbar;
