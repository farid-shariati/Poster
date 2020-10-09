import React, { useEffect, useState } from "react";
import PostNavbar from "../PostNavbar/PostNavbar";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// component
import Card from "./Card/Card";
import { fetchAllPosts } from "./PostActions";
import AddModal from "../modals/AddModal/AddModal";
import EditModal from "../modals/EditModal/EditModal";
import DeleteModal from "../modals/DeleteModal/DeleteModal";
//style
import "./Post.css";

const Post = (props) => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState({ item: {} });
  const [openDeleteModal, setOpenDeleteModal] = useState({});

  const handleOpenAddModal = () => {
    setOpenAddModal(true);
  };

  const handleCloseAddModal = () => {
    setOpenAddModal(false);
  };

  const handleOpenEditModal = (item) => {
    setOpenEditModal({ open: true, item });
  };

  const handleCloseEditModal = () => {
    setOpenEditModal({ open: false, item: {} });
  };

  const handleOpenDeleteModal = (id) => {
    setOpenDeleteModal({ open: true, id });
  };

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal({ open: false });
  };

  const onCardDelete = (id) => {
    handleOpenDeleteModal(id);
  };

  const onCardEdit = (item) => {
    handleOpenEditModal(item); // item = id, title, body
  };

  useEffect(() => {
    // fetch all the posts
    props.fetchAllPosts();
  }, []);

  const posts = props.fetch.posts;

  const renderPosts = () => {
    return posts.map((post) => {
      return (
        <div className="card-column" key={post._id}>
          <Card
            title={post.title}
            body={post.body}
            id={post._id}
            onDelete={onCardDelete}
            onEdit={onCardEdit}
          />
        </div>
      );
    });
  };

  return (
    <div className="main-post-div">
      <PostNavbar onAdd={handleOpenAddModal} />
      <AddModal open={openAddModal} onClose={handleCloseAddModal} />
      <EditModal
        open={openEditModal.open}
        onClose={handleCloseEditModal}
        item={openEditModal.item}
        onSuccess={() => props.fetchAllPosts()}
      />
      <DeleteModal
        open={openDeleteModal.open}
        onClose={handleCloseDeleteModal}
        id={openDeleteModal.id}
        onSuccess={() => props.fetchAllPosts()}
      />
      <div className="cards-div">
        {posts.length > 0 ? (
          renderPosts()
        ) : (
          <div className="no-posts">
            <h1>There is no posts in here :(</h1>
            <p>You can add more posts use button below</p>
            <button className="no-post-button" onClick={handleOpenAddModal}>
              Add Post
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fetch: state.fetch,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchAllPosts: fetchAllPosts,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
