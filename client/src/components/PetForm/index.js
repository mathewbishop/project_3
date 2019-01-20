import React, {Component} from "react";
import "./style.css";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import AddBtn from "../AddBtn";

class PetForm extends Component {
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
                    <ModalHeader className="formHeader"toggle={this.toggle} close={closeBtn}>Add A Pet</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="petName">Pet's Name</Label>
                                <Input type="text" name="petName" id="petName" />
                            </FormGroup>
                            <Button className="submitBtn" onClick={this.toggle}>Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal> 
            </div>
        );
    }       
}

export default PetForm;