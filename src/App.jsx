// packages
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Router } from "react-router-dom";
import { Provider } from "react-redux";
// history
import history from "./helper/history";
//style
import "./App.css";
//pages
import Register from "./components/Register/RegisterContainer";
import Login from "./components/Login/LoginContainer";
//components
import Post from './components/Post/Post'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import PostDetail from './components/PostDetail/PostDetail';
//store
import store from "./components/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router history={history}>
        <div>         
          <Route exact path="/register" component={Register} />
          <Route path="(/|/login)" component={Login} />
          <PrivateRoute exact path="/posts" component={Post} />
          <PrivateRoute exact path="/posts/:id" component={PostDetail} />
        </div>
      </Router>
      <ToastContainer autoClose={4000} />
      </Provider>
    </div>
  );
}

export default App;
