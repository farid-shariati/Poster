import React, { Component } from "react";

// component
import { NavLink } from "react-router-dom";

// style
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="registerlink">
          <li>
            <NavLink className="link" to="/register">
              Register
            </NavLink>
          </li>
        </div>
        <div className="loginlink">
          <li>
            <NavLink
              isActive={(match, location) => {
                if (
                  "/login" === location.pathname ||
                  (location.pathname === "/")
                )
                  return true;
              }}
              className="link"
              to="/login"
            >
              Login
            </NavLink>
          </li>
        </div>
      </div>
    );
  }
}

export default Navbar;
