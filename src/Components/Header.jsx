import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="logo">
        <a href="mainpage.html">
          <img src="" alt="" />
        </a>
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
