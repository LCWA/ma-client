import React, { Component } from 'react';
import HeaderNav from './HeaderNav';
import '../styles/Nav.css';


//header component

class Header extends Component {
    render() {
        return (
            <div>
                <header class ="nav-row">
                    <HeaderNav />
                </header>
            </div>
        );
    }
}

export default Header;