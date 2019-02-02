import React, {Component} from "react";
import API from "../utils/API"
import Pet from "../components/Pet";
import PetFormModal from "../components/PetFormModal";
import PageTitle from "../components/PageTitle";
import Menu from "../components/Menu";
import Navbar from "../components/FollowNavbar";
import LargeNavbar from "../components/LargeNavbar";
import {Link} from "react-router-dom";

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
                    <PageTitle>Home</PageTitle>
                    <div style={{textAlign: "center", zIndex: "0", marginTop: "30px"}}>
                        <h2 style={{fontFamily: "Lato", fontSize: "30px"}}>Pets</h2>
                    </div>
                    {this.state.pets.length ? (
                        <div style={{marginTop: "30px"}}>
                            {this.state.pets.map(pet => (
                            <section>
                            <Link to={"/PetProfile"} style={{color: "black"}}>
                            <Pet key={pet._id}>
                                <h5>{pet.petName}</h5> 
                                <p>Birthday: {pet.petBirthday}</p>
                            </Pet>
                            </Link>
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