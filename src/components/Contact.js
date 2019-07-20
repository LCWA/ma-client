import React, { Component } from 'react';
import { Button } from 'reactstrap';
import '../styles/Contact.css';
import '../App.css';
import * as emailjs from 'emailjs-com';
import ScrollableAnchor from 'react-scrollable-anchor';
 
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
        this.clearForm = this.clearForm.bind(this)
        
    }
    handleEmailChange = evt => {
        this.setState({ email: evt.target.value,
         });
      };

      handleNameChange = evt => {
        this.setState({ name: evt.target.value,
         });
      };
      handleMessageChange = evt => {
        this.setState({ message: evt.target.value,
         });
      };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    clearForm = () => {
        document.getElementById("contact-form").reset();
    }

    handleSubmit (event) {
        event.preventDefault()

        var service_id = "contact_service";
        var template_id = "contact_form";

        var template_params = {
            to_email: 'alex@letscodewithalex.com',
            user_name: this.state.user_name,
            user_email: this.state.user_email,
            message: this.state.message
        }

        emailjs.send(service_id, template_id, template_params, 'user_v9IwfNnzBGGkekXLyzhy1')
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
canBeSubmitted() {
    const { name ,email, message } = this.state;
    return (
        name.length > 0 &&
      email.length > 0 &&
      message.length > 0
    );
  }
  handleSubmit = (evt) => {
    if (!this.canBeSubmitted()) {
      evt.preventDefault();
      return;
    }
    // actual submit logic...
  };
  
    render() {
        const isEnabled = this.canBeSubmitted();
        return (
            <ScrollableAnchor id={'ContactUs'}>
            <div className="container">
                <h1 className="contact-form">Contact Form</h1>
                <div className="wrapper">
                    <div className="company-info">
                    <h3>Mission Automate</h3>
                        <ul>
                            <li>Address 44 </li>
                            <li>(555) 555-5555</li>
                            <li>alex@letscodewithalex.com</li>
                        </ul>
                    </div>
                    <div className="contact">
                        <h3>Email us</h3>
                        <form id = "contact-form" onSubmit={this.handleSubmit}> 
                        <div className= "email-container">
                            <p>
                                <label>Name</label>
                                <input type="text" name="user_name" onChange={this.handleNameChange}  value={this.state.name}></input>
                            </p>
                            <p>
                                <label>Email Address</label>
                                <input type="email" name="user_email" onChange={this.handleEmailChange}  value={this.state.email}></input>
                            </p>
                        </div>
                            <p class="full">
                                <label>Message</label>
                                <textarea name="message" rows="6"  onChange={this.handleMessageChange}  value={this.state.message}></textarea>
                            </p>
                            <p class="full">

                                <Button disabled={!isEnabled} onClick={this.handleSubmit} className="btn.btn-primary.my-2.my-sm-0">Submit</Button>


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