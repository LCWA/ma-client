import React, { Component } from 'react';
import {Card, CardImg, CardText, CardBody, Row, Col, CardLink } from 'reactstrap';
import '../styles/Team.css';    
import Firstimg from '../images/Alex.jpg';
import Secondimg from '../images/Silvana.png';
import Thirdimg from '../images/noka.jpg';
import Fouthimg from '../images/Nina.jpg';

class TeamCard extends Component {
    render() {
        return (
            <div>
                <div className="container-box">
                    <Row ClassName="row 1">
 
                        <Col>
                            <CardLink href ="https://www.linkedin.com/in/panait/">
                                <Card className="team-card">
                                    <CardImg src= {Firstimg} className="team-image-cap" />
                                        <CardBody>
                                            <CardText className="team-card-text">
                                                Alex
                                            </CardText>                                                                      
                                        </CardBody>                                 
                                </Card>
                            </CardLink>
                        </Col>  

                        <Col>
                            <CardLink href = "https://www.linkedin.com/in/silvanagagu/">
                                <Card className="team-card">
                                    <CardImg src= {Secondimg} className="team-image-cap" />
                                        <CardBody>
                                            <CardText className="team-card-text">
                                                Silvana
                                            </CardText>
                                        </CardBody>                                 
                                </Card>
                            </CardLink>
                        </Col> 
              
                        <Col>
                            <CardLink href=" https://www.linkedin.com/in/noka-kipiani/" >
                                <Card className="team-card">
                                    <CardImg src= {Thirdimg} className="team-image-cap" />
                                        <CardBody>
                                            <CardText className="team-card-text">
                                                Noka
                                            </CardText>
                                    </CardBody>                                
                                </Card>
                            </CardLink>
                        </Col>   
 
                        <Col>
                            <CardLink href="https://www.linkedin.com/in/nikolina-po%C5%BEega-988216186/" >
                                <Card className="team-card">
                                    <CardImg src= {Fouthimg} className="team-image-cap" />
                                        <CardBody>
                                            <CardText className="team-card-text">
                                                Nikolina
                                            </CardText>
                                        </CardBody>                            
                                </Card>
                            </CardLink>
                        </Col>  
          
                  </Row>
                </div>
            </div>
              
        );
    }
}

export default TeamCard;
