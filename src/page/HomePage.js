import React, { Component } from "react";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import VideoSection from "../components/VideoSection";
import Solutions from "../components/Solutions";
import OurStory from "../components/OurStory";
import Team from "../components/Team";
import Reviews from "../components/Reviews";
import Portfolio from "../components/Portfolio";
import WhyUs from "../components/WhyUs";
import SeparatorTwo from "../components/SeparatorTwo";
import SeparatorThree from "../components/SeparatorThree";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <VideoSection />
        <Solutions />
        <SeparatorThree />
        <OurStory />
        <SeparatorTwo />
        <Team />
        <SeparatorThree />
        <WhyUs />
        <SeparatorTwo />
        <Portfolio />
        <SeparatorThree />
        <Reviews />
        <SeparatorTwo />
        <Contact />
        <Footer />
      </div>
    );
  }
}
export default HomePage;
