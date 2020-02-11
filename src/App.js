import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./page/HomePage";

import "./App.css";
import "../src/styles/responsive/safari-specific.css";
import "../src/styles/responsive/edge-specific.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={HomePage} />
      </BrowserRouter>
    );
  }
}

export default App;
