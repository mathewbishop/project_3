import React, {Component} from "react";
import "./style.css";
import { Form, FormGroup, Label, Input, FormText, Button } from "reactstrap";

class PetFormDescription extends Component {

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
                    <Label for="color">Color: </Label>
                    <Input type="text" name="color" id="color" onChange={handleChange('color')} defaultValue={values.color} placeholder="Add more than one if needed!" />
                </FormGroup>
                <FormGroup>
                    <Label for="markings">Identifiable Markings: </Label>
                    <Input type="text" name="markings" id="markings" onChange={handleChange('markings')} defaultValue={values.markings} placeholder="Be as detailed as you like." />
                </FormGroup>
                <FormGroup>
                    <Label for="weight">Weight: </Label>
                    <Input type="number" name="weight" id="weight" onChange={handleChange('weight')} defaultValue={values.weight} placeholder="How many pounds are they?" />
                </FormGroup>
                <FormGroup>
                    <Label for="microchipNumber">Microchip Number: </Label>
                    <Input type="number" name="microchipNumber" id="microchipNumber" onChange={handleChange('microchipNumber')} defaultValue={values.microchipNumber} />
                </FormGroup>
                <Button className="formBtn" onClick={this.back}>Back</Button>{" "}
                <Button className="formBtn" onClick={this.continue}>Continue</Button>
            </React.Fragment>
        )
    }
}

export default PetFormDescription;