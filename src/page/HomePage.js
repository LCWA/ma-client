import React, { Component } from 'react';
import Blog from '../components/Blog';
import Header from '../components/Header';
import Slider from '../components/Slider';
import TeamCard from '../components/TeamCard';
import Contact from '../components/Contact';
import NewFooter from '../components/NewFooter';
import { configureAnchors } from 'react-scrollable-anchor';


configureAnchors({offset: -120, scrollDuration: 1000})
class HomePage extends Component {
    render() {
        return (
            <div >
                <Header />
                <div className="d-flex justify-content-center flex-column">
                <p>MISSION AUTOMATE</p>
                </div>
                <Slider/>
                <Blog/>
                <TeamCard/>
                <Contact/>
                <NewFooter/>
            </div>
        );
    }
}
 export default HomePage;
