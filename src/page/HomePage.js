import React, { Component } from 'react';
import Layout from '../components/Layout';
import Slider from '../components/Slider';
import Newsletter from '../components/Newsletter';
import Social from '../components/Social';
import AboutAlex from '../components/AboutAlex';
import '../styles/logo.css';

class HomePage extends Component {
    render() {
        return (
            <div >
                <Layout/>
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
