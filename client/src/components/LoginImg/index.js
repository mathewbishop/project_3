import React, {Component} from "react";
import Dog from "../../images/dogPathCropped.jpg";
import "./style.css";
import Logo from "../../images/followLogo.svg";

class LoginImg extends Component {
    render() {
        return(
            <div className="loginImgWrapper">
                <div style={{position: "relative"}}>
                    <h3 style={{textAlign: "center", color: "#FFF", fontFamily: "Ubuntu", position: "absolute", top: "26%", left: "15%", fontSize: "16pt", width:"70%"}}>Keep All of Your Pet Information in One Spot</h3>
                    <img src={Dog} alt="Dog on Path" style={{width: "100%"}} id="homeDogImg"></img>
                </div>
                <img src={Logo} alt="Follow Logo" style={{width: "60%", marginLeft: "20%", marginTop: "20px"}}></img>
            </div>
        )
    }
}

export default LoginImg;