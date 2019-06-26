import React, { Component } from 'react';
import '../styles/Team.css';
import Firstimg from '../images/Alex.jpg';
import Secondimg from '../images/Silvana.png';
import Thirdimg from '../images/noka.jpg';
import Fouthimg from '../images/Nina.jpg';



class Team extends Component {
    render() {
        return(
            <div>
                <h3 className='title'>Our Team</h3>
               <div className='container-box'>
                    <a href="https://www.linkedin.com/in/panait/"  rel="nofollow" target='_blank' className="team-box" style={{ backgroundImage: `url(${Firstimg})`}}><span></span></a>
                    <a href="https://www.linkedin.com/in/silvanagagu/"  rel="nofollow" target='_blank' className="team-box" style={{ backgroundImage: `url(${Secondimg})`}}><span></span></a>
                    <a href=" https://www.linkedin.com/in/noka-kipiani/"  rel="nofollow" target='_blank'  className="team-box" style={{ backgroundImage: `url(${Thirdimg})`}}><span></span></a>
                    <a href="https://www.linkedin.com/in/nikolina-po%C5%BEega-988216186/" rel="nofollow" target='_blank' className="team-box" style={{ backgroundImage: `url(${Fouthimg})`}}><span></span></a>
                </div>
          </div>
        );
    }
}

export default Team;