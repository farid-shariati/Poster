import React, { Component, useState } from "react";
import AddModal from "../modals/AddModal/AddModal";
//history
import history from '../../helper/history'
// style
import "./PostNavbar.css";

const PostNavbar = ({onAdd}) => {

  const [openModal, setOpenModal] = useState(false);

  
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
      <div className="loginlink">
        <button className="add-post-button" onClick={onAdd}>Add Post</button>
      </div>
    </div>
  );
};

export default PostNavbar;
