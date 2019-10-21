import React, { Component } from "react";
import { Button } from "reactstrap";
import "../App.css";
import "../styles/Contact.css";
import "../styles/FloatingLabel.scss";
import * as emailjs from "emailjs-com";
import ScrollableAnchor from "react-scrollable-anchor";

class Contact extends Component {

    constructor() {
        super()

        this.state = {
          name: '',
          email: '',
          message: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();


    var service_id = "contact_service";
    var template_id = "contact_form";

    var template_params = {
      to_email: "alex@letscodewithalex.com",
      user_name: this.state.user_name,
      user_email: this.state.user_email,
      message: this.state.message
    };


        emailjs.send(service_id, template_id, template_params, 'user_GYuijxFwsi7IOwFaKUnc2')
          .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
        console.log('FAILED...', err);
            });

        this.setState({
          name: '',
          email: '',
         message: ''
    })
    document.getElementById("contact-form").reset();
    alert("Thank you for contacting us!")
  }

    render() {
        return (
      <ScrollableAnchor id={ 'ContactUs'}>
        <div className="container">
          <h1 className="contact-form">Contact Us</h1>
          <div>
            <div className="company-info">
              <br/>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut mi tincidunt, commodo velit vel</h3>
            </div>
            <div className="contact">
              <form id="contact-form">
                <table>
                  <tr>
                    <td>
                      <label className="form-control-placeholder first" htmlFor="last_name">LAST NAME<span
                        className="required">*</span></label>
                      <input type="text" name="last_name" value={this.state.value} onChange={this.handleChange} required/>
                    </td>
                    <td>
                      <label className="form-control-placeholder last" htmlFor="first_name">FIRST NAME<span
                        className="required">*</span></label>
                      <input type="text" name="first_name" value={this.state.value} onChange={this.handleChange} required/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="form-control-placeholder email" htmlFor="user_email">EMAIL<span
                        className="required">*</span></label>
                      <input type="text" name="user_email" value={this.state.value} onChange={this.handleChange} required/>
                    </td>
                    <td>
                      <label className="form-control-placeholder number" htmlFor="user_number">PHONE NUMBER<span
                        className="required">*</span></label>
                      <input type="text" name="user_number" value={this.state.value} onChange={this.handleChange} required/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="form-control-placeholder cname" htmlFor="company_name">COMPANY NAME<span
                        className="required">*</span></label>
                      <input type="text" name="company_name" value={this.state.value} onChange={this.handleChange} required/>
                    </td>
                    <td>
                      <label className="form-control-placeholder ctype" htmlFor="company_type">COMPANY TYPE<span
                        className="required">*</span></label>
                      <input type="text" name="company_type" value={this.state.value} onChange={this.handleChange} required/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="form-control-placeholder service" htmlFor="service_needed">Services needed </label>
                      <input type="checkbox" name="Websites" value="Websites" /> Websites<br/>
                      <input type="checkbox" name="Automation Tools" value="Automation Tools" /> Automation Tools<br/>
                      <input type="checkbox" name="Customized Software" value="Customized Software" />Customized Software<br/>
                    </td>
                  </tr>
                  <br/>
                  <tr>
                    <p className="full">
                      <textarea name="message" placeholder="Type your message here ..." rows="6" value={this.state.value} onChange={this.handleChange} className="form-control" required/>
                    </p>
                  </tr>
                </table>
                <p className="full">
                  <Button onClick={this.handleSubmit} className="btn btn-primary my-2 my-sm-0">Send</Button>
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
