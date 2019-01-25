import React, {Component} from "react";
import "./style.css";

class ContactCard extends Component {
    render() {
        return(
            <div className="card">
                <div className="card-body contactCard">
                    <h5>Contact Name</h5>
                    <p>Contact Phone #</p>
                </div>
            </div>
        );
    }
}

export default ContactCard;