import {
  LOGIN_REQUEST_LOADING,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAILURE,
} from "./LoginTypes";

const initialState = {
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case LOGIN_REQUEST_FAILURE:
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
