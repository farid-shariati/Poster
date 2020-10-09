import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// components
import Modal from "../Modal";
import { deletePost, fetchAllPosts } from "../../Post/PostActions";
//tostify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//style
import "./DeleteModal.css";

const DeleteModal = ({
  open,
  onClose,
  deletePost,
  fetchAllPosts,
  onSuccess = () => {},
  loading,
  id,
}) => {
  const deletePostHandler = (id) => {
    deletePost(id, (response) => {
      onSuccess(response);
      toast.success("post deleted successfuly", {
        position: toast.POSITION.TOP_CENTER,
      });
      onClose();
    });
  };

  return (
    <Modal open={open} onClose={onClose} width={450} height={220}>
      <div className="main-delete-card-div">
        <div className="delete-modal-first-row">
          <div className="my-delete-modal-line"></div>
          <div className="first-row-text">
            <h4>Delete Post</h4>
          </div>
          <div className="my-delete-modal-line"></div>
        </div>
        <div className="delete-modal-second-row">
          <p>Are you sure you want to delete this post ?</p>
        </div>
        <div className="delete-modal-third-row">
          <div className="my-delete-modal-second-line"></div>
          <div className="delete-modal-buttons">
            <button className="cancel-button-delete-modal" onClick={onClose}>
              Cancel
            </button>
            <button
              className="deletepost-button-delete-modal"
              onClick={() => deletePostHandler(id)}
            >
              {" "}
              Yes
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.delete.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      deletePost,
      fetchAllPosts,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteModal);
