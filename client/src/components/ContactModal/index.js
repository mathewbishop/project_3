import React, {Component} from 'react';
import "./style.css";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import AddBtn from "../AddBtn";
import ContactForm from "../ContactForm";

class ContactModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render(){
        const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>
        return(
            <div>
                <AddBtn onClick={this.toggle}/>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader className="formHeader"toggle={this.toggle} close={closeBtn} style={{fontFamily: "Lato"}}>Add A Contact</ModalHeader>
                    <ModalBody>
                        <ContactForm onSubmit={this.toggle}/>
                    </ModalBody>
                </Modal> 
            </div>
        )
    }
}

export default ContactModal;