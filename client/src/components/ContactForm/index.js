import React, {Component} from "react";
import "./style.css";
import { Form, FormGroup, Label, Input, FormText, Button } from "reactstrap";

class ContactForm extends Component {
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
                    <Button>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default ContactForm