import React, {Component} from "react";
import "./style.css";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import API from '../../utils/API';
import ReactGooglePlaceSuggest from "react-google-places-suggest";
import ReactGoogleMapLoader from "react-google-maps-loader";
import PropTypes from "prop-types";

const API_KEY = "AIzaSyCaMSi6l2hlOVydP7rSq991gyuxNPSqGio";

class ContactForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            onSubmit: props.onSubmit
        };
    }

    state = {
        contactName: "",
        phoneNumber: "",
        contactCategory: "Veterinarian",
        contactWebsite: "",
        search: "",
        value: "",
        placeId: "",
        onSubmit: null
    };


    getDetails = (placeId) => {
        var places = new window.google.maps.places.PlacesService(document.createElement('div'));
        places.getDetails(
            {
                placeId: placeId,
                fields: ['name', 'website', 'formatted_phone_number']
            }, this.getDetailsCallback
        );
     };

    getDetailsCallback = (placeResults, status) => {

        console.log(placeResults);
        console.log(status);

        this.setState({
            contactName: placeResults.name,
            contactWebsite: placeResults.website,
            phoneNumber: placeResults.formatted_phone_number,
            value: placeResults.name
        });
    }

    handleSubmit = () => {
        if (this.state.contactName) {
            API.saveContact({
                contactName: this.state.contactName,
                phoneNumber: this.state.phoneNumber,
                contactCategory: this.state.contactCategory,
                contactWebsite: this.state.contactWebsite
            })
            .then(res => {
                console.log(res);
                this.state.onSubmit();
            })
            .catch(err => console.log(err))
         }
    }    
    

    handleInputChange(e) {
        this.setState({search: e.target.value, value: e.target.value});
    }

    handleSelectSuggest(suggest) {
        console.log(suggest);
        this.setState({search: "", placeId: suggest.place_id});
        console.log(this.state.placeId);
        this.getDetails(suggest.place_id);
    }

    render() {
        const {search, value} = this.state;
        return(
            <div style={{fontFamily: "Lato"}}>
                <FormGroup>
                    <Label for="contactCategory" style={{fontFamily: "Ubuntu"}}>Category</Label>
                    <Input type="select" name="contactCategory" id="contactCategory">
                        <option>Veterinarian</option>
                        <option>Groomer</option>
                        <option>Boarder</option>
                        <option>Other</option>
                    </Input>
                     </FormGroup>
            <ReactGoogleMapLoader
                params={{
                    key: API_KEY,
                    libraries: "places, geocode",
                }}
                render={googleMaps =>
                   googleMaps && (
                    <div style={{fontFamily: "Lato"}}>
                        <ReactGooglePlaceSuggest
                        autocompletionRequest={{input: search, types: ["establishment"] }}
                        googleMaps={googleMaps}
                        onSelectSuggest={this.handleSelectSuggest.bind(this)}
                        >
                            <Label for="contactName" style={{fontFamily: "Ubuntu"}}>Contact Name</Label>
                            <Input
                                type="text"
                                value={value}
                                placeholder="Search For a Contact"
                                onChange={this.handleInputChange.bind(this)}
                                name="contactName"
                                id="contactName"
                                />
                        </ReactGooglePlaceSuggest>
                        {this.state.contactName !== null && this.state.contactName !== ""
                        ?(<div style={{textAlign: "center", paddingTop: "10px"}}><h6 style={{fontFamily:"Ubuntu"}}>Contact Details</h6>{this.state.contactWebsite}<br></br>{this.state.phoneNumber}</div>)
                        :(<div><p style={{fontSize: "12px", color: "#B0B0B0", marginLeft: "5px"}}>Search Powered by Google</p></div>)}
                    </div>
                    
                )}
                /> {/* end of maps-loader tag */}
                <Button className="formBtn" style={{marginLeft: "52%", marginTop: "20px"}} onClick={this.handleSubmit}>Submit</Button>
            </div>
        
         )
    }

}

ContactForm.propTypes = {
    googleMaps: PropTypes.object,
}


export default ContactForm;