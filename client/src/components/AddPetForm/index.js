import React, {Component} from "react";
import "./style.css";
import PetFormBasics from "../PetFormBasics";
import PetFormDescription from "../PetFormDescription";
import PetFormCare from "../PetFormCare";
import PetFormMedical from "../PetFormMedical";
import PetFormConfirm from "../PetFormConfirm";
import PetFormSuccess from "../PetFormSuccess";

class AddPetForm extends Component {

    state = {
        step: 1,
        petName: "",
        petBirthday: null,
        petType: "",
        breed: "",
        color: "",
        markings: "",
        weight: 0,
        foodBrand: "",
        microchipNumber: 0,
        rabiesTagNumber: 0,
        insurance: "",
        medication: "",
        allergies: "",
        careNotes: ""
    };

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };

    render(){
        const { step } = this.state;
        const { petName, petBirthday, petType, breed, color, markings, weight, foodBrand, microchipNumber, rabiesTagNumber, insurance, medication, allergies, careNotes } = this.state;
        const values = { petName, petBirthday, petType, breed, color, markings, weight, foodBrand, microchipNumber, rabiesTagNumber, insurance, medication, allergies, careNotes };

        switch(step) {
            case 1:
                return (
                    <PetFormBasics
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <PetFormDescription
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 3:
                return (
                    <PetFormCare
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 4:
                return (
                    <PetFormMedical
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 5:
                return (
                    <PetFormConfirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                );
            case 6:
                return (
                    <PetFormSuccess />
                );
        }
    }
}

export default AddPetForm;