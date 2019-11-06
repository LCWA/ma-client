import React, { Component } from "react";
import "../styles/footer.css";
import "../App.css";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "reactstrap";

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
      </div>
    );
  }
}
export default Footer;
