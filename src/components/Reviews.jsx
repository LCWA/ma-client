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
          <div className="reviews-title">
            <h1>Reviews</h1>
          </div>
          <OwlCarousel
            className="owl-theme"
            margin={10}
            nav={true}
            center={true}
            items={1}
          >
            <div className="review">
              <div className="reviews-comment body-text">
                <blockquote className="review-quote">
                  We will be continuing to do business with Mission Automate as
                  our manufacturing operations run smoothly for labeling our
                  American made products and have been for years because of
                  them. The peace of mind that comes with their quality of work,
                  knowing what you pay for will run exactly as you wish, allows
                  us to focus on other fronts of our business more adamantly. We
                  have worked with Mission Automate for more than 4 years and we
                  recommend them to anyone who is in need of their services.
                  Always quick to respond, happy to help and priced fairly.
                </blockquote>
              </div>

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
            <div className="review">
              <div className="reviews-comment two body-text">
                <blockquote className="review-quote two">
                  I hired Mission Automate to create a website for my business
                  and to do my Internet marketing afterwards, and they did an
                  exceptional job. I am really happy with my website, it's
                  beautiful and it's visible they spent a great deal of effort
                  to make it. They are very professional, patient, and give
                  their best to please their customers. I recommend them
                  wholeheartedly.
                </blockquote>
              </div>

              <div className="review-footer">
                <div className="reviewer-name two">
                  <h3>Forest Creations</h3>
                </div>
                <div className="reviewer-role two">
                  <h4>Founder</h4>
                </div>
                <div className="reviewer-company two">
                  <h4>
                    <a href="http://www.forest-creations.com/">
                      http://www.forest-creations.com/
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
