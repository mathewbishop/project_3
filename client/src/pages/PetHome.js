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

    componentDidMount(){
        this.loadPets();
    };

    loadPets = () => {
        API.getAllPets()
            .then(res => this.setState({ pets: res.data }))
            .catch(err => console.log(err));
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