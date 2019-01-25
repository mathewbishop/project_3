import React, {Component} from "react";
import "./style.css";
import ContactCard from "../ContactCard";

class ContactSection extends Component {
    render(){
        return(
            <div className="wrappedSection">
                <h2 className="categoryName">Category Name</h2>
                <ContactCard />
            </div>
        );
    }
}

export default ContactSection;