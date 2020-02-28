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
import ReactFullpage from "@fullpage/react-fullpage";

class HomePage extends Component {
  render() {
    return (
      <div>
        <ReactFullpage
          scrollingSpeed={1000}
          navigation={true}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section">
                  <Header />
                  <VideoSection />
                </div>
                <div className="section">
                  <Solutions />
                  <SeparatorThree />
                </div>
                <div className="section">
                  <OurStory />
                  <SeparatorTwo />
                </div>
                <div className="section">
                  <Team />
                  <Separator />
                </div>
                <div className="section">
                  <Portfolio />
                  <SeparatorThree />
                </div>
                <div className="section">
                  <Reviews />
                  <SeparatorTwo />
                </div>
                <div className="section">
                  <Contact />
                  <Footer />
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        ></ReactFullpage>
      </div>
    );
  }
}
export default HomePage;
