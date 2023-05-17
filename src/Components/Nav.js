import React, { useState } from "react";

import "../App.css";
function Nav() {
  const [color, setColor] = useState("white");
  
  const darkMode = (event) => {
   

    if (color === "white") {
      setColor("black");
      
    } else {
      setColor("white");
    }
 console.log(color);
  }
  return (
    <nav className="nav side--padding">
      <div className="nav__logo">
        <h1>
          Text <span className="nav__logo__text">Editor</span>
        </h1>
      </div>

      <div className="nav__darkmode__switch">
        <input
          type="checkbox"
          id="check"
          className="toggle"
          onChange={darkMode}
        />
        <label htmlFor="check">DarkMode</label>
      </div>
    </nav>
  );
}

export default Nav
