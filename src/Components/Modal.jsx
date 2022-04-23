import React from "react";
import "./Modal.css";

function Modal() {
  return (
    <>
      <div className="modal" id="modal">
        <div className="modal__post_form">
          <div className="modal__post_hd">
            <div className="hidden"></div>
            <h3>Create post</h3>
            <button id="closePostModal">X</button>
          </div>
          <div className="divider"></div>
          <div className="post__user_info">
            <a href="mainpage.html">
              <img src="./assets/facebook-logo.png" alt="" />
            </a>
            <a href="profile.html">Erasmus Mensah</a>
          </div>
          <form id="postForm">
            <textarea
              name="post_content"
              id="postBox"
              cols="65 "
              rows="10"
              autofocus
              required
            ></textarea>
            <div className="post">
              <button type="submit" id="postBtn">
                <p>Post</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Modal;
