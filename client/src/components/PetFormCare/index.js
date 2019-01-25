import React, {Component} from "react";
import "./style.css";
import { Form, FormGroup, Label, Input, FormText, Button } from "reactstrap";

class PetFormCare extends Component {

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
                    <Label for="foodBrand">Food Brand: </Label>
                    <Input type="text" name="foodBrand" id="foodBrand" onChange={handleChange('foodBrand')} defaultValue={values.foodBrand} placeholder="What types of food are they ok with?" />
                </FormGroup>
                <FormGroup>
                    <Label for="careNotes">Care Notes: </Label>
                    <Input type="textarea" name="careNotes" id="careNotes" onChange={handleChange('careNotes')} defaultValue={values.careNotes} placeholder="Be as detailed as you like." />
                </FormGroup>
                <FormGroup>
                    <Label for="allergies">Allergies: </Label>
                    <Input type="text" name="allergies" id="allergies" onChange={handleChange('allergies')} defaultValue={values.allergies} placeholder="Seasonal? Food? Etc?" />
                </FormGroup>
                <Button color="info" onClick={this.back}>Back</Button>{" "}
                <Button color="info" onClick={this.continue}>Continue</Button>
            </React.Fragment>
        )
    }
}

export default PetFormCare;