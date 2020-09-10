import React, { Component } from "react";
import "../styles/footer.css";
import "../App.css";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "reactstrap";
import RCC_LOGO from "../images/RCC_LOGO.jpg";

class Footer extends Component {
  render() {
    return (
      <div className="footer-wrapper">
        <div className="social-icon">
          <NavLink
            className="ln"
            target="_blank"
            href="https://www.linkedin.com/company/mission-automate/"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </NavLink>
        </div>
        <div className="headquarters">
          <p>Global Team | HQ in Raleigh NC, USA</p>
        </div>
        <div className="footer-line right-column">
          <img id="chamber_logo" alt="chamber logo" src={RCC_LOGO}></img>
          <p className="break">Proud members of the Chamber</p>
        </div>
      </div>
    );
  }
}
export default Footer;
