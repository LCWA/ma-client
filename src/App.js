import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import HomePage from './page/HomePage';
import Blog from './page/Blog';
import Contact from './page/HomePage';
import './App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter> 
              <Route exact path="/" component={HomePage} />
              <Route path="/Blog" component={Blog} />
              <Route path="/ContactUs" component={Contact} />
            </BrowserRouter>
            
        );
    }
}

export default App;
