import React, { Component } from "react";
import '../styles/footer.css';
import '../App.css';
import { faLinkedinIn, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Alex_Phone from '../images/Alex_Phone.png';

class NewFooter extends Component{
     render() { 
          return(
          <div class="follow-image">              
               <hr></hr> <br/>
                <center>
                  <h3>
                    <table width="40%">
                         <tr>
                               <td>
                                Built with <a href="https://reactjs.org/docs/create-a-new-react-app.html">React App</a>   
                               </td>
                               <td>
                                 Quick Contacts:<img src={Alex_Phone} height="30"></img>
                               </td>
                         </tr>  </table> 
                         <br/>   
                            
                                 <a href="https://www.linkedin.com/company/mission-automate/about/"><FontAwesomeIcon icon={ faLinkedinIn }/></a> &nbsp; &nbsp; &nbsp;
                                 <a href="https://www.facebook.com/missionautomate/"><FontAwesomeIcon icon={ faFacebook }/></a> &nbsp; &nbsp; &nbsp;
                                    
                 </h3><br/>
               <h4>All copyrights &copy; Reserved</h4><br/><br/>
               </center>                           
          </div>

          );          
     }
}
export default NewFooter;