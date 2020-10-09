import axios from "axios";
import {
  FETCH_LOADING,
  FETCH_POSTS,
  FETCH_FAILURE,
  ADD_LOADING,
  ADD_POSTS,
  ADD_FAILURE,
  DELETE_LOADING,
  DELETE_POST,
  DELETE_FAILURE,
  EDIT_LOADING,
  EDIT_POST,
  EDIT_FAILURE,
  DETAIL_LOADING,
  DETAIL_POST,
  DETAIL_FAILURE,
} from "./PostTypes";
import { toast } from "react-toastify";

export const fetchLodaing = () => {
  return {
    type: FETCH_LOADING,
  };
};

export const fetchPosts = (posts) => {
  return {
    type: FETCH_POSTS,
    posts, // posts:posts
  };
};

export const fetchFailure = (error) => {
  return {
    type: FETCH_FAILURE,
    error: error,
  };
};

export const fetchAllPosts = () => {
  return (dispatch) => {
    dispatch(fetchLodaing());
    axios
      .get("url") // for add post we should add this {{title, body}, headers:{Authorization: `Bearer ${accessToken}`}}
      .then((response) => {
        dispatch(fetchPosts(response.data));
      })
      .catch((error) => {
        dispatch(fetchFailure(error));
      });
  };
};

// FOR ADDING

export const addLoading = () => {
  return {
    type: ADD_LOADING,
  };
};

export const addPosts = () => {
  return {
    type: ADD_POSTS,
  };
};

export const addFailure = (error) => {
  return {
    type: ADD_FAILURE,
    error, // error:error === error
  };
};

export const AddPost = (title, body, onSuccess) => {
  return (dispatch) => {
    dispatch(addLoading());

    const accessToken =
      localStorage.getItem("accessToken") ||
      sessionStorage.getItem("accessToken");
    axios
      .post(
        "url",
        { title, body },
        { headers: { Authorization: `Bearer ${accessToken}` } }
      )
      .then((response) => {
        dispatch(addPosts());
        toast.success("post added successfuly", {
          position: toast.POSITION.TOP_CENTER,
        });
        onSuccess(response);
        dispatch(fetchAllPosts());
      })
      .catch((error) => {
        dispatch(addFailure(error));
        toast.error(error.response.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };
};

// FOR DELETE

export const setDeleteLoading = () => {
  return {
    type: DELETE_LOADING,
  };
};

export const setDeletePost = () => {
  return {
    type: DELETE_POST,
  };
};

export const setDeleteFailure = (error) => {
  return {
    type: DELETE_FAILURE,
  };
};

export const deletePost = (id, onSuccess = () => {}) => {
  return (dispatch) => {
    dispatch(setDeleteLoading());

    const accessToken =
      localStorage.getItem("accessToken") ||
      sessionStorage.getItem("accessToken");

    axios
      .delete(`url/${id}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((response) => {
        dispatch(setDeletePost());

        onSuccess(response);
      })
      .catch((error) => {
        dispatch(setDeleteFailure(error));
      });
  };
};

// for edit

export const editLoading = () => {
  return {
    type: EDIT_LOADING,
  };
};

export const editPost = () => {
  return {
    type: EDIT_POST,
  };
};

export const editFailure = (error) => {
  return {
    type: EDIT_FAILURE,
    error, // error:error === error
  };
};

export const EditPost = (id, title, body, onSuccess = () => {}) => {
  const accessToken =
    localStorage.getItem("accessToken") ||
    sessionStorage.getItem("accessToken");

  return (dispatch) => {
    dispatch(editLoading());
    axios
      .put(
        `url/${id}`,
        { title, body },
        { headers: { Authorization: `Bearer ${accessToken}` } }
      )
      .then((response) => {
        dispatch(editPost());

        onSuccess(response);
      })
      .catch((error) => {
        dispatch(editFailure(error));
        toast.error(error.response.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };
};


// FOR DETAIL

export const detailLoading = () => {
  return {
    type: DETAIL_LOADING,
  };
};

export const detailPost = (post) => {
  return {
    type: DETAIL_POST,
    post, // posts:posts
  };
};

export const detailFailure = (error) => {
  return {
    type: DETAIL_FAILURE,
    error: error,
  };
};

export const postDetail = (id) => {
  return (dispatch) => {
    dispatch(detailLoading());
    axios
      .get(`url/${id}`)
      .then((response) => {
        dispatch(detailPost(response.data));
      })
      .catch((error) => {
        dispatch(detailFailure(error));
      });
  };
};