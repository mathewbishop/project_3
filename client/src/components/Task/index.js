import React, {Component} from "react";
import FontAwesome from "react-fontawesome"

class Task extends Component {
    render() {
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-6">
                        <div>
                            <p style={{textAlign: 'center'}}>
                            <br />
                            </p>
                        </div>
                        </div>
                        <div className="col-xs-10">
                            <h4>Task Name</h4>
                            <p>Notes.</p>
                        </div>
                        <div className="col-xs-1">
                            <div className="row" style={{paddingTop: "10px"}}>
                                <div className="col-xs-6">
                                <FontAwesome name= "times"/>
                                <FontAwesome name= "Check"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Task