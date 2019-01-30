import React, {Component} from "react";
import API from "../utils/API";
import PageTitle from "../components/PageTitle";
import Profile from "../components/Profile";
import Menu from "../components/Menu";

class PetProfile extends Component{
    constructor (props) {
        super(props)
        this.state = {
            photo: require('../images/test.jpg'),
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
    }

        componentDidMount()
    {
        this.loadPets();
    };
    
    loadPets = () => {
        API.getAllPets()
        .then(res=> this.setState({pets: res.data}))
        .catch(err =>console.log(err))
    };

    render () {

        return (
          <div>
            <Profile photo={this.state.photo} />
            <Menu />
        
            
          </div>
        )
      }
}




export default PetProfile;
