/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import websites from "../images/solutions/websites.PNG";
import automation_tools from "../images/solutions/automation_tools.PNG";
import customized_software from "../images/solutions/customized_software.PNG";
import "../styles/Solutions.css";
import ScrollableAnchor from "react-scrollable-anchor";

class Solutions extends Component {
  render() {
    return (
      <ScrollableAnchor id={"Solutions"}>
        <div className="solutions-wrapper">
          <h1 className="solutions-title">Solutions We Offer</h1>
          <div className="card-wrapper">
            <div className="solution websites">
              <img
                src={websites}
                className="website-image"
                alt="Picture of website design"
              ></img>
              <h2 className="title-websites">Websites</h2>
              <p className="body-text description">
                A website is a necessity and no longer an option in order to
                make your business excel. At Mission Automate we use cutting
                edge web technologies together with our creativity in order to
                craft you a unique website that is user friendly, intuitive and
                provides a great experience to your clients.
              </p>
              <button className="btn btn-primary my-2 my-sm-0">
                Read More
              </button>
            </div>
            <div className="solution automation-tools">
              <img
                src={automation_tools}
                className="automation-image"
                alt="Picture of automation tools"
              ></img>
              <h2 className="title-automation">Automation Tools</h2>
              <p className="body-text description">
                Do you spend time working on repetitive tasks? Are there several
                things that you would like to improve but you don’t know where
                to start? At Mission Automate we are passionate about process
                improvement. We give back your time while unlocking the
                potential of your business.
              </p>
              <button className="btn btn-primary my-2 my-sm-0">
                Read More
              </button>
            </div>
            <div className="solution customized-software">
              <img
                src={customized_software}
                className="customized-image"
                alt="Picture of customized software"
              ></img>
              <h2 className="title-customized">Customized Software</h2>
              <p className="body-text description">
                You have a specific idea of a digital solution that your company
                needs, or you know there are software tools that could help your
                business grow. At Mission Automate we architect custom solutions
                tailored to your specifications. Easy to use software built to
                address your needs and to create value in your company.
              </p>
              <button className="btn btn-primary my-2 my-sm-0">
                Read More
              </button>
            </div>
          </div>
        </div>
      </ScrollableAnchor>
    );
  }
}

export default Solutions;
