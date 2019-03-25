import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Button } from 'reactstrap';
    import '../styles/Workshop.css';

class OnlineWorkshop extends Component {
    render() {
        return(
            <div>
                <div className="workshop-wrapper text-center mt-5">
                    <h2 className="workshop-title">Online Workshop</h2>
                    <p className="workshop-text">Take a look of my course online and book it now!</p>
                    <Card>
                    <CardImg top width="100%" src="https://www.virversity.com/images/dowell/courses/createacourse/oc/courseintroimage.jpg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>LCWA </CardTitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button className="btn btn-primary my-2 my-sm-0">learn more</Button>
                    </CardBody>
                    </Card>
                </div>
          </div>
        );
    }
}

export default OnlineWorkshop;