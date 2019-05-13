import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Example extends Component {
    render() {
        return(
            <div>
                <Form inline className="d-flex justify-content-end my-3 px-3 formbox">
                    <FormGroup className="mb-2 mr-lg-2 mr-md-2 mr-0 mb-sm-0">
                        <Label for="exampleEmail" className="mr-sm-2">E-mail</Label>
                        <Input className="forminput" type="email" name="email" id="exampleEmail" />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-lg-2 mr-md-2 mr-0 mb-sm-0">
                        <Label for="examplePassword" className="mr-sm-2">Password</Label>
                        <Input className="forminput" type="password" name="password" id="examplePassword" />
                    </FormGroup>
                    <Button className="btn btn-primary my-2 my-sm-0">SUBMIT</Button>
                </Form>
            </div>
        );
    }
}

export default Example;