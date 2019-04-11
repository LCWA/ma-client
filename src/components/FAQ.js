import React, { Component } from 'react';
import '../styles/Blog.css';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Button } from 'reactstrap';
class FAQ extends Component {
    render() {
        return(
            <div>
               <div className="my-5 container blog">
                    <h2 className="blog-title mb-5">Frequently Asked Questions</h2>
                    <Card className="my-5">
                    <CardImg top width="100%" src="https://www.virversity.com/images/dowell/courses/createacourse/oc/courseintroimage.jpg" alt="Card image cap" />
                    <CardBody className="w-75">
                        <CardText><strong>1. I would like to become a good programmer, what should I do?</strong></CardText>
                        <CardText><strong>Start by taking a language you like (C#, JavaScript, Python etc.) and then <strong>spend some time</strong> <strong>every day programming and reading about programming</strong>. Feel free to reach out if you have any questions along the way (email: <a href="mailto:alex@letscodewithalex.com">alex@letscodewithalex.com</a>)</strong></CardText>
                    </CardBody>
                    </Card>
                    <Card className="my-5">
                    <CardBody className="w-75">
                        <CardText></CardText>
                        
                    </CardBody>
                    
                    </Card>
                    <Card className=" my-5">
                    
                    <CardBody className="w-75">
                        <CardText></CardText>
                        <div className="mt-3"><Button className="btn btn-primary my-2 my-sm-0">learn more</Button></div>
                    </CardBody>
                    </Card>
                </div>
          </div>
        );
    }
}

export default FAQ;