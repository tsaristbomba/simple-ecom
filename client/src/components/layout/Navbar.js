import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";

import "./Navbar.css";

const Navbar = ({ auth: { isAuthenticated, loading, user }, logout }) => {
  const authMiniLinks = (
    <ul className="menu-ul">
      <li>
        <Link to="/dashboard" className="log">
          <i className="fas fa-user"></i> {user && user.name}
        </Link>
      </li>
      <li className="dot-li">
        <i className="dot fas fa-circle"></i>
      </li>
      <li>
        <a onClick={logout} className="log" href="#!">
          <i className="fas fa-sign-out-alt"></i>
          <span className="hide-sm"> Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestMiniLinks = (
    <ul className="menu-ul">
      <li>
        <Link className="log" to="/login">
          LOG IN
        </Link>
      </li>
      <li className="dot-li">
        <i className="dot fas fa-circle"></i>
      </li>
      <li>
        <Link className="log" to="/register">
          CREATE ACCOUNT
        </Link>
      </li>
    </ul>
  );

  return (
    <Fragment>
      <nav>
        <div className="mini-nav">
          {!loading && (
            <Fragment>
              {isAuthenticated ? authMiniLinks : guestMiniLinks}
            </Fragment>
          )}
        </div>
        <div className="nav">
          <Link className="title-a" to="/">
            <h1 className="logo">
              e<i className="logo-dot fas fa-circle"></i>
              com
            </h1>
          </Link>
          <ul className="menu-ul">
            <li>
              <Link className="menu-a" to="/shop">
                SHOP
              </Link>
            </li>
            <li>
              <Link className="menu-a" to="/contact">
                CONTACT
              </Link>
            </li>
            <li>
              <Link className="menu-a" to="/cart">
                CART
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
