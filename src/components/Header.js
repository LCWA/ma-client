import React, { Component } from 'react';
import HeaderNav from './HeaderNav';


//header component

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <HeaderNav />
                </header>
            </div>
        );
    }
}

export default Header;