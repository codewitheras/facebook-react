import React from "react";
import "./Header.css";
import FbLogo from "../assets/facebook-logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={FbLogo} alt="" />
        </Link>
        <div className="search_wrapper">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search Facebook"
            required
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
