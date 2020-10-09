import { DETAIL_LOADING, DETAIL_POST, DETAIL_FAILURE } from "./PostTypes";

const initialState = {
  loading: false,
  post:{},
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DETAIL_LOADING:
      return {
        ...state,
        loading: true,
      };
    case DETAIL_POST:
      return {
        ...state,
        post: action.post,
        loading: false,
      };
    case DETAIL_FAILURE:
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