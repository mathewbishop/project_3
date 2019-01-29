import React, {Component} from "react";
import PageTitle from "../components/PageTitle";
import Menu from "../components/Menu";
import TaskDate from "../components/TaskDate";
import ReminderModal from "../components/ReminderModal";
import API from "../utils/API";

class Reminders extends Component{

    state = {
        user: []
    }

    componentDidMount(){
        this.loadReminders()
    };

    loadReminders = () => {
        API.fetchReminders()
            // .then(res => this.setState({ user: res.data }))
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    
    
    render() {

        return(

            <section>
                <ReminderModal />
                
                <PageTitle />
                
                {/* {this.state.reminders.length ? (
                    <div>
                        {this.state.reminders.map(reminder => (
                        <div key={reminder._id}>
                            <h5>{reminder.taskName}</h5> 
                            <p>{reminder.taskNotes}</p>
                        </div>
                        ))}
                    </div>
                ) : (<h3>Add Your Pets</h3>)} */}

                <Menu />
                
                <TaskDate />
                
            </section>
    
        )                          
    }



}

export default Reminders;