import React, {Component} from "react";
import "./style.css";
import { Form, FormGroup, Label, Input, FormText, Button } from "reactstrap";

class PetFormBasics extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
            <React.Fragment>
                <FormGroup>
                    <Label for="petName">Pet Name: </Label>
                    <Input type="text" name="petName" id="petName" onChange={handleChange('petName')} defaultValue={values.petName} placeholder="Nicknames work too!" />
                </FormGroup>
                <FormGroup>
                    <Label for="petBirthday">Birthday: </Label>
                    <Input type="date" name="petBirthday" id="petBirthday" onChange={handleChange('petBirthday')} defaultValue={values.petBirthday} placeholder="mm/dd/yyyy" />
                </FormGroup>
                <FormGroup>
                    <Label for="petType">Type: </Label>
                    <Input type="text" name="petType" id="petType" onChange={handleChange('petType')} defaultValue={values.petType} placeholder="Are they a Dog? Cat?" />
                </FormGroup>
                <FormGroup>
                    <Label for="breed">Breed: </Label>
                    <Input type="text" name="breed" id="breed" onChange={handleChange('breed')} defaultValue={values.breed} />
                </FormGroup>
                <Button color="info" onClick={this.continue}>Continue</Button>
            </React.Fragment>
        )
    }
}

export default PetFormBasics;