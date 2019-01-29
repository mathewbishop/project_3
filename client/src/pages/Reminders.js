import React, {Component} from "react";
import PageTitle from "../components/PageTitle";
import Menu from "../components/Menu";
import TaskDate from "../components/TaskDate";
import ReminderModal from "../components/ReminderModal";
import Navbar from "../components/FollowNavbar";


class Reminders extends Component{
    
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