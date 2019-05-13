import React, { Component } from 'react';
import Header from '../components/Header';
import OnlineWorkshop from '../components/OnlineWorkshop';
import Social from '../components/Social';


class OnlineworkshopPage extends Component {
    render() {
        return (
            <div >
                <Header/>
                <OnlineWorkshop/>
                <Social/>
            </div>
        );
    }
}

 export default OnlineworkshopPage;
