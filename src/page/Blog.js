import React, { Component } from 'react';
import Header from '../components/Header';
import Blog from '../components/Blog';
import Social from '../components/Social';

class BlogPage extends Component {
    render() {
        return (
            <div >
                <Header/>
                <Blog/>
                <Social/>
            </div>
        );
    }
}

 export default BlogPage;
