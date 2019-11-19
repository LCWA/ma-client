import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScrollableAnchor from "react-scrollable-anchor";

import "../styles/Reviews.css";

class Reviews extends Component {
  render() {
    return (
      <ScrollableAnchor id={"Reviews"}>
        <div className="reviews-wrapper">
          <OwlCarousel
            className="owl-theme"
            margin={10}
            nav={true}
            center={true}
            items={1}
          >
            <div className="review">
              <div className="reviews-title">
                <h1>Reviews</h1>
              </div>
              <blockquote>
                <div className="reviews-comment body-text">
                  <span id="review-first-line">
                    We will be continuing to do business with Mission Automate
                  </span>{" "}
                  as our manufacturing operations run smoothly for labeling our
                  American made products and have been for years because of
                  them. The peace of mind that comes with their{" "}
                  <span id="review-second-line">quality of work</span>, knowing
                  what you pay for will run exactly as you wish, allows us to
                  focus on other fronts of our business more adamantly. We have
                  worked with Mission Automate{" "}
                  <span id="review-third-line">for more than 4 years</span> and
                  <span id="review-fourth-line">
                    {" "}
                    we recommend them to anyone
                  </span>{" "}
                  who is in need of their services. Always quick to respond,
                  happy to help and priced fairly.
                </div>
              </blockquote>
              <div className="review-footer">
                <div className="reviewer-name">
                  <h3>Tactical Scorpion Gear</h3>
                </div>
                <div className="reviewer-role">
                  <h4>Co-founder</h4>
                </div>
                <div className="reviewer-company">
                  <h4>
                    <a href="https://tacticalscorpiongear.com/">
                      https://tacticalscorpiongear.com/
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </ScrollableAnchor>
    );
  }
}

export default Reviews;
