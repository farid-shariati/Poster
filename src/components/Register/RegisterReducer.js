import {
    REGISTER_FAILURE,
    REGISTER_SUCCESS,
    REGISTER_LOADING,
  } from "./RegisterTypes";
  
  const initialState = {
    loading: false,
    error: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case REGISTER_LOADING:
        return { ...state, loading: true };
      case REGISTER_SUCCESS:
        return { ...state, loading: false };
      case REGISTER_FAILURE:
        return { ...state, loading: false, error: action.error };
      default:
        return state;
    }
  };
  
  export default reducer;
  