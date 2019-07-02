import React, { Component } from "react";
import { faLinkedinIn, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class NewFooter extends Component{
     render() { 
          return(
          <div>
                <br/> <hr></hr><br/>
                <center>
               <h3>
                    <table width="45%">
                         <tr>
                               <td>
                                Built with <a href="https://reactjs.org/docs/create-a-new-react-app.html">React App</a>   
                               </td>
                               <td>
                                Join our  <a href="https://discordapp.com">Community</a>   
                               </td>
                               <td>
                                 Quick Contacts: <font size="3"><i><u> +99-123456789</u></i> </font>
                               </td>
                         </tr>  </table> 
                         <br/>
                           <div>
                                 <a href="https://www.linkedin.com/company/letscodewithalex/about/"><FontAwesomeIcon icon={ faLinkedinIn }/></a> &nbsp; &nbsp; &nbsp;
                                 <a href="https://www.facebook.com/LetsCodeWithAlex/"><FontAwesomeIcon icon={ faFacebook }/></a> &nbsp; &nbsp; &nbsp;
                                 <a href="https://www.instagram.com/letscodewithalex/"><FontAwesomeIcon icon={ faInstagram }/></a> &nbsp; &nbsp; &nbsp;
                         </div>          
               <br/></h3>
               <h4>All copyrights &copy; Reserved</h4><br/>
               </center>
          </div>
          );          
     }
}

export default NewFooter;