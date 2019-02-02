import React from "react";
import "./style.css";
import {Card, CardBody} from "reactstrap"

function ReminderCard(props) {
    
    return(
        <Card className="card">
        <CardBody className="cardBody">
        <h3>{props.reminder.taskName}</h3>
        <p>{props.reminder.taskNotes}</p>
        </CardBody>
        </Card>
    );
}

export default ReminderCard;