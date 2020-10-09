import { DELETE_LOADING, DELETE_POST, DELETE_FAILURE } from "./PostTypes";

const initialState = {
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_LOADING:
      return { ...state, loading: true };
    case DELETE_POST:
      return { ...state, loading: false };
    case DELETE_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default reducer;
