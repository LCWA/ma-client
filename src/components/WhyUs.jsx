import React, { Component } from "react";
import "../styles/WhyUs.css";
import Whyus from "../images/projects/Whyus.png";

class WhyUs extends Component {
  render() {
    return (
      <div className="whyus-wrapper" id="WhyUs">
        <div className="whyus-container">
          <h1 className="whyus-title">Why Us?</h1>
          <h2 className="whyus-subtitle">
            Above all other operating principles, we believe in being agile,
            always innovating and adapting to your needs.
          </h2>
          <div className="whyus-img">
            <img alt="" src={Whyus}></img>
          </div>
          <div className="whyus-bullets">
            <p>Expert software engineering</p>
            <p>Modern components</p>
            <p>Customer first mindset</p>
            <p>One stop shop</p>
            <p>Professional Assistance</p>
          </div>
        </div>
      </div>
    );
  }
}

export default WhyUs;
