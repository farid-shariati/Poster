import {
  LOGIN_REQUEST_LOADING,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAILURE,
} from "./LoginTypes";
import { toast } from "react-toastify";
import axios from "axios";

//history
import history from "../../helper/history";

export const loginRequestLoading = () => {
  return {
    type: LOGIN_REQUEST_LOADING,
  };
};

export const loginRequestSuccess = () => {
  return {
    type: LOGIN_REQUEST_SUCCESS,
  };
};

export const loginRequestFailure = (error) => {
  return {
    type: LOGIN_REQUEST_FAILURE,
    error: error,
  };
};

export const loginUser = (email, password, rememberMe, onSuccess, onError) => {
  // IMPORTANT:  we get remember me because we wanna use for response but we dong get confirm password because its about front
  return (dispatch) => {
    dispatch(loginRequestLoading());

    axios
      .post("url", { email, password })
      .then((response) => {
        dispatch(loginRequestSuccess());
        onSuccess(response);
        if (rememberMe) {
          localStorage.setItem("accessToken", response.data.accessToken);
          localStorage.setItem("refreshToken", response.data.refreshToken);
          sessionStorage.removeItem("accessToken");
          sessionStorage.removeItem("refreshToken");
        } else {
          sessionStorage.setItem("accessToken", response.data.accessToken);
          sessionStorage.setItem("refreshToken", response.data.refreshToken);
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
        }
        console.error(response);
      })
      .catch((error) => {
        onError(error);
        dispatch(loginRequestFailure(error));
      });
  };
};
