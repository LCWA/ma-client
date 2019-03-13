import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Example extends Component {
    render() {
        return(
            <Form inline className="d-flex justify-content-end my-3 px-3">
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="exampleEmail" className="mr-sm-2">E-mail</Label>
                    <Input type="email" name="email" id="exampleEmail" />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="examplePassword" className="mr-sm-2">Password</Label>
                    <Input type="password" name="password" id="examplePassword" />
                </FormGroup>
                <Button className="btn btn-primary my-2 my-sm-0">SUBMIT</Button>
            </Form>
        );
    }
}

export default Example;