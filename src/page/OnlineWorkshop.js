import React, { Component } from 'react';
import Layout from '../components/Layout';
import OnlineWorkshop from '../components/OnlineWorkshop';
import Newsletter from '../components/Newsletter';
import Social from '../components/Social';
import AboutAlex from '../components/AboutAlex';

class OnlineworkshopPage extends Component {
    render() {
        return (
            <div >
                <Layout/>
                <OnlineWorkshop/>
                <Newsletter/>
                <AboutAlex />
                <Social/>
            </div>
        );
    }
}

 export default OnlineworkshopPage;
