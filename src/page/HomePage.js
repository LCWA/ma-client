import React, { Component } from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import TeamCard from "../components/TeamCard";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { configureAnchors } from "react-scrollable-anchor";
import VideoSection from "../components/VideoSection";
import Solutions from "../components/Solutions";
import OurStory from "../components/OurStory";

configureAnchors({ offset: 0, scrollDuration: 1000 });
class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <VideoSection />
        <Solutions />
        {/* <OurStory />
        <Slider />
        <TeamCard /> */}
        <Contact />
        <Footer />
      </div>
    );
  }
}
export default HomePage;
