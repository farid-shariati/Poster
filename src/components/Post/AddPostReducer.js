import { ADD_LOADING, ADD_POSTS, ADD_FAILURE } from "./PostTypes";

const initialState = {
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ADD_POSTS:
      return {
        ...state,
        loading: false,
      };
    case ADD_FAILURE:
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
