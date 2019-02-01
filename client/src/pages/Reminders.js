import React, {Component} from "react";
import PageTitle from "../components/PageTitle";
import Menu from "../components/Menu";
import TaskDate from "../components/TaskDate";
import ReminderModal from "../components/ReminderModal";
import API from "../utils/API";
import Navbar from "../components/FollowNavbar";
import LargeNavbar from "../components/LargeNavbar"

class Reminders extends Component{

    state = {
        reminders: []
    }

    componentDidMount(){
        this.loadReminders()
    };

    loadReminders = () => {
        API.getReminders()
            .then(res => { 
                this.setState({ reminders: res.data[0].reminders })
            })
            // .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    
    
    render() {

        return(
            <div>
                <LargeNavbar />
                <Navbar />
                <div style={{height: "100%", minHeight: "80vh", display: "block", overflow: "scroll"}}>
                    <PageTitle>Reminders</PageTitle>
                    {this.state.reminders.map(reminder => {
                        console.log(reminder)
                    }) }
                    <TaskDate />
                    <ReminderModal />
                </div>
                <Menu />
            </div>
        )
    }



}

export default Reminders;