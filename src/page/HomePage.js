import React, { Component } from 'react';
import Layout from '../components/Layout';
import Slider from '../components/Slider';
import Newsletter from '../components/Newsletter';
import Social from '../components/Social';
import AboutAlex from '../components/AboutAlex';

class HomePage extends Component {
    render() {
        return (
            <div >
                <Layout/>
                <Slider/>
                <Newsletter/>
                <AboutAlex />
                <Social/>
            </div>
        );
    }
}

 export default HomePage;
