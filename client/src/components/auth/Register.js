import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";

import "./Register.css";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger", 2000);
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) return <Redirect to="/" />;

  return (
    <div className="form-container">
      <h1 className="title">Sign Up</h1>
      <p>
        <i className="fas fa-user"></i> Create Your Account
      </p>
      <form
        className="form"
        action="create-profile.html"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
            value={name}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            required
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength="6"
            value={password2}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <input type="submit" className="btn" value="Register" />
      </form>
      <p>
        Already have an account?{" "}
        <Link className="btn-blue" to="/login">
          Sign In
        </Link>
      </p>
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {
  setAlert,
  register,
})(Register);
