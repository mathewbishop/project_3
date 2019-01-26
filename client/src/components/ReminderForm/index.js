import React, {Component} from "react";
import "./style.css";
import { Form, FormGroup, Label, Input, FormText, Button } from "reactstrap";

class ReminderForm extends Component{
    
    state = {
        time: 0,
        period: "",
        taskName: "",
        taskNotes: ""
    };

    handleChange = input => e => {
        this.setState({ [input]: e.target.value});
    };

    render() {

        return(
            <div>

            <FormGroup>
            <Label for= "taskName">Reminder</Label>
            <Input name="taskName"></Input>
            </FormGroup>

            <FormGroup>
            <Label for= "taskNotes">Notes</Label>
            <Input name="taskNotes"></Input>
            </FormGroup>
            <Button>Submit</Button>

            </div>
        )
  
    }
}

export default ReminderForm;