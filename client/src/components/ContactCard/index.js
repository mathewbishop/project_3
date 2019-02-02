import React, {Component} from "react";
import "./style.css";
import API from "../../utils/API";

class ContactCard extends Component {

    state = {
        contacts: [],
    }

    componentDidMount() {
        
        this.loadContacts()
        
    }

    loadContacts = () => {
        API.getContacts()
         .then(res => {
             console.log(res.data);
            this.setState({ contacts: res.data[0].contacts })
            console.log(res.data[0].contacts)
        })
        .catch(err => console.log(err));
    }

    render() {
        
        return(

            <section>
                {this.state.contacts.map(contact => 
                    <div key={contact._id} className="card contactCardWrapper">
                        <div className="card-body contactCard">
                            <h5>{contact.contactName}</h5>
                            <p>Phone # {contact.phoneNumber}</p>
                            <a href={contact.contactWebsite} target="_blank" style={{color: "#FFF"}}>{contact.contactWebsite}</a>
                        </div>
                    </div> 
                )}
            </section>
        );
    }
}

export default ContactCard;