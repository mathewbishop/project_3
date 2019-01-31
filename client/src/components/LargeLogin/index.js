import React, {Component} from "react";
import Dog from "../../images/dogPathCropped.jpg";
import Cat from "../../images/catImg.jpg";
import Sleepy from "../../images/sleepyDog.jpg";
import catDog from "../../images/catDog.jpg";
import "./style.css";
import Logo from "../../images/followLogo.svg";

class LargeLogin extends Component {
    render() {
        return(
            <div className="largeLoginImgWrapper">
                <div style={{position: "relative"}}>
                    <h3 style={{textAlign: "center", color: "#FFF", fontFamily: "Ubuntu", textShadow: "1px 1px #000", position: "absolute", top: "28%", left: "34%", fontSize: "18pt", width:"30%"}}>Keep All of Your Pet Information in One Spot</h3>
                    <div style={{height: "271px", display: "flex", flexWrap: "nowrap"}}>
                        <img src={Cat} alt="Cat upsidedown" style={{height: "100%"}}></img>
                        <img src={Dog} alt="Dog on Path" style={{height: "100%"}}></img>
                        <img src={catDog} alt="Dog and Cat Cuddle" style={{height: "100%"}}></img>
                        <img src={Sleepy} alt="Dog sleeping" style={{height: "100%"}}></img>
                    </div>
                </div>
                <img src={Logo} alt="Follow Logo" style={{width: "30%", marginLeft: "35%", marginTop: "30px"}}></img>
            </div>
        )
    }
}

export default LargeLogin;