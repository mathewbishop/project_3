import React, {Component} from 'react';
import Moment from "moment";


class TaskDate extends Component{
    render() {
        return(
            <div className="taskDiv">
                <h2>{Moment().format('dddd')}</h2>
                <p>{Moment().format('LL')}</p>
                <hr />
            </div>
        );
    }
}

export default TaskDate;