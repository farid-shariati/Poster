import { FETCH_LOADING, FETCH_POSTS, FETCH_FAILURE } from "./PostTypes";

const initialState = {
  loading: false,
  posts: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POSTS:
      return {
        loading: false,
        posts: action.posts,
        error: "",
      };
    case FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
