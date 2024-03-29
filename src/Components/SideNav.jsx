import React from "react";
import "./SideNav.css";
import { Link } from "react-router-dom";

// Component Imports

function SideNav() {
  return (
    <div class="sidebar">
      <div class="sidebar__links">
        <Link to="/profile">
          <h4>
            <i class="fas fa-user-circle"></i>
            Erasmus
          </h4>
        </Link>
        <Link to="/find_friends">
          <h4>
            <i class="fas fa-user-friends"></i>
            Find friends
          </h4>
        </Link>
        <Link to="/groups">
          <h4>
            <i class="fas fa-users"></i>
            Groups
          </h4>
        </Link>
        <Link to="/watch">
          <h4>
            <i class="fas fa-video"></i>
            Watch
          </h4>
        </Link>
        <Link to="/memories">
          <h4>
            <i class="fas fa-user-alt"></i>
            Memories
          </h4>
        </Link>
        <Link to="/saved">
          <h4>
            <i class="fas fa-bookmark"></i>
            Saved
          </h4>
        </Link>
        <Link to="/pages">
          <h4>
            <i class="fas fa-pager"></i>
            Pages
          </h4>
        </Link>
        <Link to="/events">
          <h4>
            <i class="fas fa-church"></i>
            Events
          </h4>
        </Link>
        <Link to="/recents">
          <h4>
            <i class="fas fa-history"></i>
            Most recent
          </h4>
        </Link>
        <Link to="/favourites">
          <h4>
            <i class="fas fa-thumbs-up"></i>
            Favourites
          </h4>
        </Link>
      </div>
      <footer></footer>
    </div>
  );
}

export default SideNav;
