import React, {Component} from "react";
import API from "../utils/API"
import Pet from "../components/Pet";
import PetFormModal from "../components/PetFormModal";
import PageTitle from "../components/PageTitle";
import Menu from "../components/Menu";
import Navbar from "../components/FollowNavbar";
import LargeNavbar from "../components/LargeNavbar";

class PetHome extends Component {
    state = {
        pets: []
    };

    componentDidMount() {
        this.loadPets();
    };

    loadPets = () => {
        API.getAllPets()
            .then(res => this.setState({ pets: res.data }))
            .catch(err => console.log(err));
    };

    

    
    render() {
        return(
            <div>
                <LargeNavbar />
                <Navbar />
                <div style={{height: "100%", minHeight: "80vh", display: "block", overflow: "scroll"}}>
                    <PageTitle>Pets</PageTitle>
                    {this.state.pets.length ? (
                        <div>
                            {this.state.pets.map(pet => (
                            <section>
                            <Pet key={pet._id}>
                                <h5>Name: {pet.petName}</h5> 
                                <p>Birthday: {pet.petBirthday}</p>
                            </Pet>
                            {/* <div style={{ display: "none" }}>
                                <p>Type: {pet.petType}</p>
                                <p>Breed: {pet.breed}</p>
                                <p>Color: {pet.color}</p>
                                <p>Markings: {pet.markings}</p>
                                <p>Weight: {pet.weight}</p>
                                <p>Food Brand: {pet.foodBrand}</p>
                                <p>Microchip Number: {pet.microchipNumber}</p>
                                <p>Rabies Tag Number: {pet.rabiesTagNumber}</p>
                                <p>Insurance: {pet.insurance}</p>
                                <p>Medication: {pet.medication}</p>
                                <p>Allergies: {pet.allergies}</p>
                                <p>Care Notes: {pet.careNotes}</p>
                            </div> */}
                            </section>
                            ))}
                        </div>
                    ) : (<h3>Add Your Pets</h3>)}
                <PetFormModal />
                </div>
                <Menu />
            </div>
        );
    }
}

export default PetHome;