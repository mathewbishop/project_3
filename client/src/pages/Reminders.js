import React, {Component} from "react";
import PageTitle from "../components/PageTitle";
import Menu from "../components/Menu";
import TaskDate from "../components/TaskDate";
import ReminderModal from "../components/ReminderModal";

class Reminders extends Component{
    
    render() {

        return(
            <div>

                <ReminderModal />
                
                <PageTitle />
                
                <Menu />
                
                <TaskDate />
                
                

                
                
          
                
          
            
            </div>
        )
    }
}

export default Reminders;