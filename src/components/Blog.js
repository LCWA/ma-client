import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import '../styles/Blog.css';
import { Card, CardImg, CardText, CardBody,
     Button } from 'reactstrap';

class Blog extends Component {
    render() {
        return(
            <ScrollableAnchor id={'AboutUs'}>
            <div >
               <div className="my-5 container blog">
                    <h2 className="blog-title mb-5">Mission Automate</h2>
                    <Card className="my-5">
                    <CardImg top width="100%" src="https://www.virversity.com/images/dowell/courses/createacourse/oc/courseintroimage.jpg" alt="Card image cap" />
                    <CardBody className="w-75">
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content</CardText>
                        <div className="mt-3"><Button className="btn btn-primary my-2 my-sm-0">learn more</Button></div>
                    </CardBody>
                    </Card>
                    <Card className="my-5">
                    <CardBody className="w-75">
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content</CardText>
                        <div className="mt-3"><Button className="btn btn-primary my-2 my-sm-0">learn more</Button></div>
                    </CardBody>
                    <CardImg  top width="100%" src="https://www.virversity.com/images/dowell/courses/createacourse/oc/courseintroimage.jpg" alt="Card image cap" />
                    </Card>
                    <Card className=" my-5">
                    <CardImg top width="100%" src="https://www.virversity.com/images/dowell/courses/createacourse/oc/courseintroimage.jpg" alt="Card image cap" />
                    <CardBody className="w-75">
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content</CardText>
                        <div className="mt-3"><Button className="btn btn-primary my-2 my-sm-0">learn more</Button></div>
                    </CardBody>
                    </Card>
                </div>
          </div>
          </ScrollableAnchor>
        );
    }
}

export default Blog;