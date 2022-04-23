import React from "react";
import "./Post.css";
import FbLogo from "../assets/facebook-logo.png";
import { Link } from "react-router-dom";

function Post() {
  return (
    <>
      <div className="post__card">
        <div className="user__avatar">
          <Link to="/profile">
            <img src={FbLogo} alt="" />
          </Link>
          <div className="user_profile">
            <Link to="/profile">Username</Link>
            <small>Thurs April, 18 2022</small>
          </div>
        </div>
        <div className="post__content">
          <p>sldkfkhskjhkjfhsdkjfhdlskjhfjhslklj</p>
        </div>
        <div className="action__btns">
          <button id="likeBtn">
            <i className="fas fa-thumbs-up" id="icon"></i>
            <span id="likeCounter"></span>Like
          </button>
          <button id="commentBtn">
            <i className="fas fa-comment"></i>
            <span id="commentCounter"></span>Comment
          </button>
          <button id="shareBtn">
            <i className="fas fa-share"></i>
            <span id="shareCounter"></span>Share
          </button>
        </div>
        <div className="comment__section show">
          <div className="comment__box">
            <form id="commentBox">
              <div className="user">
                <a href="profile.html">
                  <img src="/assets/facebook-logo.png" alt="" loading="lazy" />
                </a>
                <input
                  type="text"
                  name="comment"
                  id="commentBox"
                  placeholder="Write a comment here.."
                  required
                  autofocus
                  title="Please add a comment to post"
                  aria-multiline="true"
                />
                <button type="submit" id="submitCommentBtn">
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
