/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import websites from "../images/solutions/websites.PNG";
import automation_tools from "../images/solutions/automation_tools.PNG";
import customized_software from "../images/solutions/customized_software.PNG";
import "../styles/Solutions.css";
import ScrollableAnchor from "react-scrollable-anchor";
import { Link } from "react-scroll";
class Solutions extends Component {
  constructor() {
    super();
    this.readMore = this.readMore.bind(this);
  }

  readMore(event) {
    event.preventDefault();
    var dots = document.getElementById("dots");
    var moreTextOne = document.getElementById("more-text-one");
    var btnOne = document.getElementById("btn-one");

    if (dots.style.display === "none") {
      dots.style.display = "block";
      btnOne.innerHTML = "Read More";
      moreTextOne.style.display = "none";
    } else {
      dots.style.display = "none";
      btnOne.innerHTML = "Read Less";
      moreTextOne.style.display = "block";
    }
  }
  readMoreTwo(event) {
    event.preventDefault();
    var dotsTwo = document.getElementById("dots-two");
    var moreTextTwo = document.getElementById("more-text-two");
    var btnTwo = document.getElementById("btn-two");
    if (dotsTwo.style.display === "none") {
      dotsTwo.style.display = "block";
      btnTwo.innerHTML = "Read More";
      moreTextTwo.style.display = "none";
    } else {
      dotsTwo.style.display = "none";
      btnTwo.innerHTML = "Read Less";
      moreTextTwo.style.display = "block";
    }
  }

  readMoreThree(event) {
    event.preventDefault();
    var dotsThree = document.getElementById("dots-three");
    var moreTextThree = document.getElementById("more-text-three");
    var btnThree = document.getElementById("btn-three");
    if (dotsThree.style.display === "none") {
      dotsThree.style.display = "block";
      btnThree.innerHTML = "Read More";
      moreTextThree.style.display = "none";
    } else {
      dotsThree.style.display = "none";
      btnThree.innerHTML = "Read Less";
      moreTextThree.style.display = "block";
    }
  }
  render() {
    return (
      <ScrollableAnchor id={"Solutions"}>
        <div className="solutions-wrapper">
          <h1 className="solutions-title">Solutions We Offer</h1>
          <div className="card-wrapper">
            <div className="solution websites">
              <img
                src={websites}
                className="solution-image"
                alt="Picture of website design"
              ></img>
              <h2 className="title-websites">Web Development</h2>
              <p className="body-text description">
                A website is a necessity and no longer an option in order to
                make your business excel.
                <span id="dots">...</span>
                <span id="more-text-one">
                  <br></br>
                  At <span id="mission-automate">Mission Automate</span> we use
                  cutting edge web technologies together with our creativity in
                  order to craft you a unique website that is user friendly,
                  intuitive and provides a great experience to your clients.{" "}
                  <span className="contact-notice">
                    If you are ready for such an innovation{" "}
                    <a href="#ContactUs" id="inner-contact">
                      Contact Us
                    </a>{" "}
                    and book a FREE discovery call with us.
                  </span>
                </span>
              </p>
              <button
                className="btn btn-primary my-2 my-sm-0"
                id="btn-one"
                onClick={this.readMore}
              >
                Read More
              </button>
            </div>
            <div className="solution automation-tools">
              <img
                src={automation_tools}
                className="solution-image"
                alt="Picture of automation tools"
              ></img>
              <h2 className="title-automation">
                SEO &amp; Social Media Management
              </h2>
              <p className="body-text description">
                Reach new customers! Improve your website search rank and expand
                with Google/Facebook/Instagram ads.
                <span id="dots-two">...</span>
                <span id="more-text-two">
                  <br></br>
                  You will get assistance with creating and managing ad
                  campaigns as well as an understanding of your important
                  keywords and SEO strategies.
                  <span className="contact-notice">
                    If you want to get ready for the future{" "}
                    <a href="#ContactUs" id="inner-contact">
                      Contact Us
                    </a>{" "}
                    and book a FREE discovery call with us.
                  </span>
                </span>
              </p>
              <Link
                className="btn btn-primary my-2 my-sm-0"
                id="btn-two"
                onClick={this.readMoreTwo}
                activeClass="active"
                to="more-text-two"
                spy={true}
                smooth={true}
                offset={-300}
                duration={500}
              >
                Read More
              </Link>
            </div>
            <div className="solution customized-software">
              <img
                src={customized_software}
                className="solution-image"
                alt="Picture of customized software"
              ></img>
              <h2 className="title-customized">Custom Solutions</h2>
              <p className="body-text description">
                You have a specific idea of a digital solution that your company
                needs? <span id="dots-three">...</span>
                <span id="more-text-three">
                  <span id="top-description">
                    <br></br>
                    You know that there are software tools that could help your
                    business grow?
                  </span>{" "}
                  <br></br>
                  At <span id="mission-automate">Mission Automate</span> we
                  architect and craft custom solutions that are tailored to your
                  specifications. The result is easy to use, bespoke software
                  built to address your needs and to create value in your
                  company.{" "}
                  <span className="contact-notice">
                    If you are ready for making your company more digital{" "}
                    <a href="#ContactUs" id="inner-contact">
                      Contact Us
                    </a>{" "}
                    and book your FREE discovery call with us.
                  </span>
                </span>
              </p>
              <Link
                className="btn btn-primary my-2 my-sm-0"
                id="btn-three"
                onClick={this.readMoreThree}
                activeClass="active"
                to="more-text-three"
                spy={true}
                smooth={true}
                offset={-300}
                duration={500}
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </ScrollableAnchor>
    );
  }
}

export default Solutions;
