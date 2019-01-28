import React, {Component} from "react";
import "./style.css";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import API from '../../utils/API';

class ContactForm extends Component {

    state = {
        contactName: "",
        phoneNumber: "",
        contactCategory: "Veterinarian",
        contactWebsite: "",
        searchLocation: "",
        suggestions: [],
        hasLocation: false,
        typedSearch: ""
    };

    componentDidMount () {

        this.initAutocomplete();

    }

    initAutocomplete = () => {
      
        this.autocomplete = new window.google.maps.places.AutocompleteService();
        this.places = new window.google.maps.places.PlacesService(document.createElement('div'));
        console.log("init");

        console.log(this);
        console.log(this.places);
        console.log(this);
        if (navigator.geolocation) {
            console.log(this);
            navigator.geolocation.getCurrentPosition((position) => {
                this.geolocation = new window.google.maps.LatLng(
                    position.coords.latitude,
                    position.coords.longitude);
                this.setState({
                    hasLocation: true
                });
                if(this.state.typedSearch !== null) {
                    this.fetchPredictions(this.state.typedSearch);
                }
            });
        }

    };

    fetchPredictions = (value) =>
    {
        //search within about 5 miles of current location
        console.log(this.geolocation);
        console.log(value);
    
        this.autocomplete.getPlacePredictions(
            {
                input: value,
                types: ["establishment"], 
                location: this.geolocation, 
                radius: 8000},
            this.autoCompletCallback
        ); 
    };

    autoCompletCallback = (predictions, status) =>
    {
        console.log(predictions);

        this.setState({
            suggestions: predictions.map((p,idx) => ({
                id: p.place_id,
                description: p.description,
                index: idx
            }))
        });
    }

    onChange = (e) => {
        
        this.fetchPredictions(e.target.value);
    };

    getDetails = (index) => {
        let selected_id = this.state.suggestions[index].id;

        console.log(selected_id);
        this.places.getDetails(
            {
                placeId: selected_id,
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
            phoneNumber: placeResults.formatted_phone_number
        });

        this.setState({
            suggestions: []
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.contactName) {
            API.saveContacts({
                contactName: this.state.contactName,
                phoneNumber: this.state.phoneNumber,
                contactCategory: this.state.contactCategory,
                contactWebsite: this.state.contactWebsite
            })
            .catch(err => console.log);
        }
    };

    render() {

        return(
            <div>
                <Form>
                    <FormGroup>
                        <Label for="contactCategory">Category</Label>
                        <Input type="select" name="contactCategory" id="contactCategory">
                            <option>Veterinarian</option>
                            <option>Groomer</option>
                            <option>Boarder</option>
                            <option>Other</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="contactName">Contact Name</Label>
                        <Input type="text" name="contactName" id="contactName" onInput={this.onChange} />
                        {
                            this.state.suggestions.length > 0 ? 
                            (<div >
                                <ul className="suggestionsDiv">
                                {this.state.suggestions.map(suggestion => 
                                    {
                                        return(
                                            <li className="suggestions" onClick={() => this.getDetails(suggestion.index)}>{suggestion.description}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                            ) : <span className="clickedContact">{this.state.contactName}</span>

                        }
                    </FormGroup>
                    <Button className="formBtn" style={{marginLeft: "52%"}} onClick={this.handleSubmit}>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default ContactForm