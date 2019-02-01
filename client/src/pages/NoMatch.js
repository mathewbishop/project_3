import React from "react";
import Navbar from "../components/FollowNavbar";
import { Jumbotron } from "reactstrap";
import Dog from "../images/dogNose.jpg"

function NoMatch() {
  return (
    <div>
        <Navbar />
        <div style={{height: "100%", minHeight: "80vh", display: "block", overflow: "scroll", textAlign: "center"}}>
            <Jumbotron style={{backgroundColor: "#026670", color: "#FFF", marginBottom: "0"}}>
                <h1 style={{paddingTop: "40px", paddingBottom: "60px"}}>404 Page Not Found</h1> 
            </Jumbotron>
            <img src={Dog} alt="Dog's Face" style={{width: "100%"}}></img>
        </div>
    </div>
  );
}

export default NoMatch;