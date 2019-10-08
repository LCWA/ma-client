import React, { Component } from "react";
import Blog from "../components/Blog";
import Header from "../components/Header";
import Slider from "../components/Slider";
import TeamCard from "../components/TeamCard";
import Contact from "../components/Contact";
import Spinning from "../components/Spinning";
import NewFooter from "../components/NewFooter";
import { configureAnchors } from "react-scrollable-anchor";
import VideoSection from "../components/VideoSection";

configureAnchors({ offset: -120, scrollDuration: 1000 });
class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <VideoSection />
        <Slider />
        <Blog />
        <TeamCard />
        <Contact />
        <Spinning />
        <NewFooter />
      </div>
    );
  }
}
export default HomePage;
