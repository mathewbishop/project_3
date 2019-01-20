import React from "react";
import "./style.css";

function AddBtn(props) {
    return(
        <div className="addWrapper">
            <span className="add-btn" {...props} role="button" tabIndex="0">
                +
            </span>
        </div>
    );
}

export default AddBtn;