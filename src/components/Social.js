import React, { Component } from 'react';
import {  NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faPinterest } from "@fortawesome/free-brands-svg-icons"
import '../styles/Social.css';

class Social extends Component {
	render() {
		return (
			<div>
				<ul className="position-fixed social-ul">
            <NavItem className="social-li">
                <NavLink className="fb" href="https://www.facebook.com/">
                <FontAwesomeIcon icon={faFacebook} />
                </NavLink >
            </NavItem>
            <NavItem className="social-li">
                <NavLink className="instagram" href="https://www.instagram.com/">
                  <FontAwesomeIcon icon={faInstagram}/>
                </NavLink >
            </NavItem>
            <NavItem className="social-li">
                <NavLink  className="pin" href ="https://www.pinterest.com/">
                  <FontAwesomeIcon icon={faPinterest} />
                </NavLink >
            </NavItem>
        </ul>
			</div>
				);
      }
		}

export default Social;