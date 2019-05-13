import React, { Component } from 'react';
import Header from '../components/Header';
import BookASession from '../components/BookASession';
import Social from '../components/Social';

class BookasessionPage extends Component {
    render() {
        return(
            <div>
                <Header />
                <BookASession />
                <Social />
            </div>
        );
    }
}

export default BookasessionPage;