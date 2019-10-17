import React, { Component } from "react";
import { Button } from "reactstrap";
import "../App.css";
import "../styles/Contact.css";
import "../styles/FloatingLabel.scss";
import * as emailjs from "emailjs-com";
import ScrollableAnchor from "react-scrollable-anchor";

class Contact extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      message: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit(event) {
    event.preventDefault();

    var service_id = "contact_service";
    var template_id = "contact_form";

    var template_params = {
      to_email: "alex@letscodewithalex.com",
      user_name: this.state.user_name,
      user_email: this.state.user_email,
      message: this.state.message
    };

    emailjs
      .send(
        service_id,
        template_id,
        template_params,
        "user_GYuijxFwsi7IOwFaKUnc2"
      )
      .then(
        response => {
          console.log("SUCCESS!", response.status, response.text);
        },
        err => {
          console.log("FAILED...", err);
        }
      );

    this.setState({
      name: "",
      email: "",
      message: ""
    });
    document.getElementById("contact-form").reset();
    alert("Thank you for contacting us!");
  }

  render() {
    return (
      <ScrollableAnchor id={"ContactUs"}>
        <div className="container">
          <h1 className="contact-form">Contact Form</h1>
          <div className="wrapper">
            <div className="company-info">
              <h3>Mission Automate</h3>
              <ul>
                <li>Global Team </li>
                <li>HQ in Raleigh, NC, USA</li>
                <li></li>
              </ul>
            </div>
            <div className="contact">
              <form id="contact-form">
                <p>
                  <input
                    type="text"
                    name="user_name"
                    value={this.state.value}
                    onChange={this.handleChange}
                    className="form-control"
                    required
                  />
                  <label className="form-control-placeholder" for="user_name">
                    Your Name
                  </label>
                </p>
                <div className="email-container">
                  <p>
                    <input
                      type="email"
                      name="user_email"
                      value={this.state.value}
                      onChange={this.handleChange}
                      className="form-control"
                      required
                    />
                    <label
                      className="form-control-placeholder email"
                      for="user_email"
                    >
                      Your E-mail
                    </label>
                  </p>
                </div>
                <p className="full">
                  <textarea
                    name="message"
                    rows="6"
                    value={this.state.value}
                    onChange={this.handleChange}
                    className="form-control"
                    required
                  />
                  <label
                    className="form-control-placeholder textarea"
                    for="message"
                  >
                    Your Message
                  </label>
                </p>
                <p className="full">
                  <Button
                    onClick={this.handleSubmit}
                    className="btn btn-primary my-2 my-sm-0"
                  >
                    Submit
                  </Button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </ScrollableAnchor>
    );
  }
}

export default Contact;
