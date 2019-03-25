import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import alex from '../Alex.jpg';
import '../styles/BookASession.css';
import moment from 'moment';
import ReactTimeslotCalendar from 'react-timeslot-calendar';

class BookASession extends Component {
    render() {
        return(
            <div>
                <div className="session-wrapper text-left mt-5">
                <Card>
                    <CardImg top width="100%" src={alex} alt="Alex's picture" className="alex-image" />
                    <CardBody>
                    <h1><CardTitle>Software Developer Coach</CardTitle></h1>
                    <CardText className="col-2">Book a session with me if you want to take your coding career to the next level</CardText>
                    <Button className="btn btn-primary my-2 my-sm-0">BOOK NOW</Button>
                    <ReactTimeslotCalendar
                    initialDate={moment().format()}
                    />
                    </CardBody>
                </Card>
                
                </div>
            </div>
        )
    }
}

export default BookASession;