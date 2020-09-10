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
import ObjectionCo_1 from "../images/projects/objectionco/ObjectionCo_1.PNG";
import ObjectionCo_22 from "../images/projects/objectionco/ObjectionCo_22.PNG";

import Modal from "react-responsive-modal";

import "../styles/Portfolio.css";
import ModalWindow from "./ModalWindow";
import ModalAutoABC from "./ModalAutoABC";
import ModalAI from "./ModalAI";
import ModalEastWest from "./ModalEastWest";

class Portfolio extends Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  onOpenSecondModal = () => {
    this.setState({ open1: true });
  };

  onCloseSecondModal = () => {
    this.setState({ open1: false });
  };

  onOpenThirdModal = () => {
    this.setState({ open2: true });
  };

  onCloseThirdModal = () => {
    this.setState({ open2: false });
  };
  onOpenFourthModal = () => {
    this.setState({ open3: true });
  };

  onCloseFourthModal = () => {
    this.setState({ open3: false });
  };

  render() {
    const { open } = this.state;
    const { open1 } = this.state;
    const { open2 } = this.state;
    const { open3 } = this.state;
    return (
      <div className="portfolio-wrapper" id="Portfolio">
        <div className="portfolio-title">
          <h1>Portfolio</h1>
        </div>
        <Tabs forceRenderTabPanel={true} defaultFocus={true}>
          <TabList>
            <Tab>
              <button className="btn btn-primary my-2 my-sm-0">
                <div className="tab artificiall">Artificial Intelligence </div>
              </button>
            </Tab>
            <Tab>
              <button className="btn btn-primary my-2 my-sm-0">
                <div className="tab customized">Customized Software</div>
              </button>
            </Tab>

            <Tab>
              <button className="btn btn-primary my-2 my-sm-0">
                <div className="tab automation">Automation Tools</div>
              </button>
            </Tab>
            <Tab>
              <button className="btn btn-primary my-2 my-sm-0">
                <div className="tab development">Web Development</div>
              </button>
            </Tab>
          </TabList>

          <TabPanel>
            <div className="project-wrapper">
              <div className="portfolio-rows">
                <div className="portfolio-column">
                  <img src={ObjectionCo_1} className="project-image" />
                  <img src={ObjectionCo_22} className="project-image" />
                </div>
              </div>
              <button
                class="btn btn-primary my-2 my-sm-0 portfolio-btn"
                onClick={this.onOpenSecondModal}
              >
                Read more about project
              </button>
              <Modal open={open1} onClose={this.onCloseSecondModal} center>
                <ModalAI />
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
                onClick={this.onOpenModal}
              >
                Read more about project
              </button>
              <Modal open={open} onClose={this.onCloseModal} center>
                <ModalEastWest />
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
                onClick={this.onOpenThirdModal}
              >
                Read more about project
              </button>
              <Modal open={open2} onClose={this.onCloseThirdModal} center>
                <ModalAutoABC />
              </Modal>
            </div>
          </TabPanel>
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
                onClick={this.onOpenFourthModal}
              >
                Read more about project
              </button>
              <Modal open={open3} onClose={this.onCloseFourthModal} center>
                <ModalWindow />
              </Modal>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default Portfolio;
