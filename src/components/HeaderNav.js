import React, { Component } from "react";
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
          <a className="nav-item nav-link" href="/">
            Home
          </a>
          <a className="nav-item nav-link" href="#Solutions">
            Solutions
          </a>
          <a className="nav-item nav-link" href="#OurStory">
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
          </a>
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
              <a className="nav-item nav-link" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="nav-item nav-link" href="#Solutions">
                Solutions
              </a>
            </li>
            <li>
              <a className="nav-item nav-link" href="#OurStory">
                Our Story
              </a>
            </li>
            <li>
              <a className="nav-item nav-link" href="#Team">
                Team
              </a>
            </li>
            <li>
              <a className="nav-item nav-link" href="#Portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="nav-item nav-link" href="#Reviews">
                Reviews
              </a>
            </li>
            <li>
              <a className="nav-item nav-link" href="#ContactUs">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default HeaderNav;
