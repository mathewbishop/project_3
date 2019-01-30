import React, {Component} from "react";
import PageTitle from "../components/PageTitle";
import Menu from "../components/Menu";
import TaskDate from "../components/TaskDate";
import ReminderModal from "../components/ReminderModal";
import API from "../utils/API";
import Navbar from "../components/FollowNavbar";


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
            <div>
                <Navbar />
                <div style={{height: "100%", minHeight: "80vh", display: "block", overflow: "scroll"}}>
                    <PageTitle>Reminders</PageTitle>
                    <TaskDate />
                    <ReminderModal />
                </div>
                <Menu />
            </div>
        )
    }



}

export default Reminders;