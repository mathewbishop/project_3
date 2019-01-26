import React, {Component} from "react";
import API from "../utils/API"
import Pet from "../components/Pet";
import PetFormModal from "../components/PetFormModal";
import PageTitle from "../components/PageTitle";
import Menu from "../components/Menu";

class PetHome extends Component {
    state = {
        pets: [],
        petName: "",
        petBirthday: 0,
        petType: "",
        breed: "",
        color: "",
        markings: "",
        weight: null,
        foodBrand: "",
        microchipNumber: 0,
        rabiesTagNumber: 0,
        insurance: "",
        medication: "",
        allergies: "",
        careNotes: ""
    };

    componentDidMount(){
        this.loadPets();
    };

    loadPets = () => {
        API.getAllPets()
            .then(res => this.setState({ pets: res.data }))
            .catch(err => console.log(err));
    };

    /* Function related to form
    handleInputChange = events => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };*/

    /* Function for the add pet form unsure if this will need to live in the modal component */
    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.name) {
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
            .then(res => this.loadPets())
            .catch(err => console.log(err));
        }
    };

    render() {
        return(
            <section>
                <PageTitle>Pets</PageTitle>
                {this.state.pets.length ? (
                    <div>
                        {this.state.pets.map(pet => (
                        <Pet key={pet._id}>
                            <h5>Name: {pet.petName}</h5> 
                            <p>Birthday: {pet.petBirthday}</p>
                        </Pet>
                        ))}
                    </div>
                ) : (<h3>Add Your Pets</h3>)}
                <PetFormModal />
                <Menu />
            </section>
        );
    }
}

export default PetHome;