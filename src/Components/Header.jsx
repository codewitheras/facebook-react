import React from "react";
import "./Header.css";
import {NavLink} from 'react-router-dom'

function Header() {
  
  return (
    <header>
      <div class="logo">
        <a href="mainpage.html">
          <img
            src=""
            alt=""
          />
        </a>
        <div class="search_wrapper">
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
