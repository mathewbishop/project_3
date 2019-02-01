import React from "react";
import "./style.css";

function ReminderCard(props) {
    
    return(
        <div>
        <h3>{props.reminder.taskName}</h3>
        <p>{props.reminder.taskNotes}</p>
        </div>
    );
}

export default ReminderCard;