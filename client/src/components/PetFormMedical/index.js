import React, {Component} from "react";
import "./style.css";
import { Form, FormGroup, Label, Input, FormText, Button } from "reactstrap";

class PetFormMedical extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <React.Fragment>
                <FormGroup>
                    <Label for="insurance">Insurance: </Label>
                    <Input type="text" name="insurance" id="insurance" onChange={handleChange('insurance')} defaultValue={values.insurance} placeholder="What company or plan do you have?" />
                </FormGroup>
                <FormGroup>
                    <Label for="medication">Medication: </Label>
                    <Input type="text" name="medication" id="medication" onChange={handleChange('medication')} defaultValue={values.medication} placeholder="Be sure to list all medications!" />
                </FormGroup>
                <FormGroup>
                    <Label for="rabiesTagNumber">Rabies Tag Number: </Label>
                    <Input type="number" name="rabiesTagNumber" id="rabiesTagNumber" onChange={handleChange('rabiesTagNumber')} defaultValue={values.rabiesTagNumber} />
                </FormGroup>
                <Button className="formBtn" onClick={this.back}>Back</Button>{" "}
                <Button className="formBtn" onClick={this.continue}>Continue</Button>
            </React.Fragment>
        )
    }
}

export default PetFormMedical;