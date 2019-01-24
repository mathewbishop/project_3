import React, {Component} from "react";
import Navbar from "../components/FollowNavbar";
import Logo from "../images/followLogo.svg";

class Login extends Component{
    render(){
        return(
            <div>
                <img src={Logo} alt="Follow Logo" className="LandingLogo"></img>
            </div>
        )
    };
}

export default Login;

