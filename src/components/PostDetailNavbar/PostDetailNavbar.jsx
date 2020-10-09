import React, { Component, useState } from "react";
import { NavLink } from "react-router-dom";
//history
import history from '../../helper/history'
// style
import "./PostDetailNavbar.css";


const PostDetailNavbar = () => {

  
  const logOutHandler = () => {
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
    sessionStorage.removeItem("accessToken")
    sessionStorage.removeItem("refreshToken")
    history.push("/login")
  } 

  return (
    <div className="navbar">
      <div className="registerlink">
        <button className="logout-button" onClick={logOutHandler}>Logout</button>
      </div>
      <div className="my-line"></div>
      <div className="text-center">
        <h2>POSTER</h2>
      </div>
      <div className="my-line"></div>
      <div className="post-list-link-div">
        <NavLink className="post-list-link" to="/posts">Posts lists</NavLink>
      </div>
    </div>
  );
};

export default PostDetailNavbar;
