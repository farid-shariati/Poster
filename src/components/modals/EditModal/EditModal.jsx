import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toast } from "react-toastify";

// components
import Modal from "../Modal";
import { EditPost, fetchAllPosts } from "../../Post/PostActions";
//style
import "./EditModal.css";

const EditModal = ({
  open,
  onClose,
  editPost,
  fetchAllPosts,
  onSuccess = () => {},
  item = {},
  loading,
}) => {
  const handleEditPost = (values) => {
    editPost(item.id, values.title, values.body, (response) => {
      onSuccess(response);
      toast.success("post edited successfuly", {
        position: toast.POSITION.TOP_CENTER,
      });
      onClose();
    });
  };

  const handleValidate = (values) => {
    console.log(handleValidate);
    let errors = {};

    const { title, body } = values; // destructured

    if (title === "") {
      errors.title = "title cannot be empty";
    }

    if (body === "") {
      errors.body = "body cannot be empty";
    }

    return errors;
  };

  console.log(item);

  return (
    <Modal open={open} onClose={onClose} width={450} height={525}>
      <div className="main-edit-card-div">
        <Formik
          enableReinitialize // initial values just call one time . we use this for calling initial valu several times ! and showing values  in inputs
          initialValues={{
            title: item.title,
            body: item.body,
          }}
          validate={handleValidate}
          onSubmit={handleEditPost}
          validateOnBlur={false}
        >
          {({ errors, touched, resetForm, submitForm }) => {
            return (
              <Form>
                <div className="edit-modal-first-row">
                  <div className="my-edit-modal-line"></div>
                  <div className="first-row-text">
                    <h4>Edit Post</h4>
                  </div>
                  <div className="my-edit-modal-line"></div>
                </div>
                <div className="edit-modal-second-row">
                  <Field
                    className={
                      !!errors.title && !!touched.title
                        ? "text-input-edit-modal-title-error"
                        : "text-input-edit-modal-title"
                    }
                    type="text"
                    placeholder="Title"
                    name="title"
                  />
                  <div className="error-text-edit-modal">
                    {!!errors.title && !!touched.title && errors.title}
                  </div>
                </div>
                <div className="edit-modal-third-row">
                  <Field
                    className={
                      !!errors.body && !!touched.body
                        ? "text-input-edit-modal-description-error"
                        : "text-input-edit-modal-description"
                    }
                    as="textarea"
                    placeholder="Description"
                    name="body"
                  />
                  <div className="error-text-edit-modal">
                    {!!errors.body && !!touched.body && errors.body}
                  </div>
                </div>
                <div className="edit-modal-fourh-row">
                  <div className="my-edit-modal-second-line"></div>
                  <div className="edit-modal-buttons">
                    <button
                      type="reset"
                      className="cancel-button-edit-modal"
                      onClick={onClose}
                    >
                      Cancel
                    </button>
                    <button
                      className="editpost-button-edit-modal"
                      type="submit"
                    >
                      Edit Post
                    </button>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.edit.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      editPost: EditPost,
      fetchAllPosts,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(EditModal);
