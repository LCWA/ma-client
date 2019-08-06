import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import '../styles/Blog.css';
import { Card, CardImg, CardText, CardBody,
     Button } from 'reactstrap';
import Firstimg from '../images/Why_Mission_Automate.jpg';
import Secondimg from '../images/3_steps_process.jpg';
import Thirdimg from '../images/What_do_you_get.jpeg';

class Blog extends Component {
    render() {
        return(
            <ScrollableAnchor id={'AboutUs'}>
            <div >
    <div className="my-5 container blog">
        <h1 className="blog-title mb-5">Mission Automate</h1>
        <Card className="">
        <CardImg top width="100%" src={Firstimg} alt="Card image cap" />
        <CardBody className="">
            <CardText class="card-align"><h2>Why Mission Automate?</h2>
            We are passionate about process improvement.<br></br>
            Mission Automate started out from the accelerating need of companies to automate their
            processes. We believe that automation liberates companies from redundant tasks and allows
            them to focus on what’s important for them.</CardText>
            <div className="mt-3"><Button className="btn btn-primary my-2 my-sm-0">Learn More</Button></div>
        </CardBody>
        </Card>
        <Card className="">
        <CardBody className="">
            <CardText><h2>How do we do it?</h2>
            3 simple steps:<br></br>
            1) We get in touch with you and examine your day to day activities<br></br>
            2) We identify the repetitive tasks that take up most of your time<br></br>
            3) We design an automated process for you</CardText>
            <div className="mt-3"><Button className="btn btn-primary my-2 my-sm-0">Learn More</Button></div>
        </CardBody>
        <CardImg  top width="100%" src={Secondimg} alt="Card image cap" />
        </Card>
        <Card className="">
        <CardImg top width="100%" src={Thirdimg} alt="Card image cap" />
        <CardBody width="100%" className="">
            <CardText><h2>What do you get?</h2>
            A software solution customized to your needs</CardText>
            <div className="mt-3"><Button className="btn btn-primary my-2 my-sm-0">Learn More</Button></div>
        </CardBody>
        </Card>
    </div>
</div>
        
          </ScrollableAnchor>
        );
    }
}

export default Blog;