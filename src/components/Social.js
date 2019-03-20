import React, { Component } from 'react';
import {  NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faPinterest } from "@fortawesome/free-brands-svg-icons"
import './Social.css';

class Social extends Component {
	render() {
		return (
			<div>
				<ul className="position-fixed social-ul">
            <NavItem className="social-li">
                <NavLink className="fb"  target="_blank" href="https://www.facebook.com/LetsCodeWithAlex/">
                <FontAwesomeIcon icon={faFacebook} />
                </NavLink >
            </NavItem>
            <NavItem className="social-li">
                <NavLink className="instagram"  target="_blank"  href="https://www.instagram.com/letscodewithalex/">
                  <FontAwesomeIcon icon={faInstagram}/>
                </NavLink >
            </NavItem>
            <NavItem className="social-li">
                <NavLink  className="pin"  target="_blank"  href ="https://www.pinterest.com/">
                  <FontAwesomeIcon icon={faPinterest} />
                </NavLink >
            </NavItem>
        </ul>
			</div>
				);
      }
		}

export default Social;