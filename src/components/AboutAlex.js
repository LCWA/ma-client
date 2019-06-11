import React, { Component } from 'react';
import '../styles/AboutAlex.css';

const Text = props => <div>{props.about}</div>;
class AboutAlex extends Component {
    render () {
        return (
            <div>
            <h2 className="text-center"><Text about="About us" /></h2>
            <p> <Text about="Hi, I’m Alex. I have been programming for over 20 years and I like teaching programming to others as well. I have a Master’s in computer science and I have worked with a wide variety of technologies on many different projects. Aside from my work in software development, I specialize in tutoring introductory and advanced topics in programming to students of all experience levels. If you have any questions, please do not hesitate to contact me at" /> </p> 
            <a href="alex@letscodwithalex.com" className="text-center lcwa-email" target="_blank"><Text about="alex@letscodewithalex.com" /></a>
            </div>
        );
    }
}


export default AboutAlex;
