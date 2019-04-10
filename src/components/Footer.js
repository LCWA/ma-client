import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {  NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faPinterest } from "@fortawesome/free-brands-svg-icons"
import '../styles/footer.css';

class Footer extends Component {
	render() {
		return (
			<div>
                <div className="footer">	
                    <div className="footer-li">			
                        <Link className="nav-item nav-link" a="#">About me</Link>
                        <Link className="nav-item nav-link" a="#">Contact</Link>
                        <Link className="nav-item nav-link" a="#">Blog</Link>
                    </div>
                    <div className="footer-social">	
                        <NavItem className="social-li">
                            <NavLink className="fb" target="_blank" href="https://www.facebook.com/LetsCodeWithAlex/">
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
                    </div>
                </div>
			</div>
				);
			}
		}

export default Footer;