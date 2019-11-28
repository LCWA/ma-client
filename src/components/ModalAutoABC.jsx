/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";

import "../styles/ModalWindow.css";

class ModalAutoABC extends Component {
  render() {
    return (
      <div className="modal-wrapper">
        <div className="client-info">
          <div className="client-name">
            <h2>Foundation</h2>
          </div>
          <div className="client-paragraph body-text automation">
            We worked together with a bar to help them automatize their ordering
            process while saving time and money. Our solution helped them being
            more efficient since the first day it was implemented.
          </div>
        </div>
      </div>
    );
  }
}

export default ModalAutoABC;
