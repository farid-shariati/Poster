import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// components
import Modal from "../Modal";
import { AddPost } from "../../Post/PostActions";
//style
import "./AddModal.css";

const AddModal = ({ open, onClose, addPost, loading }) => {
  const handleValidate = (values) => {
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

  const handleAddPost = ({ title, body }, { resetForm }) => {
    addPost(title, body, () => {
      resetForm();
      onClose();
    });
  };

  return (
    <Modal open={open} onClose={onClose} width={450} height={525}>
      <div className="main-add-card-div">
        <Formik
          initialValues={{
            title: "",
            body: "",
          }}
          validate={handleValidate}
          onSubmit={handleAddPost}
          validateOnBlur={false}
        >
          {({ errors, touched, resetForm, submitForm }) => {
            return (
              <Form>
                <div className="add-modal-first-row">
                  <div className="my-add-modal-line"></div>
                  <div className="first-row-text">
                    <h4>Add Post</h4>
                  </div>
                  <div className="my-add-modal-line"></div>
                </div>
                <div className="add-modal-second-row">
                  <Field
                    className={
                      !!errors.title && !!touched.title
                        ? "text-input-add-modal-title-error"
                        : "text-input-add-modal-title"
                    }
                    type="text"
                    placeholder="Title"
                    name="title"
                  />
                  <div className="error-text-add-modal">
                    {!!errors.title && !!touched.title && errors.title}
                  </div>
                </div>
                <div className="add-modal-third-row">
                  <Field
                    className={
                      !!errors.body && !!touched.body
                        ? "text-input-add-modal-description-error"
                        : "text-input-add-modal-description"
                    }
                    as="textarea"
                    placeholder="Description"
                    name="body"
                  />
                  <div className="error-text-add-modal">
                    {!!errors.body && !!touched.body && errors.body}
                  </div>
                </div>
                <div className="add-modal-fourh-row">
                  <div className="my-add-modal-second-line"></div>
                  <div className="add-modal-buttons">
                    <button
                      type="reset"
                      className="cancel-button-add-modal"
                      onClick={onClose}
                    >
                      Cancel
                    </button>
                    <button className="addpost-button-add-modal" type="submit">
                      Add Post
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
    loading: state.add.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addPost: AddPost,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddModal);
