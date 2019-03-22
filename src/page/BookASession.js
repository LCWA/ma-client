import React, { Component } from 'react';
import Layout from '../components/Layout';
import BookASession from '../components/BookASession';

class HomePage extends Component {
    render() {
        return(
            <div>
                <Layout />
                <BookASession />
            </div>
        );
    }
}

export default HomePage;