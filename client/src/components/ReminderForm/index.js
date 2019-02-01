import React, {Component} from "react";
import "./style.css";
import { Form, FormGroup, Label, Input, FormText, Button } from "reactstrap";
import API from "../../utils/API";

class ReminderForm extends Component{
    
    state = {
        taskName: "",
        taskNotes: ""
    };

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };
    

    handleSubmit= () => {
        API.saveReminder({
            time: this.state.time,
            taskName: this.state.taskName,
            taskNotes: this.state.taskNotes
        }).then(res=>this.props.onSubmitCallback())
          .catch(err => console.log(err))  
    }

    render() {

        return(
            <div>

            <FormGroup>
            <Label for="taskName">Reminder</Label>
            <Input name="taskName" onChange={this.handleChange("taskName")}></Input>
            </FormGroup>

            <FormGroup>
            <Label for="taskNotes">Notes</Label>
            <Input name="taskNotes" onChange={this.handleChange("taskNotes")}></Input>
            </FormGroup>
            <Button onClick={this.handleSubmit}>Submit</Button>

            </div>
        )
  
    }
}

export default ReminderForm;