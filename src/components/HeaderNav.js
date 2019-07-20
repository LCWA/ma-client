import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LogoBlue from '../LogoTransparent.png';
import '../styles/Nav.css';

class HeaderNav extends Component {
	render() {
		return (
			<div>
				<table width="78%">
					<tr>
						<td><img src={LogoBlue} alt="site logo" className = "nav-logo"></img> </td>
                        <td>
						<nav className="navbar navbar-expand-lg" role="navigation" >	
							<Link className="nav-item nav-link" to="/">Home</Link>
							<a className="nav-item nav-link" href="#AboutUs">About us</a>
							<a className="nav-item nav-link" href="#ContactUs">Contact us</a>
						</nav>
				        </td>
				     </tr>
				</table>
			 	</div>
		
				);
			}
		}

export default HeaderNav;
