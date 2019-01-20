import React, {Component} from "react";
import "./style.css";
import API from "../../utils/API";

function Pet ({children}) {
        return(
            <div className="card">
                <div className="card-body">
                    {children}
                </div>
            </div>            
        )
}

export default Pet;