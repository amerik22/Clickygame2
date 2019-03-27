import React from "react";
import "./style.css";

function Header() {
  return (
  <div className="header">
          <img src="./imgs/South_Park_sign_logo.png" alt="South Park Sign" ></img>
          <h1>OMG You Clicked Kenny!</h1>
          <h2>Click on an image to earn points, but don't click on any more than once!</h2>
</div>
  );
}

export default Header;