import React, { Component } from 'react';
import Layout from '../components/Layout';
import OnlineWorkshop from '../components/OnlineWorkshop';
import Social from '../components/Social';


class OnlineworkshopPage extends Component {
    render() {
        return (
            <div >
                <Layout/>
                <OnlineWorkshop/>
                <Social/>
            </div>
        );
    }
}

 export default OnlineworkshopPage;
