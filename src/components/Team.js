import React, { Component } from 'react';
import '../styles/Team.css';
import '../App.css'
import Firstimg from '../images/Alex.jpg';
import Secondimg from '../images/Silvana.png';
import Thirdimg from '../images/noka.jpg';
import Fouthimg from '../images/Nina.jpg';


class Team extends Component {
    render() {
        return(
            <div>
                <h3 className='title'>Our Team</h3>
                <div className='team-row'>
                    <div className="team-box-1">
                        <figure>
                            <a href="https://www.linkedin.com/in/panait/"  rel="nofollow" target='_blank' className="img-box" style={{ backgroundImage: `url(${Firstimg})`}}><span></span></a>
                            <figcaption> 
                                <a href="https://www.linkedin.com/in/panait/" className="team-box-2" ><span>Alex</span></a>  
                            </figcaption>
                        </figure>
                    </div>
                    <div className="team-box-1">
                        <figure>
                            <a href="https://www.linkedin.com/in/silvanagagu/"  rel="nofollow" target='_blank' className="img-box" style={{ backgroundImage: `url(${Secondimg})`}}><span></span></a>
                            <figcaption>
                            <a href="https://www.linkedin.com/in/silvanagagu/" className="team-box-2" ><span>Silvana</span></a>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="team-box-1">
                        <figure>
                            <a href=" https://www.linkedin.com/in/noka-kipiani/"  rel="nofollow" target='_blank'  className="img-box" style={{ backgroundImage: `url(${Thirdimg})`}}><span></span></a>
                            <figcaption>
                            <a href=" https://www.linkedin.com/in/noka-kipiani" className="team-box-2" ><span>Noka</span></a>    
                            </figcaption>
                        </figure>
                    </div>
                    <div className="team-box-1">
                        <figure>
                            <a href="https://www.linkedin.com/in/nikolina-po%C5%BEega-988216186/" rel="nofollow" target='_blank' className="img-box" style={{ backgroundImage: `url(${Fouthimg})`}}><span></span></a>
                            <figcaption>
                            <a href="https://www.linkedin.com/in/nikolina-po%C5%BEega-988216186/" className="team-box-2" ><span>Nina</span></a>  
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>

        );
    }
}

export default Team;