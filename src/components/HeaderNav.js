import React, { Component } from "react";
import MA_Logo from "../images/LogoBlack_cut.png";
import "../styles/Nav.css";
import { Link } from "react-scroll";

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
          <Link
            className="nav-item nav-link"
            to="solutions-title"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Solutions{" "}
          </Link>
          <Link
            className="nav-item nav-link"
            to="story-title"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            Our Story
          </Link>
          <Link
            className="nav-item nav-link"
            to="team-title"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
          >
            Team
          </Link>
          <Link
            className="nav-item nav-link"
            to="portfolio-title"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
          >
            Portfolio
          </Link>
          <Link
            className="nav-item nav-link"
            to="reviews-title"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            Reviews
          </Link>

          <Link
            className="nav-item nav-link"
            to="contact-form"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            Contact us
          </Link>
          <Link
            className="nav-item nav-link"
            to="contact-form"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            Get a Free Site Audit
          </Link>
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
            <li>
              <a className="nav-item nav-link" href="#ContactUs">
                Get a Free Site Audit
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default HeaderNav;
