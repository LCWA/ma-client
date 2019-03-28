import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Button } from 'reactstrap';
import '../styles/Service.css';

class Service extends Component {
    render() {
        return(
            <div>
                <div className="container mt-5">
                    <h2 className="t-center">Services</h2>
                    <p className="t-center mb-5 service-desc">Take a look of my our services for individual and corporates</p>
                   <div className="d-flex pt-5 justify-content-between align-items-start">
                        <Card className="mr-5">
                            <CardImg top width="100%" src="https://www.virversity.com/images/dowell/courses/createacourse/oc/courseintroimage.jpg" alt="Card image cap" />
                            <CardBody className="t-center">
                                <CardTitle>LCWA </CardTitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button className="btn btn-primary my-2 my-sm-0 mt-3">learn more</Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg top width="100%" src="https://www.virversity.com/images/dowell/courses/createacourse/oc/courseintroimage.jpg" alt="Card image cap" />
                            <CardBody className="t-center">
                                <CardTitle>LCWA </CardTitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button className="btn btn-primary my-2 my-sm-0 mt-3">learn more</Button>
                            </CardBody>
                        </Card>
                    </div>
                </div>
          </div>
        );
    }
}

export default Service;