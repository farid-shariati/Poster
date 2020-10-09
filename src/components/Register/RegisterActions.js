import {REGISTER_FAILURE, REGISTER_SUCCESS, REGISTER_LOADING} from './RegisterTypes';
import axios from 'axios';
import { toast } from 'react-toastify';

// history
import history from '../../helper/history';

export const registerLoading = () => {
  return{
    type : REGISTER_LOADING
  }
}

export const registerSuccess = () => {
  return {
    type :REGISTER_SUCCESS
  }
}

export const registerFailure = (error) => {
  return{
    type: REGISTER_FAILURE,
    error:error
  }
}

export const registerUser = (fullName, email, password) => {       // registerUser = action creator
    return (dispatch) => {
      dispatch(registerLoading())

      axios
      .post("url", {fullName, email, password})
      .then((response) => {
        dispatch(registerSuccess())
        toast.success("successful register", {position: toast.POSITION.TOP_CENTER})
        history.push("/login")
      })
      .catch((error) => {
        dispatch(registerFailure(error))
        toast.error(error.response.data.message, {position: toast.POSITION.TOP_CENTER})
      })
    }
}