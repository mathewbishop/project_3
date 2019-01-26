import React, { Component } from 'react';
import "./style.css";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class LoginForm extends Component {

    state = {
        email: "",
        password: ""
    };

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };

    render() {
        const {email, password} = this.state;
        const values = {email, password};
        return(
            <div id="formDiv">
                <Form handleChange={this.handleChange} values={values}>
                    <FormGroup>
                        <Label for="loginEmail">Email</Label>
                        <Input type="email" name="loginEmail" id="loginEmail" className="loginBox" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="loginPassword" className="loginBox" />
                    </FormGroup>
                    <Button id="loginButton">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default LoginForm;