import React from "react";
import "./style.css";

function PageTitle({children}) {
    return(
        <div>
            <h1 className="PageTitle">{children}</h1>
        </div>
    )
}

export default PageTitle;