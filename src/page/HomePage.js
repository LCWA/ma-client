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
import Separator from "../components/Separator";
import SeparatorTwo from "../components/SeparatorTwo";
import SeparatorThree from "../components/SeparatorThree";
import $ from "jquery";

$(document).ready(function() {
  $("#pagepiling").pagepiling({
    menu: null,
    direction: "vertical",
    verticalCentered: true,
    sectionsColor: [],
    anchors: [],
    scrollingSpeed: 700,
    easing: "swing",
    loopBottom: false,
    loopTop: false,
    css3: true,
    navigation: {
      textColor: "#000",
      bulletsColor: "#000",
      position: "right",
      tooltips: ["section1", "section2", "section3", "section4"]
    },
    normalScrollElements: null,
    normalScrollElementTouchThreshold: 5,
    touchSensitivity: 5,
    keyboardScrolling: true,
    sectionSelector: ".section",
    animateAnchor: false,

    //events
    onLeave: function(index, nextIndex, direction) {},
    afterLoad: function(anchorLink, index) {},
    afterRender: function() {}
  });
});

class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div id="pagepiling">
          <div className="section">
            <VideoSection />
          </div>
          <div className="section">
            <Solutions />
          </div>
          <SeparatorThree />
          <OurStory />
          <SeparatorTwo />
          <Team />
          <Separator />
          <Portfolio />
          <SeparatorThree />
          <Reviews />
          <SeparatorTwo />
          <Contact />
          <Footer />
        </div>
      </div>
    );
  }
}
export default HomePage;
