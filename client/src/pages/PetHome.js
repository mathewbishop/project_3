import React, {Component} from "react";
import API from "../utils/API"
import Pet from "../components/Pet";
import PetForm from "../components/PetForm";

class PetHome extends Component {
    state = {
        pets: []
        // petName: "",
        // petBirthday: null,
        // petType: "",
        // breed: "",
        // color: "",
        // markings: "",
        // weight: 0,
        // foodBrand: "",
        // microchipNumber: 0,
        // rabiesTagNumber: 0,
        // insurance: "",
        // medication: "",
        // allergies: "",
        // careNotes: ""
    };

    componentDidMount(){
        this.loadPets();
    };

    loadPets = () => {
        // console.log("loadPets");
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
    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     if (this.state.name) {
    //         API.savePets({
    //             petName: this.state.petName,
    //             petBirthday: this.state.petBirthday,
    //             petType: this.state.petType,
    //             breed: this.state.breed,
    //             color: this.state.color,
    //             markings: this.state.markings,
    //             weight: this.state.weight,
    //             foodBrand: this.state.foodBrand,
    //             microchipNumber: this.state.microchipNumber,
    //             rabiesTagNumber: this.state.rabiesTagNumber,
    //             insurance: this.state.insurance,
    //             medication: this.state.medication,
    //             allergies: this.state.allergies,
    //             careNotes: this.state.careNotes
    //         })
    //         .then(res => this.loadPets())
    //         .catch(err => console.log(err));
    //     }
    // };

    render() {
        return(
            <section>
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
                {/* <PetForm /> */}
            </section>
        );
    }
}

export default PetHome;