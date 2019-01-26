import React, {Component} from "react";
import "./style.css"
import {  Modal, ModalHeader, ModalBody } from "reactstrap";
import AddBtn from "../AddBtn";
import ReminderForm from "../ReminderForm";

class ReminderModal extends Component {
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

    render() {
        const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;
        return(
            <div>
                <AddBtn onClick={this.toggle}/>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader className="formHeader"toggle={this.toggle} close={closeBtn}> Create a Reminder</ModalHeader>
                    <ModalBody>
                        <ReminderForm />
                    </ModalBody>
                </Modal> 
            </div>
        );
    }       
}

export default ReminderModal;