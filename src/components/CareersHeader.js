import React, { Component } from "react";
import MA_Logo from "../images/MA_UltimateLogo.jpg";
import "../styles/Nav.css";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

class CareersHeader extends Component {
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
          <HashLink
            className="nav-item nav-link"
            to="/#Solutions"
            spy={true}
            smooth={true}
            duration={500}
          >
            Solutions{" "}
          </HashLink>

          <HashLink
            className="nav-item nav-link"
            to="/#story-title"
            spy={true}
            smooth={true}
            duration={500}
          >
            Our Story
          </HashLink>
          <HashLink
            className="nav-item nav-link"
            to="/#Team"
            spy={true}
            smooth={true}
            duration={500}
          >
            Team
          </HashLink>
          <HashLink
            className="nav-item nav-link"
            to="/#WhyUs"
            spy={true}
            smooth={true}
            duration={500}
          >
            Why Us
          </HashLink>
          <HashLink
            className="nav-item nav-link"
            to="/#Portfolio"
            spy={true}
            smooth={true}
            duration={500}
          >
            Portfolio
          </HashLink>
          <HashLink
            className="nav-item nav-link"
            to="/#Reviews"
            spy={true}
            smooth={true}
            duration={500}
          >
            Reviews
          </HashLink>

          <Link
            className="nav-item nav-link"
            to="/careers"
            spy={true}
            smooth={true}
            duration={500}
          >
            Careers{" "}
          </Link>
          <HashLink
            className="nav-item nav-link"
            to="/#ContactUs"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact us
          </HashLink>
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
              <a className="nav-item nav-link" href="/#Solutions">
                Solutions
              </a>
            </li>

            <li>
              <a className="nav-item nav-link" href="/#OurStory">
                Our Story
              </a>
            </li>
            <li>
              <a className="nav-item nav-link" href="/#Team">
                Team
              </a>
            </li>
            <li>
              <a className="nav-item nav-link" href="/#WhyUs">
                Why Us
              </a>
            </li>
            <li>
              <a className="nav-item nav-link" href="/#Portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="nav-item nav-link" href="/#Reviews">
                Reviews
              </a>
            </li>
            <li>
              <a className="nav-item nav-link" href="/careers">
                Careers
              </a>
            </li>
            <li>
              <a className="nav-item nav-link" href="/#ContactUs">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CareersHeader;
