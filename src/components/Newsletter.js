import React from 'react';
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';

import './Newsletter.css';

const Newsletter = (props) => {
  return (
    <div>
      <div className="container mx-auto w-50 my-5">
        <div className="wrapper">
          <p className="text-center">text</p>
          <h3  className="text-center my-3">text</h3>
          <label> Email</label>          
          <InputGroup>
          <div className="d-flex justify-content-center">
            <Input />
            <InputGroupAddon addonType="append">
              <InputGroupText>Join the newletter</InputGroupText>
            </InputGroupAddon>
            </div>
          </InputGroup>
        
        </div>
      </div>
    </div>
  );
};


  export default Newsletter;