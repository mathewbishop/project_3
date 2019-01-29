import React, {Component} from "react";
import LoginForm from "../components/LoginForm";
import {Link} from "react-router-dom";
import Logo from "../images/followLogo.svg";
import Dog from "../images/dogPathCropped.jpg";


class Login extends Component{
    render(){
        return(
            <div>
                <div style={{position: "relative"}}>
                    <h3 style={{textAlign: "center", color: "#FFF", fontFamily: "Ubuntu", position: "absolute", top: "26%", left: "15%", fontSize: "16pt", width:"70%"}}>Keep All of Your Pet Information in One Spot</h3>
                    <img src={Dog} alt="Dog on Path" style={{width: "100%"}}></img>
                </div>
                <img src={Logo} alt="Follow Logo" style={{width: "60%", marginLeft: "20%", marginTop: "20px"}}></img>
                <LoginForm />
                <div style={{textAlign: "center", marginBottom: "20px"}}>
                    <Link to="{/NewAccount}" style={{color: "#026670"}}>Create A New Account</Link>
                </div>
            </div>
        )
    };
}

export default Login;

