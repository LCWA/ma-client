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
                                    <CardImg top width="100%" src= {Firstimg} alt="Team Image Cap" />
                                        <CardBody>
                                            <CardText>
                                                Alex
                                            </CardText>                                                                      
                                        </CardBody>                                 
                                </Card>
                            </CardLink>
                        </Col>  

                        <Col>
                            <CardLink href = "https://www.linkedin.com/in/silvanagagu/">
                                <Card className="team-card">
                                    <CardImg top width="100%" src= {Secondimg} alt="Team Image Cap" />
                                        <CardBody>
                                            <CardText>
                                                Silvana
                                            </CardText>
                                        </CardBody>                                 
                                </Card>
                            </CardLink>
                        </Col> 
              
                        <Col>
                            <CardLink href=" https://www.linkedin.com/in/noka-kipiani/" >
                                <Card className="team-card">
                                    <CardImg top width="100%" src= {Thirdimg} alt="Team Image Cap" />
                                        <CardBody>
                                            <CardText>
                                                Noka
                                            </CardText>
                                    </CardBody>                                
                                </Card>
                            </CardLink>
                        </Col>   
 
                        <Col>
                            <CardLink href="https://www.linkedin.com/in/nikolina-po%C5%BEega-988216186/" >
                                <Card className="team-card">
                                    <CardImg top width="100%" src= {Fouthimg} alt="Team Image Cap" />
                                        <CardBody>
                                            <CardText>
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
