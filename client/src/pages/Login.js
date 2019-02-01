import React, {Component} from "react";
import LoginForm from "../components/LoginForm";
import {Link} from "react-router-dom";
import LoginImg from "../components/LoginImg";
import LargeLogin from "../components/LargeLogin";



class Login extends Component{
    render(){
        return(
            <div>
                <LargeLogin />
                <LoginImg />
                <LoginForm />
                <div style={{textAlign: "center", marginBottom: "20px"}}>
                    <Link to="/NewAccount" style={{color: "#026670"}}>Create A New Account</Link>
                </div>
            </div>
        )
    };
}

export default Login;

