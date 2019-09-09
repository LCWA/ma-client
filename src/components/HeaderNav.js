import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MA_Logo from '../images/MA_Logo.png';
import '../styles/Nav.css';

class HeaderNav extends Component {
	render() {
		return (
			 
			<div className="d-flex justify-content-between  align-items-center px-3">
				
			<table width="90%"> 
		    <tr> 
			<td><img src={MA_Logo} alt="site logo" className = "nav-logo"></img></td>	
              <div className="Home-bar">      
			    <td align="right">	<nav className="navbar navbar-expand-lg" role="navigation" >	
						<Link className="nav-item nav-link" to="/">Home</Link>
						<a className="nav-item nav-link" href="#AboutUs">About us</a>
						<a className="nav-item nav-link" href="#ContactUs">Contact us</a>
					    </nav>				
                </td>
				</div>
				</tr>
				<tr>
					<td height="500px" align="right">
					</td> 
					<td align="right" >
						<div align="right" className="TopUp">  
                             <p class="back-to-top" > <a href="#top" onClick="topFunction()"><i class="fa fa-2x fa-angle-up" id="faup"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p>
                        </div>
					</td> 
					 
				</tr>
				</table>
				
					<div className="burger">
						<input className="menu-btn" type="checkbox" id="menu-btn" />
						<label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
						<ul className="menu">	
						  	<li><Link to="/">Home</Link></li>
             				<li><Link to="/Blog">Blog</Link></li>
							<li><Link to="/Contact"></Link></li>
						</ul>
					</div>
					
			 	</div>
	
				);
			}
		}

		window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("faup").style.display = "block";
  } else {
    document.getElementById("faup").style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

export default HeaderNav;
