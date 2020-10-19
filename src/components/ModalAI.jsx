/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";

import "../styles/ModalWindow.css";

class ModalAI extends Component {
  render() {
    return (
      <div className="modal-wrapper">
        <div className="client-info">
          <div className="client-name">
            <h2>ObjectionCo</h2>
          </div>
          <div className="client-paragraph body-text automation">
            Continuously developing a product that uses machine learning to
            automatically detect and dispute fake reviews. We used a variety of
            technologies related to content parsing and natural language
            processing.
          </div>
          <div className="client-paragraph body-text automation">
            Technologies used: Python, Selenium, Scrapy, Puppeteer, MySQL, PHP,
            Amazon SageMaker, Huggingface Transformers.
          </div>
        </div>
      </div>
    );
  }
}

export default ModalAI;
