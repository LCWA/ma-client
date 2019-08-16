import React, { Component } from 'react';
import Blog from '../components/Blog';
import Header from '../components/Header';
import Slider from '../components/Slider';
import AboutAlex from '../components/AboutAlex';
import Team from '../components/Team';
import Contact from '../components/Contact';
import NewFooter from '../components/NewFooter';
import { configureAnchors } from 'react-scrollable-anchor';
import TeamCard from '../components/TeamCard';


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
                <AboutAlex/>
                <Team/>
                <TeamCard/>
                <Contact/>
                <NewFooter/>                
            </div>
        );
    }
}
 export default HomePage;
