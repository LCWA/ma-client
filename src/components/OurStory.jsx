import React, { Component } from "react";
import Spinning from "../components/Spinning";
import "../styles/OurStory.css";
import apnlogo from "../images/projects/apnlogo.jpg";

class OurStory extends Component {
  render() {
    return (
      <div className="story-wrapper" id="OurStory">
        <div className="story story-container">
          <h1 className="story-title" id="story-title">
            Our Story
          </h1>
          <h2 className="ma-slogan">
            Your Software Artisan Team For An Efficient Business
          </h2>
          <p className="story-text body-text">
            Mission Automate is your artificial intelligence team. We help SMB
            companies become more profitable through custom software. We work
            closely with you at every phase of the development process to ensure
            that our solutions map closely to your needs. Our solutions are easy
            to use, affordable and designed by team of subject matter experts.
          </p>
          <p className="story-text body-text">Our expertise includes:</p>
          <p className="story-text body-text story-expertise">
            Machine Learning | Deep Learning | Natural Language Processing with
            Tensorflow, PyTorch, Amazon SageMaker
          </p>
          <p className="story-text body-text story-expertise">
            Full stack development using JavaScript, Python, PHP, Ruby, C#
          </p>
          <p className="story-text body-text story-expertise">
            Kubernetes | AWS, GCP, Heroku and other Cloud Hosting Platforms
          </p>
          <p className="story-text body-text">Certificates:</p>
          <p className="story-text body-text certi">
            As part of the Amazon Partner Network, we are happy to build
            solutions and services for small and medium businesses by leveraging
            Amazon Web Services.
          </p>
        </div>
        <div className="story animation-container">
          <div id="interactive-sphere">
            <Spinning />
          </div>
          <img src={apnlogo} alt="aws logo" className="aws-logo" />
        </div>
      </div>
    );
  }
}

export default OurStory;
