import React, { Component } from "react";
import "../styles/VideoSection.css";
import VideoComponent from "../videos/MissionAutomate_video.mp4";
import VideoSubstitute from "../images/Video_substitute.PNG";
class VideoSection extends Component {
  render() {
    return (
      <div id="fullScreenDiv">
        <img
          src={VideoSubstitute}
          id="videosubstitute"
          alt="Full screen background video"
        />
        <div id="videoDiv">
          <video
            autoplay="autoplay"
            src={VideoComponent}
            id="video"
            loop="loop"
          ></video>
        </div>
      </div>
    );
  }
}

export default VideoSection;
