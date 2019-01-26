import React, {Component} from "react";
import "./style.css";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import API from '../../utils/API';

class ContactForm extends Component {

    state = {
        contactName: "",
        phoneNumber: "",
        contactCategory: ""
    };

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.contactName) {
            API.saveContacts({
                contactName: this.contactName,
                phoneNumber: this.phoneNumber,
                contactCategory: this.contactCategory
            })
            .catch(err => console.log);
        }
    };

    render() {
        return(
            <div>
                <Form>
                    <FormGroup>
                        <Label for="contactName">Contact Name</Label>
                        <Input type="text" name="contactName" id="contactName"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="phoneNumber">Phone Number</Label>
                        <Input type="number" name="phoneNumber" id="phoneNumber"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="contactCategory">Category</Label>
                        <Input type="select" name="contactCategory" id="contactCategory">
                            <option>Veterinarian</option>
                            <option>Groomer</option>
                            <option>Boarder</option>
                            <option>Other</option>
                        </Input>
                    </FormGroup>
                    <Button onClick={this.handleSubmit}>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default ContactForm