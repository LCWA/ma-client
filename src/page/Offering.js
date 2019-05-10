import React, { Component } from 'react';
import Layout from '../components/Layout';
import Service from '../components/Service';
import Newsletter from '../components/Newsletter';
import Social from '../components/Social';

class OfferingPage extends Component {
    render() {
        return (
            <div >
                <Layout/>
                <Service/>
                <Newsletter/>
                <Social/>
            </div>
        );
    }
}

 export default OfferingPage;
