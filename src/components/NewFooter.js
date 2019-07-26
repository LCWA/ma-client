import React, { Component } from "react";
import '../styles/footer.css';
import '../App.css';
import { faLinkedinIn, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Alex_Phone from '../Alex_Phone.JPG';

class NewFooter extends Component{
     render() { 
          return(
          <div class="follow-image">
                <br/> <hr></hr><br/>
                <center>
                  <h3>
                    <table width="40%">
                         <tr>
                               <td>
                                Built with <a href="https://reactjs.org/docs/create-a-new-react-app.html">React App</a>   
                               </td>
                               <td>
                                 Quick Contacts: <font size="3"><i><u> <img src={Alex_Phone} ></img></u></i> </font>
                               </td>
                         </tr>  </table> 
                         <br/>
                            
                                 <a href="https://www.linkedin.com/company/mission-automate/about/"><FontAwesomeIcon icon={ faLinkedinIn }/></a> &nbsp; &nbsp; &nbsp;
                                 <a href="https://www.facebook.com/missionautomate/"><FontAwesomeIcon icon={ faFacebook }/></a> &nbsp; &nbsp; &nbsp;
                                    
                 <br/></h3><br/>
               <h4>All copyrights &copy; Reserved</h4><br/>
               </center>
          </div>
          );          
     }
}

export default NewFooter;