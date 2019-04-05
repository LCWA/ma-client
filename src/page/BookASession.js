import React, { Component } from 'react';
import Layout from '../components/Layout';
import BookASession from '../components/BookASession';
import Social from '../components/Social';

class HomePage extends Component {
    render() {
        return(
            <div>
                <Layout />
                <BookASession />
                <Social />
            </div>
        );
    }
}

export default HomePage;