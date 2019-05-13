import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LogoBlue from '../LogoTransparent.png';
import '../styles/Nav.css';

class HeaderNav extends Component {
	render() {
		return (
			<div>
				<div className="d-flex justify-content-between  align-items-center px-3">
				<img src={LogoBlue} alt="site logo" className = "nav-logo"></img>
					<nav className="navbar navbar-expand-lg" role="navigation">	
 							
		 					<Link className="nav-item nav-link" to="/">Home</Link>
							<Link className="nav-item nav-link" to="/OnlineWorkshop">Online workshop</Link>
							<Link className="nav-item nav-link" to="/BookASession">Book a session</Link>
							<Link className="nav-item nav-link" to="/Offering">Offering</Link>
              <Link className="nav-item nav-link" to="/Blog">Blog</Link>
						  <Link className="nav-item nav-link" to="/FAQ">FAQ</Link>

					</nav>
					<form className="form-inline my-2 my-lg-0">
						<input className="form-control" type="search" placeholder="Search" aria-label="Search">
						</input>	
					</form>
					<div className="burger">
						<input className="menu-btn" type="checkbox" id="menu-btn" />
						<label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
						<ul className="menu">
								
						  <li><Link to="/">Home</Link></li>
							<li><Link to="/OnlineWorkshop">Online workshop</Link></li>
							<li><Link to="/BookASession">Book a session</Link></li>
							<li><Link to="/Offering">Offering</Link></li>
             	<li><Link to="/Blog">Blog</Link></li>
							<li><Link to="/FAQ">FAQ</Link></li>
						</ul>
					</div>
			 	</div>
			</div>
				);
			}
		}

export default HeaderNav;
