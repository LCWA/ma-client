import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './page/HomePage';
import OnlineWorkshop from './page/OnlineWorkshop';
import Blog from './page/Blog';
import Offering from './page/Offering';
import BookASession from './page/BookASession';
import FAQ from './page/FAQ';
import './App.css';



class App extends Component {
    render() {
        return (
            <BrowserRouter> 
              <Route exact path="/" component={HomePage} />
              <Route path="/OnlineWorkshop" component={OnlineWorkshop} />
              <Route path="/BookASession" component={BookASession} />
              <Route path="/Offering" component={Offering} />
              <Route path="/Blog" component={Blog} />
              <Route path="/FAQ" component={FAQ} />
            </BrowserRouter>
            
        );
    }
}

export default App;
