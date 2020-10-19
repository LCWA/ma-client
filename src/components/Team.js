import React, { Component } from "react";
import "../styles/Team.css";
import "../styles/reusable/OwlCarousel.css";
import Firstimg from "../images/team/Alex.jpg";
import Secondimg from "../images/team/Silvana.jpg";
import Thirdimg from "../images/team/Alex Malan.jpg";
import Fourthimg from "../images/team/Nikolina.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

class Team extends Component {
  state = {
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  render() {
    return (
      <div className="team-container" id="Team">
        <div className="team">
          <h1 className="team-title">Our Team</h1>
          <h3 className="team-description">
            We are focusing on providing high-quality results, within your
            timeframe, using agile methodologies. Your satisfaction is
            quintessential for us – providing value and helping you and your
            company achieve your metrics is the most important part of what we
            do.
          </h3>
        </div>
        <div className="team-wrapper">
          <OwlCarousel
            className="owl-theme"
            margin={10}
            nav={true}
            responsiveClass={true}
            responsive={this.state.responsive}
          >
            <div className="person">
              <img
                src={Firstimg}
                alt="Team member Alex"
                className="team-img"
              ></img>
              <h2 className="member-name">
                <a
                  href="https://www.linkedin.com/in/panait/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Alex Panait
                </a>
              </h2>
              <h3 className="member-role">CEO &amp; Principal Architect</h3>
              <p className="member-description body-text">
                Alex has a master in Artificial Intelligence and 20+ years of
                expertise in most popular programming languages. He has been
                working in professional environments ranging from Fortune 500
                companies to startups.
              </p>
            </div>
            <div className="person">
              <img
                src={Secondimg}
                alt="Team member Silvana"
                className="team-img"
              ></img>
              <h2 className="member-name">
                <a
                  href="https://www.linkedin.com/in/silvanagagu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Silvana Gagu
                </a>
              </h2>
              <h3 className="member-role">Project Delivery Manager</h3>
              <p className="member-description body-text">
                Silvana has previous experience as a business analyst and
                project manager. She has an innate talent for helping teams stay
                organized and efficient in complex projects with rapidly
                changing priorities.
              </p>
            </div>
            <div className="person">
              <img
                src={Fourthimg}
                alt="Team member Nikolina"
                className="team-img"
              ></img>
              <h2 className="member-name">
                <a
                  href="https://www.linkedin.com/in/nikolina-po%C5%BEega-988216186/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nikolina Požega
                </a>
              </h2>

              <h3 className="member-role">Lead Architect</h3>
              <p className="member-description body-text">
                Experienced in quickly adapting to new technologies, Nikolina
                has experience with a variety of programming languages. Her
                focus is dedicated to full stack development.
              </p>
            </div>
            <div className="person">
              <img
                src={Thirdimg}
                alt="Team member Alex"
                className="team-img"
              ></img>
              <h2 className="member-name">
                <a
                  href="https://www.linkedin.com/in/malanalex/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Alex Malan
                </a>
              </h2>
              <h3 className="member-role">Software Engineer</h3>
              <p className="member-description body-text">
                Alex has a CS background with a master in Cyber Security and
                experience in various technologies from Java to .NET Core. He is
                eager to learn and improve on multiple subjects and especially
                on Artificial Intelligence.
              </p>
            </div>
          </OwlCarousel>
        </div>
      </div>
    );
  }
}

export default Team;
