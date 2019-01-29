import React from "react";
import Navbar from "../components/FollowNavbar";

function NoMatch() {
  return (
    <div>
        <Navbar />
        <div style={{height: "100%", minHeight: "80vh", display: "block", overflow: "scroll", textAlign: "center", marginTop: "30px"}}>
            <h1>404 Page Not Found</h1>
            <h1>
                <span role="img" aria-label="Face With Rolling Eyes Emoji">
                    🙄
                </span>
            </h1>
        </div>
    </div>
  );
}

export default NoMatch;