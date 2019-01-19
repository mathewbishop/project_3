import React, {Component} from "react";
import "./style.css";

class Pet extends Component {
    render(){
        return(
            <div className="card">
                <div className="card-body">
                <h5>Name: Nola</h5>
                <p>Age: 1</p>
                </div>
            </div>
        );
    }
}

export default Pet;