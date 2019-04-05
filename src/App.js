import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './page/HomePage';
import OnlineWorkshop from './page/OnlineWorkshop';
import Offering from './page/Offering';
import BookASession from './page/BookASession';
import './App.css';



class App extends Component {
    render() {
        return (
            <BrowserRouter> 
              <Route exact path="/" component={HomePage} />
              <Route path="/OnlineWorkshop" component={OnlineWorkshop} />
              <Route path="/Offering" component={Offering} />
              <Route path="/BookASession" component={BookASession} />
              <Route path="/Blog" component={Blog} />
            </BrowserRouter>
        );
    }
}

export default App;
