import React, { Component } from "react";
import Spinning from "../components/Spinning";
import "../styles/OurStory.css";
import ScrollableAnchor from "react-scrollable-anchor";

class OurStory extends Component {
  render() {
    return (
      <ScrollableAnchor id={"OurStory"}>
        <div className="story-wrapper">
          <div className="story story-container">
            <h1 className="story-title">Our Story</h1>
            <p className="story-text body-text">
              We handcraft software that helps you and your company reach your
              objectives and discover new limits.
            </p>
            <p className="story-text body-text">
              Our perspective is that the manufacture of software is an art that
              involves developers spending hours and hours working towards
              producing a high-quality result.
            </p>
            <p className="story-text body-text">
              Our digital solutions are uniquely handmade as we pay attention to
              any detail that would provide significant value to you. At the
              same time, we believe in being agile, always innovating and
              adapting to your needs.
            </p>
          </div>
          <div className="story animation-container">
            <div id="interactive-sphere">
              <Spinning />
            </div>
          </div>
        </div>
      </ScrollableAnchor>
    );
  }
}

export default OurStory;
