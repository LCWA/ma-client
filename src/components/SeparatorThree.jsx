import React, { Component } from "react";
import "../styles/Separator.css";

class SeparatorThree extends Component {
  render() {
    return (
      <div className="separator">
        <svg
          class="separator__svg"
          width="100%"
          height="100"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="url(#my-cool-gradient-three)"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <linearGradient id="my-cool-gradient-three" x2="1" y2="1">
            <stop offset="0%" stop-color="#2c1b91" />
          </linearGradient>
          <path d="M 120 100 V 10 L -130 100" />
          <path d="M -60 79 L 100 28 V 10 Z" fill="#ff6602" stroke-width="0" />
        </svg>
      </div>
    );
  }
}

export default SeparatorThree;
