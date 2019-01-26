import React, {Component} from "react";
import "./style.css";
import PetFormBasics from "../PetFormBasics";
import PetFormDescription from "../PetFormDescription";
import PetFormCare from "../PetFormCare";
import PetFormMedical from "../PetFormMedical";
import PetFormConfirm from "../PetFormConfirm";
import PetFormSuccess from "../PetFormSuccess";
import API from "../../utils/API";

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

    handleSubmit = () => {
        API.savePets({
            petName: this.state.petName,
            petBirthday: this.state.petBirthday,
            petType: this.state.petType,
            breed: this.state.breed,
            color: this.state.color,
            markings: this.state.markings,
            weight: this.state.weight,
            foodBrand: this.state.foodBrand,
            microchipNumber: this.state.microchipNumber,
            rabiesTagNumber: this.state.rabiesTagNumber,
            insurance: this.state.insurance,
            medication: this.state.medication,
            allergies: this.state.allergies,
            careNotes: this.state.careNotes
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

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
                        handleSubmit={this.handleSubmit}
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