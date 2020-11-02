import HttpsRedirect from "react-https-redirect";
import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GA from "./utils/GoogleAnalytics";
import HomePage from "./page/HomePage";

import "./App.css";
import "../src/styles/responsive/safari-specific.css";
import "../src/styles/responsive/edge-specific.css";

class App extends Component {
  render() {
    return (
      <HttpsRedirect>
        <BrowserRouter>
          {GA.init() && <GA.RouteTracker />}
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </BrowserRouter>
      </HttpsRedirect>
    );
  }
}

export default App;
