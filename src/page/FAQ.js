import React, { Component } from 'react';
import Header from '../components/Header';
import FAQ from '../components/FAQ';
import Social from '../components/Social';

class FAQPage extends Component {
    render() {
        return (
            <div >
                <Header/>
                <FAQ/>
                <Social/>
            </div>
        );
    }
}

 export default FAQPage;
