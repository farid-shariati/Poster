import React, { useState, Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loginUser } from "./LoginActions";
import { NavLink } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import Navbar from '../Navbar/Navbar'
//tostify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//history
import history from "../../helper/history";
//style
import "./Login.css";

const LoginContainer = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // formik
  const handleValidate = (values) => {
    let errors = {};

    const { email, password } = values; // destructured

    if (!email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)) {
      errors.email = "enter valid email type";
    }

    if (password == "") {
      errors.password = "password can not be empty";
    }

    return errors;
  };

  const handleCheckBox = (e) => {
    const value = e.target.value;
    setRememberMe(value);
  };

  const handleLogin = ({ email, password }) => {
    props.loginUser(
      email,
      password,
      rememberMe,
      () => {
        history.push('/posts')
        toast.success("welcome", {position: toast.POSITION.TOP_CENTER});
      },
      (error) => {
        toast.error(error.response.data.message, {position: toast.POSITION.TOP_CENTER});
      }
    );
  };

  return (
    <div className="main-div">
      <Navbar />
      <h2>Login</h2>
      <div className="form-div">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validate={handleValidate}
          onSubmit={handleLogin}
        >
          {({ errors, touched }) => {
            return (
              <Form>
                <div className="field-div">
                  <Field
                    className={
                      !!errors.email && !!touched.email
                        ? "login-input-error"
                        : "login-input"
                    }
                    name="email"
                    placeholder="email"
                  />
                  <span className="error-span">
                    {!!errors.email && !!touched.email && errors.email}
                  </span>
                </div>
                <div className="field-div">
                  <Field
                    className={
                      !!errors.password && !!touched.password
                        ? "login-input-error"
                        : "login-input"
                    }
                    name="password"
                    type="password"
                    placeholder="Enter Password"
                  />
                  <span className="error-span">
                    {!!errors.password && !!touched.password && errors.password}
                  </span>
                </div>
                <div className="remember-and-login">
                  <label>
                    <input
                      className="my-check"
                      type="checkbox"
                      onChange={handleCheckBox}
                    />
                    remember me
                  </label>
                  <button className="login-button" type="submit">Login</button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
      <p>
        dont have an account ? <NavLink to="/register">Register</NavLink>
      </p>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      loginUser: loginUser,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(LoginContainer);
