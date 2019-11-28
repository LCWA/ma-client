/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";

import "../styles/ModalWindow.css";

class ModalEastWest extends Component {
  render() {
    return (
      <div className="modal-wrapper">
        <div className="client-info">
          <div className="client-name">
            <h2>East West Consolidated</h2>
          </div>
          <div className="client-paragraph body-text">
            We developed an inventory management tool for a Kevlar distributor
            so that they can better track the products they sell. The main
            benefits for them were the following ones:
            <ul className="modal-list-bullets">
              <li>Achieve efficiency and productivity in operations. </li>
              <li>Minimize inventory costs and maximize sales and profits.</li>
              <li>Automation of manual tasks.</li>
              <li>Maintain customer happiness.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalEastWest;
