import React, { Component } from "react";
import { Link } from "react-router-dom";
import MA_Logo from "../images/LogoBlack_cut.png";
import "../styles/Nav.css";

class HeaderNav extends Component {
  render() {
    return (
      <div className="d-flex justify-content-between  align-items-center px-3">
        <img
          src={MA_Logo}
          alt="site logo"
          className="nav-logo align-items-center"
        ></img>
        <nav className="navbar navbar-expand-lg" role="navigation">
          <Link className="nav-item nav-link" to="/">
            Home
          </Link>
          <a className="nav-item nav-link" href="#Solutions">
            Solutions
          </a>
          {/* <a className="nav-item nav-link" href="#OurStory">
            Our Story
          </a>
          <a className="nav-item nav-link" href="#Team">
            Team
          </a>
          <a className="nav-item nav-link" href="#Portfolio">
            Portfolio
          </a>
          <a className="nav-item nav-link" href="#Reviews">
            Reviews
          </a> */}
          <a className="nav-item nav-link" href="#ContactUs">
            Contact us
          </a>
        </nav>

        <div className="burger">
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Blog">Blog</Link>
            </li>
            <li>
              <Link to="/Contact"></Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default HeaderNav;
