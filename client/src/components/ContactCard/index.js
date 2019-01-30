import React, {Component} from "react";
import "./style.css";
import API from "../../utils/API";

class ContactCard extends Component {

    state = {
        contacts: []
    }

    componentDidMount() {
        this.loadContacts()
    }

    loadContacts = () => {
        API.getContacts()
        .then(res => { 
            this.setState({ contacts: res.data[0].contacts })
        })
        // .then(res => console.log(res))
        .catch(err => console.log(err));
    }


    render() {
        return(
            <div className="card">
                {this.state.contacts.map(contact => 
                    console.log(contact)
                    ) }
            </div>
        );
    }
}

export default ContactCard;