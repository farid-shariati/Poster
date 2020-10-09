import { combineReducers } from "redux";
import RegisterReducer from "../components/Register/RegisterReducer";
import LoginReducer from "../components/Login/LoginReducer";
import FetchPostReducer from "./Post/FetchPostReducer";
import AddPostReducer from "./Post/AddPostReducer";
import DeletePostReducer from './Post/DeletePostReducer';
import EditPostReducer from './Post/EditPostReducer';
import DetailPostReducer from './Post/DetailPostReducer';

const rootReducer = combineReducers({
  register: RegisterReducer,
  login: LoginReducer,
  fetch: FetchPostReducer,
  add: AddPostReducer,
  delete: DeletePostReducer,
  edit: EditPostReducer,
  detail: DetailPostReducer,
});

export default rootReducer;
