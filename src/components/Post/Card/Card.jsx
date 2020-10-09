import React, { useState } from "react";
import EditModal from "../../modals/EditModal";
import DeleteModal from "../../modals/DeleteModal/DeleteModal";
import { NavLink } from "react-router-dom";
//style
import "./Card.css";

//icons
import deleteIcon from "../../../assets/icons/delete.svg";
import editIcon from "../../../assets/icons/edit.svg";

const Card = ({ title, body, id, onEdit, onDelete }) => {
  return (
    <div className="main-card">
      <div className="card-first-row">
        <span>{title}</span>
        <span className="post-number">{id}</span>
      </div>
      <div className="card-second-row">{body}</div>
      <div className="third-row">
        <div className="third-row-line"></div>
        <div className="third-row-items">
          <div>
            <NavLink className="see-post-button" to={`posts/${id}`}>See Post</NavLink>
          </div>
          <div className="edit-delete-items">
            <div onClick={() => onEdit({id, title, body})}> 
            {/* id: id , title: title , body: body es6 feature */}
              <img className="edit-icon" src={editIcon} alt="editIcon" />
            </div>
            <div onClick={() => onDelete(id)}>
              <img className="delete-icon" src={deleteIcon} alt="deleteIcon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
