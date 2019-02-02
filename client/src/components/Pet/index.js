import React from "react";
import "./style.css";

function Pet ({ children }) {
        return(
            <div className="card petCard">
                <div className="card-body">
                <img style={{width: "150px", borderRadius: "50%"}} src={require('../../images/test.jpg')} />
                    {children}
                </div>
            </div>            
        )
}

export default Pet;