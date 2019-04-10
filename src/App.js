import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './page/HomePage';
import OnlineWorkshop from './page/OnlineWorkshop';
import BookASession from './page/BookASession';
import Offering from './page/Offering';
import './App.css';



class App extends Component {
    render() {
        return (
            <BrowserRouter> 
              <Route exact path="/" component={HomePage} />
              <Route path="/OnlineWorkshop" component={OnlineWorkshop} />
              <Route path="/BookASession" component={BookASession} />
              <Route path="/Offering" component={Offering} />
            </BrowserRouter>
        );
    }
}

export default App;
