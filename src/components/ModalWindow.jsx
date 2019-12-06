/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";

import "../styles/ModalWindow.css";

import ForestCreations1 from "../images/projects/modal/Capture1.PNG";
import ForestCreations2 from "../images/projects/modal/Capture2.PNG";
import ForestCreations3 from "../images/projects/modal/Capture3.PNG";
import ForestCreations4 from "../images/projects/modal/Capture4.PNG";
import ForestCreations5 from "../images/projects/modal/Capture5.PNG";
import ForestCreations6 from "../images/projects/modal/Capture6.PNG";

class ModalWindow extends Component {
  render() {
    return (
      <div className="modal-wrapper">
        <div className="small-carousel">
          <OwlCarousel className="owl-theme" nav={true} center={true} items={1}>
            <img
              src={ForestCreations1}
              className="project-carousel-image"
            ></img>
            <img
              src={ForestCreations2}
              className="project-carousel-image"
            ></img>
            <img
              src={ForestCreations3}
              className="project-carousel-image"
            ></img>
            <img
              src={ForestCreations4}
              className="project-carousel-image"
            ></img>
            <img
              src={ForestCreations5}
              className="project-carousel-image"
            ></img>
            <img
              src={ForestCreations6}
              className="project-carousel-image"
            ></img>
          </OwlCarousel>
        </div>
        <div className="client-info">
          <div className="client-name">
            <h2>Forest Creations</h2>
          </div>
          <div className="client-paragraph body-text">
            We worked together with the client to design and develop a custom
            Webshop for jewelry with a unique and elegant design meant to
            inspire the connection between Mother Nature and Jewelry.
          </div>
          <div className="client-website-btn">
            <a href="https://www.forest-creations.com/" target="_blank">
              <button className="btn btn-primary my-2 my-sm-0">Website</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalWindow;
