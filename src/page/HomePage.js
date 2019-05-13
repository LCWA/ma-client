import React, { Component } from 'react';
import Header from '../components/Header';
import Slider from '../components/Slider';
import Newsletter from '../components/Newsletter';
import Social from '../components/Social';
import AboutAlex from '../components/AboutAlex';

class HomePage extends Component {
    render() {
        return (
            <div >
                <Header />
                <div className="d-flex justify-content-center flex-column">
                <p>LET'S CODE WITH ALEX</p>
                </div>
                <Slider/>
                <Newsletter/>
                <AboutAlex />
                <Social/>
            </div>
        );
    }
}

 export default HomePage;
