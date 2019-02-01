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
            <div>
                <LargeNavbar />
                <Navbar />
                <div style={{height: "100%", minHeight: "80vh", display: "block", overflow: "scroll"}}>
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
                </div>
                <Menu />
            </div>
        );
    }
}

export default PetHome;