import React, { Component } from 'react';
import HeaderNav from './HeaderNav';
import Login from './Login';

//header component

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <HeaderNav />
                    <Login />
                </header>
            </div>
        );
    }
}

export default Header;