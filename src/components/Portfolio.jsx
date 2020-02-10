/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import React, { Component } from "react";

import one from "../images/projects/1.jpg";
import two from "../images/projects/2.jpg";
import three from "../images/projects/3.jpg";
import automation1 from "../images/projects/autoabc/automation1.jpg";
import automation2 from "../images/projects/autoabc/automation2.jpg";
import customized1 from "../images/projects/eastwestconsolidated/customized1.jpg";
import customized2 from "../images/projects/eastwestconsolidated/customized2.png";

import Modal from "react-responsive-modal";

import "../styles/Portfolio.css";
import ModalWindow from "./ModalWindow";
import ModalAutoABC from "./ModalAutoABC";
import ModalEastWest from "./ModalEastWest";

class Portfolio extends Component {
  state = {
    openModal1: false,
    openModal2: false
  };

  onOpenModal = () => {
    this.setState({ openModal1: true });
  };

  onCloseModal = () => {
    this.setState({ openModal1: false });
  };

  onOpenSecondModal = () => {
    this.setState({ openModal2: true });
  };

  onCloseSecondModal = () => {
    this.setState({ openModal2: false });
  };

  onOpenThirdModal = () => {
    this.setState({ openModal3: true });
  };

  onCloseThirdModal = () => {
    this.setState({ openModal3: false });
  };

  render() {
    return (
      <div className="portfolio-wrapper">
        <div className="portfolio-title">
          <h1>Portfolio</h1>
        </div>
        <Tabs forceRenderTabPanel={true} defaultFocus={true}>
          <TabList>
            <Tab>
              <button className="btn btn-primary my-2 my-sm-0">
                <div className="tab development">Web Development</div>
              </button>
            </Tab>
            <Tab>
              <button className="btn btn-primary my-2 my-sm-0">
                <div className="tab automation">Automation Tools</div>
              </button>
            </Tab>

            <Tab>
              <button className="btn btn-primary my-2 my-sm-0">
                <div className="tab customized">Customized Software</div>
              </button>
            </Tab>
          </TabList>

          <TabPanel>
            <div className="project-wrapper">
              <div className="portfolio-rows">
                <div className="portfolio-column">
                  <img src={one} className="project-image" />
                  <img src={two} className="project-image" />
                  <img src={three} className="project-image" />
                </div>
              </div>
              <button
                class="btn btn-primary my-2 my-sm-0 portfolio-btn"
                onClick={() =>
                  this.setState({ openModal1: true, openModal2: false })
                }
              >
                Forest Creations
              </button>
              <Modal
                open={this.state.openModal1}
                onClose={this.onCloseModal}
                center
              >
                <ModalWindow />
              </Modal>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="project-wrapper">
              <div className="portfolio-rows">
                <div className="portfolio-column">
                  <img src={automation1} className="project-image" />
                  <img src={automation2} className="project-image" />
                </div>
              </div>

              <button
                class="btn btn-primary my-2 my-sm-0 portfolio-btn"
                onClick={() =>
                  this.setState({ openModal2: true, openModal1: false })
                }
              >
                AutoABC
              </button>
              <Modal
                open={this.state.openModal2}
                onClose={this.onCloseSecondModal}
                center
              >
                <ModalAutoABC />
              </Modal>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="project-wrapper">
              <div className="portfolio-rows">
                <div className="portfolio-column">
                  <img src={customized1} className="project-image" />
                  <img src={customized2} className="project-image" />
                </div>
              </div>
              <button
                class="btn btn-primary my-2 my-sm-0 portfolio-btn"
                onClick={() =>
                  this.setState({
                    openModal3: true,
                    openModal1: false,
                    openModal2: false
                  })
                }
              >
                East West Consolidated
              </button>
              <Modal
                open={this.state.openModal3}
                onClose={this.onCloseThirdModal}
                center
              >
                <ModalEastWest />
              </Modal>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default Portfolio;
