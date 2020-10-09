import { EDIT_LOADING, EDIT_POST, EDIT_FAILURE } from "./PostTypes";

const initialState = {
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case EDIT_POST:
      return {
        ...state,
        loading: false,
      };
    case EDIT_FAILURE:
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
