import React, { Component } from 'react';
import Layout from '../components/Layout';
import Blog from '../components/Blog';
import Newsletter from '../components/Newsletter';
import Social from '../components/Social';
import Footer from '../components/Footer';
class HomePage extends Component {
    render() {
        return (
            <div >
                <Layout/>
                <Blog/>
                <Newsletter/>
                <Social/>
                <Footer/>
            </div>
        );
    }
}

 export default HomePage;
