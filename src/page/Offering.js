import React, { Component } from 'react';
import Header from '../components/Header';
import Service from '../components/Service';
import Social from '../components/Social';

class OfferingPage extends Component {
    render() {
        return (
            <div >
                <Header/>
                <Service/>
                <Social/>
            </div>
        );
    }
}

 export default OfferingPage;
