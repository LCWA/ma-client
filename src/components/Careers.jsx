import React, { Component } from "react";
import "../styles/Careers.scss";
import CareersHeader from "./CareersHeader";
import careerspeople from "../images/careers/careers-people.png";

class Careers extends Component {
  render() {
    return (
      <div>
        <CareersHeader />
        <div className="careers-container" id="careers">
          <h1 className="careers-title">Careers</h1>
          <div className="content">
            <img
              src={careerspeople}
              className="careers-container__image"
              alt="people conversing animated"
              hspace="300"
            />
            <div className="careers-container__text">
              <h2>Software Developer – Internship (WFH)</h2>
              <p>
                We are looking for a Full Stack Developer Intern who is eager to
                gain experience and willing to learn engineering best practices
                and contribute production level code during your internship.
                They will be part of a cross-functional team that is responsible
                for the full software development life cycle, from conception to
                deployment. This is a position where you will work on real
                projects following an agile methodology. The ideal candidate is
                a junior developer who would benefit from the opportunity to
                learn a wide variety of skills used in the current software
                engineering industry.
              </p>
              <p>
                Software Development Skills:{" "}
                <ul>
                  <li>
                    Knowledge of at least one front-end languages (e.g.
                    HTML/CSS, JavaScript, XML, jQuery)
                  </li>{" "}
                  <li>
                    Knowledge of at least one back-end languages (e.g. C#, Java,
                    Python)
                  </li>{" "}
                  <li>
                    Familiarity with databases (e.g. MySQL, MongoDB), web
                    servers (e.g. Apache)
                  </li>{" "}
                  <li>and UI/UX design</li>
                </ul>
                Responsibilities:
                <ul>
                  <li>
                    Develop and manage well-functioning databases and
                    applications
                  </li>{" "}
                  <li>
                    Test software to ensure responsiveness and efficiency{" "}
                  </li>{" "}
                  <li>Troubleshoot, debug and upgrade software </li>
                </ul>
                Benefits:{" "}
                <ul>
                  <li>Get hands-on experience in a tech startup</li>
                  <li>
                    Be part of an international team of software developer
                    experts
                  </li>{" "}
                  <li>
                    Get exposure to a lot of different industries and projects
                  </li>
                </ul>
                <p>
                  Compensation: This internship is a part-time UNPAID position.
                  20 hours/week. Times have some flexibility dependent on chosen
                  student's schedule. We will provide any documentation for the
                  student to receive school credit.
                </p>
                <p>
                  If you are interested in this position please send us your CV
                  at{" "}
                  <a href="mailto:alex@missionautomate.com">
                    alex@missionautomate.com
                  </a>{" "}
                  More information about who we are and what we do can be found
                  here{" "}
                  <a href="https://www.missionautomate.com/">
                    https://www.missionautomate.com
                  </a>{" "}
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Careers;
