import React, { Component } from "react";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { configureAnchors } from "react-scrollable-anchor";
import VideoSection from "../components/VideoSection";
import Solutions from "../components/Solutions";
import OurStory from "../components/OurStory";
import Team from "../components/Team";

configureAnchors({ offset: 0, scrollDuration: 1000 });
class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <VideoSection />
        <Solutions />
        <Team />
        <Contact />
        {/* <OurStory />
        <Slider />
        <TeamCard /> */}
        <Footer />
      </div>
    );
  }
}
export default HomePage;
