import React, {Component} from "react";
import API from "../utils/API"
import Pet from "../components/Pet";
import AddBtn from "../components/AddBtn";

class PetHome extends Component {
    state = {

    };

    componentDidMount(){
    
    };

    loadPets = () => {
        API.getPets()
            .then(res =>
                console.log(res),
                this.setState({})
            )
            .catch(err => console.log(err));
    };

    handleInputChange = events => {

    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.name) {
            API.savePets({

            })
            .then(res => this.loadPets())
            .catch(err => console.log(err));
        }
    };

    render() {
        return(
            <div>
                <Pet />
                <AddBtn />
            </div>
        );
    }
}

export default PetHome;