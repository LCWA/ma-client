import React, { Component } from 'react';
import Slider from './components/Slider.js';
import './App.css';
import Header from './components/Header';
import Newsletter from './components/Newsletter.js';
import Social from './components/Social';
import AboutAlex from './components/AboutAlex.js';

// import alex from './alex.jpeg';

class App extends Component {
    render() {
        return (
            <div className="App">
            <Header />
            <Slider/>
            <Newsletter/>
            <AboutAlex />
            <Social/>
            </div>
        );
    }
}

        export default App;
