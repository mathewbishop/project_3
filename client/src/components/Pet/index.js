import React from "react";
import "./style.css";

function Pet ({ children }) {
        return(
            <div className="card">
                <div className="card-body">
                    {children}
                </div>
            </div>            
        )
}

export default Pet;