import React, {Component} from "react";
import "./style.css";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import API from '../../utils/API';
import {Link} from "react-router-dom";

class NewAccountForm extends Component {

    state = {
        userName: "",
        userEmail: "",
        userPassword: "",
        streetAddress: "",
        city: "",
        state: "",
        zipCode: ""
    };

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };

    // handleSubmit = e => {
    //     e.preventDefault();
    //     if (this.state.userName && this.state.userEmail && this.state.userPassword) {
    //         API.saveUser({
    //             userName: this.userName,
    //             userEmail: this.phoneNumber,
    //             userPassword: this.userPassword,
    //             streetAddress: this.streetAddress,
    //             city: this.city,
    //             state: this.state,
    //             zipCode: this.zipCode
    //         })
    //         .catch(err => console.log);
    //     }
    // };

    render(){
        return(
            <div>
                
                <Form>
                    <FormGroup>
                        <Label for="userName">Name</Label>
                        <Input type="text" name="userName" id="userName"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="userEmail">Email</Label>
                        <Input type="email" name="userEmail" id="userEmail"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="userPassword">Password</Label>
                        <Input type="password" name="userPassword" id="userPassword"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="userPasswordVerify">Verify Password</Label>
                        <Input type="password" name="userPasswordVerify" id="userPasswordVerify"></Input>
                    </FormGroup>
                    {/* <FormGroup>
                        <Label for="streetAddress">Address</Label>
                        <Input type="text" name="streetAddress" id="streetAddress"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="city">City</Label>
                        <Input type="text" name="city" id="city"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="state">State</Label>
                        <Input type="select" name="state" id="state">
                            <option>1</option>
                            <option>2</option>
                            
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="zipCode">Zip Code</Label>
                        <Input type="number" name="zipCode" id="zipCode"></Input>
                    </FormGroup> */}
                    <Link to="/Home" ><Button className="formBtn" style={{marginLeft: "53%", marginBottom: "30px"}} onClick={this.handleSubmit}>Submit</Button></Link>
                </Form>
            </div>
        )
    }
}

export default NewAccountForm;