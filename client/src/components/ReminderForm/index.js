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

    handleSubmit= () => {
        API.saveReminders({
            time: this.state.time,
            period: this.state.period,
            taskName: this.state.taskName,
            taskNotes: this.state.taskNotes
        }).then(res=>console.log(res))
          .catch(err => console.log(err))  
    }

    render() {

        return(
            <div>

            <FormGroup>
            <Label for={this.state.taskName}>Reminder</Label>
            <Input name={this.state.taskName}></Input>
            </FormGroup>

            <FormGroup>
            <Label for={this.state.taskNotes}>Notes</Label>
            <Input name={this.state.taskNotes}></Input>
            </FormGroup>
            <Button onClick={this.handleSubmit}>Submit</Button>

            </div>
        )
  
    }
}

export default ReminderForm;