import React, {Component} from "react";
import "./style.css";
import API from "../../utils/API";

class Pet extends Component {
    state = {pets: []}

    componentDidMount() {
        this.loadPets();
    };

    loadPets = () => {
        API.getPets()
            .then(res =>
               this.setState({ pets: res.data})
            )
            .catch(err => console.log(err));
    };

    render(){
        return(
            <div>
                {this.state.pets.length ? (
                    <div>
                        {this.state.pets.map(pet =>
                            <div className="card">
                                <div className="card-body">
                                <h5>Name: {pet.petName}}</h5>
                                <p>BDay: {pet.birthDay}</p>
                                </div>
                            </div>
                    )}
                    </div>
                ) : (<h3>No Results to Display</h3>)}
            </div>
        );
    }
}

export default Pet;