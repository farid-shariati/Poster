import React, { useState, Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { registerUser } from "./RegisterActions";
import { NavLink } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import Navbar from '../Navbar/Navbar'
//tostify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//style
import "./Register.css";

const RegisterContainer = (props) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [accept, setAccept] = useState(false);


  // formik
  const handleValidate = (values) => {
    let errors = {};

    // comment
    const { fullName, email, password, confirmPass, accept } = values; // destructured

    if (fullName.length < 6) {
      errors.fullName = "minimum character is 6";
    }

    if (!email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)) {
      errors.email = "enter valid email type";
    }

    if (password !== "" && confirmPass !== "") {
      if (password !== confirmPass) {
        errors.password = "not equal to confirm pass";
        errors.confirmPass = "not equal to password";
      }
    } else {
      errors.password = "password can not be empty";
      errors.confirmPass = "confirmpass can not be empty";
    }

    if (!accept) {
      errors.accept = "please accept the termm";
    }

    return errors;
  };

  const handleRegister = ({ fullName, email, password }) => {
    props.registerUser(fullName, email, password);
  };

  return (
    <div className="main-div">
      <Navbar />
      <h2>Register</h2>
      <div className="form-div">
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            password: "",
            confirmPass: "",
            accept: false,
          }}
          validate={handleValidate}
          onSubmit={handleRegister}
          validateOnBlur={false}
        >
          {({ errors, touched}) => {
            return (
              <Form>
                <div className="field-div">
                  <Field
                    className={!!errors.fullName && !!touched.fullName  ? "register-input-error" : "register-input"}
                    name="fullName"
                    placeholder="full name"
                  />
                  <span className="error-span">{!!errors.fullName && !!touched.fullName && errors.fullName }</span>
                </div>
                <div className="field-div">
                  <Field
                    className={!!errors.email && !!touched.email  ? "register-input-error" : "register-input"}
                    name="email"
                    placeholder="email"
                  />
                  <span className="error-span">{!!errors.email && !!touched.email && errors.email }</span>
                </div>
                <div className="field-div">
                  <Field
                    className={!!errors.password && !!touched.password  ? "register-input-error" : "register-input"}
                    name="password"
                    type="password"
                    placeholder="Enter Password"
                  />
                  <span className="error-span">{!!errors.password && !!touched.password && errors.password }</span>
                </div>
                <div className="field-div">
                  <Field
                    className={!!errors.confirmPass && !!touched.confirmPass  ? "register-input-error" : "register-input"}
                    name="confirmPass"
                    type="password"
                    placeholder="confirm password"
                  />
                  <span className="error-span">{!!errors.confirmPass && !!touched.confirmPass && errors.confirmPass }</span>
                </div>
                <div className="accept-and-button">
                  <label>
                    <Field className="my-check" type="checkbox" name="accept" />
                    accept the terms and agreement
                  </label>
                  <button className="register-button" type="submit">
                    <span className="register-span">Register</span>
                  </button>
                </div>
                <span className="error-span">{errors.accept && touched.accept && errors.accept}</span>
              </Form>
            );
          }}
        </Formik>
      </div>
      <p>
        you already have an account ? <NavLink to="/login">Login</NavLink>
      </p>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      registerUser: registerUser,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(RegisterContainer);
