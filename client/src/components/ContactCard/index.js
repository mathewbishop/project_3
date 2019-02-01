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
            
            <section>
                {this.state.contacts.map(contact => 
                    // <div key={contact._id} className="card">
                    //     <div className="card-body contactCard">
                    //         <h5>Contact Name: {contact.contactName}</h5>
                    //         <p>Contact Phone # {contact.phoneNumber}</p>
                    //         <p>Website: {contact.contactWebsite}</p>
                    //     </div>
                    // </div> 
                    console.log(contact)
                )}
            </section>
        );
    }
}

export default ContactCard;