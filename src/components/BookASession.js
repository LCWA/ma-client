import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import alex from '../Alex.jpg';
import '../styles/BookASession.css';
import LoadableComponent from './LoadableComponent';

class BookASession extends Component {
   
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 session-wrapper text-left mt-5">
                        <Card>
                            <CardImg top width="100%" src={alex} alt="Alex's picture" className="alex-image " />
                            <CardBody className="d-flex flex-column ">
                                <h1> <CardTitle>Software Developer Coach</CardTitle> </h1>
                                <CardText className="w-lg-75 w-md-100">Book a session with me if you want to take your coding career to the next level</CardText>
                                <div className="mt-3">
                                    <Button className="btn btn-primary my-2 my-sm-0">BOOK NOW</Button>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                    <LoadableComponent  />
                </div>
            </div>
        );
    }
}


export default BookASession;