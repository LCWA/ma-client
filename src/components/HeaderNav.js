import React, { Component } from 'react';

class HeaderNav extends Component {
	render() {
		return (
			<div>
				<div className="d-flex justify-content-between  align-items-center px-3">
					<p className="text-white">logo</p>
					<nav className="navbar navbar-expand-lg" role="navigation">	
						
							<a className="nav-item nav-link active" href="#">Home</a>
							<a className="nav-item nav-link" href="onlineworkshop.html" target="_top">Online Workshop</a>
							<a className="nav-item nav-link" href="bookasession.html">Book a Session</a>
							<a className="nav-item nav-link" href="offering.html">Offering</a>
							<a className="nav-item nav-link" href="blog.html">Blog</a>
					</nav>
					<form className="form-inline my-2 my-lg-0">
						<input className="form-control" type="search" placeholder="Search" aria-label="Search">
						
						</input>	
					</form>
			 	</div>
			</div>
				);
			}
		}

export default HeaderNav;