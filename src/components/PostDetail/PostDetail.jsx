import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//setyle
import "./PostDetail.css";
//components
import PostDetailNavbar from "../PostDetailNavbar/PostDetailNavbar";
import deleteIcon from "../../assets/icons/delete.svg";
import editIcon from "../../assets/icons/edit.svg";
import EditModal from "../modals/EditModal/EditModal";
import DeleteModal from "../modals/DeleteModal/DeleteModal";
//redux
import { postDetail } from "../Post/PostActions";

import history from "../../helper/history";

const PostDetail = (props) => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleOpenEditModal = () => {
    setOpenEditModal(true);
  };

  const handleCloseEditModal = () => {
    setOpenEditModal(false);
  };

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
  };

  const onDetailDelete = () => {
    handleOpenDeleteModal();
  };

  const onDetailEdit = () => {
    handleOpenEditModal(); // item = id, title, body
  };

  const fetchPost = () => {
    const id = props.match.params.id;
    props.postDetail(id);
  };

  useEffect(() => {
    // fetch all the posts
    fetchPost();
  }, []);

  const post = props.detail.post;
  return (
    <div className="post-detail-main">
      <PostDetailNavbar />
      <EditModal
        open={openEditModal}
        onClose={handleCloseEditModal}
        item={{ id: post._id, title: post.title, body: post.body }}
        onSuccess={() => fetchPost()}
      />
      <DeleteModal
        open={openDeleteModal}
        onClose={handleCloseDeleteModal}
        id={post._id}
        onSuccess={() => history.push("/posts")}
      />
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <div className="detail-icons">
        <div
          onClick={() => {
            onDetailEdit();
          }}
        >
          <img className="edit-icon" src={editIcon} alt="editIcon" />
        </div>
        <div
          onClick={() => {
            onDetailDelete();
          }}
        >
          <img className="delete-icon" src={deleteIcon} alt="deleteIcon" />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    detail: state.detail,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      postDetail,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
