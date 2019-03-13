import React, { Component } from 'react';
import Slider from './components/Slider.js';
import './App.css';
import Header from './components/Header';
import AboutAlex from './components/AboutAlex';
// import alex from './alex.jpeg';

class App extends Component {
    render() {
        return (
            <div className="App">
            <Header />
            <Slider/>
            <AboutAlex />
            </div>
        );
    }
}

        export default App;
