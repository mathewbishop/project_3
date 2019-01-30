import React, {Component} from "react";
import "./style.css";
import { Form, FormGroup, Label, Input, FormText, Button } from "reactstrap";
import API from "../../utils/API"

class ReminderForm extends Component{
    
    state = {
        time: 0,
        taskName: "",
        taskNotes: ""
    };

    handleChange = input => e => {
        this.setState({ [input]: e.target.value});
    };

    handleSubmit= () => {
        API.saveReminders({
            time: this.state.time,
            taskName: this.state.taskName,
            taskNotes: this.state.taskNotes
        }).then(res=>console.log(res))
          .catch(err => console.log(err))  
    }

    render() {

        return(
            <div>

            <FormGroup>
            <Label for= "taskName">Reminder</Label>
            <Input name={this.state.taskName}></Input>
            </FormGroup>

            <FormGroup>
            <Label for= "taskNotes">Notes</Label>
            <Input name={this.state.taskNotes}></Input>
            </FormGroup>

            <FormGroup>
            <Label for= "time">Time of Event</Label>
            <Input type="time" name={this.state.time}></Input>
            </FormGroup>
            <Button onClick={this.handleSubmit}>Submit</Button>

            </div>
        )
  
    }
}

export default ReminderForm;