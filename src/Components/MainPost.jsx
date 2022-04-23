import React from "react";
import "./MainPost.css";
import { Link } from "react-router-dom";
import FbLogo from "../assets/facebook-logo.png";
import Post from "./Post";
// import Modal from "./Modal";

function MainPost() {
  const handleModalOpen = () => {};
  return (
    <>
      <div className="post__section">
        <div className="create__post_form">
          <form>
            <div className="form__hd">
              <Link to="/profile">
                <img src={FbLogo} alt="" />
              </Link>
              <button
                className="openModal"
                id="createPost"
                type="button"
                onClick={handleModalOpen}
              >
                What's on your mind, Erasmus?
              </button>
            </div>
            <div className="divider"></div>
            <div className="option__tags">
              <button type="button">
                <i className="fa fa-video"></i>Live video
              </button>
              <button type="button">
                <i className="fa fa-photo-video"></i>Photo/video
              </button>
              <button type="button">
                <i className="fa fa-laugh"></i>Feeling/Activity
              </button>
            </div>
          </form>
        </div>
        {/* <!-- Post Card --> */}
        <div class="post__container" id="showPost">
          <Post />
        </div>
      </div>
    </>
  );
}

export default MainPost;
